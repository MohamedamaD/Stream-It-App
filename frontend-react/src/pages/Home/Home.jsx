import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGenresMovies,
  fetchPopularMovies,
  fetchTrendingMovies,
} from "../../store/slices/moviesSlice";

import { HeroSlide, TopMoviesWrapper, MoviesSlider } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Loading } from "../loading/Loading";
import { Footer, Header } from "../../containers";

export const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, trendingMovies, status } = useSelector(
    (state) => state.movies
  );
  const { username } = useSelector((state) => state.user);
  
  useEffect(() => {
    dispatch(fetchPopularMovies(3));
    dispatch(fetchTrendingMovies());
    dispatch(fetchGenresMovies());
  }, [dispatch]);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <div id="__home">
      <div className="__hero">
        <Swiper navigation={{ el: "." }} modules={[Navigation]}>
          {trendingMovies.slice(0, 7).map((item) => (
            <SwiperSlide key={item.id}>
              <HeroSlide props={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container __home__container">
        <TopMoviesWrapper props={popularMovies} />
        <MoviesSlider movies={trendingMovies} title="Latest Movies" />
      </div>
    </div>
  );
};
