import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchByTitle } from "../../store/slices/moviesSlice";
import { Slider } from "../../components/movies-slider/Slider";
import { Loading } from "../loading/Loading";
import "./SearchResult.scss";
export const SearchResult = () => {
  const { searchQuery } = useParams();
  const { searchResult, status, totalPages, currentPage } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();
  const paginationHandler = (ev, index) => {
    dispatch(searchByTitle({ searchQuery, page: index }));
  };
  useEffect(() => {
    dispatch(searchByTitle({ searchQuery }));
    return () => {};
  }, [searchQuery, dispatch]);
  if (status === "loading") return <Loading />;
  console.log(totalPages);
  return (
    <div className="search-result">
      <div className="search-container container">
        <Slider movies={searchResult} title="search result" />
        <div className="pagination">
          <div className="bolts">
            {Array(totalPages)
              .fill(1)
              .map((_, index) => (
                <span
                  className={`${
                    index + 1 === currentPage ? "active" : ""
                  } bolt`}
                  onClick={(ev) => paginationHandler(ev, index + 1)}
                >
                  {index + 1}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
