import React, { useEffect, useState } from "react";
import { Footer, Header } from "../../containers";
import { CustomButton, Input, MoviesSlider, TextArea } from "../../components";
import { Loading } from "../loading/Loading";
import {
  fetchTrendingMovies,
  fetchMovieById,
} from "../../store/slices/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { images } from "../../constants";
import { Calculations } from "../../utils/calculations";
import "./Movie.scss";
import { BiSolidStar } from "react-icons/bi";

export const Movie = () => {
  const dispatch = useDispatch();
  const { trendingMovies, status, activeMovie } = useSelector(
    (state) => state.movies
  );
  const { movieId } = useParams();
  const { stars, empties } = Calculations.Rating(activeMovie?.vote_average);
  const { hours, minutes } = Calculations.Time(activeMovie?.runtime);
  const releaseDate = Calculations.reDate(activeMovie?.release_date);
  const [isDescriptionVisible, setDescriptionVisible] = useState(true);
  const [noStar, setNoStars] = useState(0);

  useEffect(() => {
    if (trendingMovies.length === 0) {
      dispatch(fetchTrendingMovies());
    }
    if (movieId != null) {
      dispatch(fetchMovieById(movieId));
    }
  }, [dispatch, trendingMovies, movieId]);
  console.log(activeMovie);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <div className="__movie">
      <div className="__movie-container container">
        <main>
          <div className="__poster">
            <img
              src={`https://image.tmdb.org/t/p/original/${activeMovie.backdrop_path}`}
              alt={activeMovie.title + "img"}
            />
          </div>
          <div className="__details">
            <div className="__wrapper">
              <h1 className="__bg-image">{activeMovie.title}</h1>
              <div>
                {stars}
                {empties}
              </div>
              <div className="_wr">
                <span className="__rate">{stars.length}</span>
                <img src={images.IMBD} alt="IMBD logo" />
              </div>
            </div>
            <div className="__wrapper">
              {activeMovie?.genres?.map((item) => (
                <span className="__genres" key={item.id}>
                  {item.name}
                </span>
              ))}
            </div>
            <div className="__wrapper _last">
              <span className="__status">{activeMovie.status}</span>
              <p className="__runtime">
                {hours}hr : {minutes}mins
              </p>
              <span>-</span>
              <p className="__releaseDate">{releaseDate}</p>
            </div>
          </div>
          <div className="__metadata">
            <div className="__meta">
              <CustomButton
                value="Description"
                className={isDescriptionVisible ? "active" : ""}
                onClick={() => {
                  setDescriptionVisible(true);
                }}
              />
              <CustomButton
                value="Rate & Review"
                className={!isDescriptionVisible ? "active" : ""}
                onClick={() => {
                  setDescriptionVisible(false);
                }}
              />
            </div>
            <div className="__data">
              {isDescriptionVisible ? (
                <div className="__description-data">
                  <p>{activeMovie.overview}</p>
                  <span>
                    {" "}
                    Homepage : <a href={activeMovie?.homepage}>here</a>
                  </span>
                </div>
              ) : (
                <div className="__review-data">
                  <p>There are no reviews yet.</p>
                  <h1>Be the first to review "{activeMovie?.title}"</h1>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>

                  <div className="__user-rating">
                    <span>Your rating</span>
                    {}
                    {Array(5)
                      .fill(1)
                      .map((_, i) => (
                        <BiSolidStar
                          key={i}
                          className={
                            i < noStar
                              ? "__star-icon _red"
                              : "__star-icon _red _empty"
                          }
                          onClick={() => {
                            setNoStars(i + 1);
                          }}
                        />
                      ))}
                  </div>
                  <form action="">
                    <TextArea
                      name="user-review"
                      id="user-review"
                      label="review*"
                    />
                    <div className="wrap">
                      <Input type="text" id="Name" labelValue="Name*" />
                      <Input type="email" id="email" labelValue="Email*" />
                    </div>
                    <Input type="submit" />
                  </form>
                </div>
              )}
            </div>
          </div>
        </main>
        <MoviesSlider movies={trendingMovies} title="Latest Movies" />
      </div>
    </div>
  );
};
