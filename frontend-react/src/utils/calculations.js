import { BiSolidStar } from "react-icons/bi";

const Rating = (rate) => {
  const percentageOfStars = (rate / 10) * 100;
  const filledStars = Math.round((percentageOfStars / 100) * 5);
  const emptyStars = 5 - filledStars;

  // Generate the star rating JSX
  const stars = Array.from({ length: filledStars }, (_, index) => (
    <BiSolidStar key={index} className="__star-icon" />
  ));

  const empties = Array.from({ length: emptyStars }, (_, index) => (
    <BiSolidStar key={index} className="__star-icon _empty" />
  ));

  return { stars, empties };
};

const Time = (runtime) => {
  return { hours: Math.floor(runtime / 60), minutes: runtime % 60 };
};

const reDate = (releaseDate) => {
  const ret = new Date(releaseDate).toDateString();
  return ret;
};
export const Calculations = { Rating, Time, reDate };
