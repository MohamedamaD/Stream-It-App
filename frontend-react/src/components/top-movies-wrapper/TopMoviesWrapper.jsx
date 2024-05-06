import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Arrows } from "../../utils";

import "swiper/css";
import "./TopMoviesWrapper.scss";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

export const TopMoviesWrapper = ({ props = [] }) => {
  const prev = useRef(null);
  const next = useRef(null);

  return (
    <div className="__top-movies">
      <h3>Top {props.length || 0} Movies To Watch</h3>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={5}
        navigation={{ prevEl: prev.current, nextEl: next.current }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
          1400: {
            slidesPerView: 6,
          },
        }}
      >
        {props.map((item, i) => (
          <SwiperSlide key={item.id}>
            <Link to={`/movie/${item.id}`} className="__card-wrapper">
              <div className="__img-box">
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt={item.title}
                />
              </div>
              <span className="__counter">{i + 1}</span>
            </Link>
          </SwiperSlide>
        ))}
        <Arrows.Prev ref={prev} />
        <Arrows.Next ref={next} />
      </Swiper>
    </div>
  );
};
