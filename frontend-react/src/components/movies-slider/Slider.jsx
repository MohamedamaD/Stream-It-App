import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Arrows } from "../../utils";
import { motion } from "framer-motion";
import { BiPlay } from "react-icons/bi";
import "swiper/css";
import "./Slider.scss";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

export const Slider = ({ movies = [], title = "" }) => {
  const prev = useRef(null);
  const next = useRef(null);
  return (
    <div className="__movies-slider">
      <h3>{title}</h3>
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
        {movies.map((item, i) => (
          <SwiperSlide key={item.id}>
            <Link to={`/movie/${item.id}`} className="__main-link">
              <div className="__img-box __wrap" style={{ cursor: "pointer" }}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt={item.title}
                />
              </div>
            </Link>

            <motion.div
              className="__motion-slide"
              title={item.title}
              whileHover={{ opacity: 1 }}
            >
              <Link to={`/movie/${item.id}`} className="__card-wrapper">
                <div className="__img-box">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt={item.title}
                  />
                  <BiPlay className="__play-icon" />
                </div>
                <div className="__text-box">
                  <h5 className="__title">
                    {item.title.split(" ").length < 4
                      ? item.title
                      : item.title.split(" ").splice(0, 4).join(" ")}
                  </h5>
                  <p>Release Date : {item.release_date}</p>
                </div>
              </Link>
            </motion.div>
          </SwiperSlide>
        ))}
        <Arrows.Prev ref={prev} />
        <Arrows.Next ref={next} />
      </Swiper>
    </div>
  );
};
