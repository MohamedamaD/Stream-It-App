import React from "react";
import "./HeroSlide.scss";
import { BiSolidStar, BiSolidStarHalf } from "react-icons/bi";
import { FlatButton } from "../buttons/FlatButton";
import { images } from "../../constants";
import { useSelector } from "react-redux";

export const HeroSlide = ({ props }) => {
  const rating = props.vote_average / 2;
  const rem = Math.ceil(rating) - rating;
  const ratingCeil = rating > 5 ? 5 : Math.ceil(rating);
  const ratingArray = Array(ratingCeil).fill(1);
  const moviesGenres = useSelector((state) => state.movies.genres);
  return (
    <div className="__hero-slide">
      <div className="container __hero__container">
        <div className="__content">
          <h1>{props.title}</h1>
          <div className="__stars">
            <div>
              {ratingArray.map((item, index) =>
                rem !== 0 && ratingArray.length - 1 === index ? (
                  <BiSolidStarHalf key={index} className="__star-icon" />
                ) : (
                  <BiSolidStar key={index} className="__star-icon" />
                )
              )}
            </div>
            <span>{rating}</span>
            <img src={images.IMBD} alt="IMBD LOGO" />
          </div>
          <p className="__description">{props.overview}</p>
          <div className="__meta-data">
            <p>
              <span className="__meta">Genres</span>{" "}
              <span className="__data">{moviesGenres[props.genre_ids[0]]}</span>
            </p>
            <p>
              <span className="__meta">tags</span>{" "}
              {props.genre_ids.map((item, index) => (
                <span className="__data" key={item}>
                  {moviesGenres[item]}
                  {index < props.genre_ids.length - 1 ? "," : ""}
                </span>
              ))}
            </p>
          </div>
          <FlatButton value={"play now"} />
        </div>
        <div className="__bg-image">
          <img
            src={`https://image.tmdb.org/t/p/original/${props.backdrop_path}`}
            alt=""
          />
        </div>
        <div className="__overlay"></div>
      </div>
    </div>
  );
};
