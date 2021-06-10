import React from "react";
import { MovieItem } from "./MovieItem";
export const MoviesList = ({ movies, onMovieSelect }) => {
  const renderedList = movies.map((movie) => {
    return <MovieItem key={movie.id} movie={movie} />;
  });
  return <div className="row m-3  container mr-0">{console.log(movies)}<p className="my-3 text-muted lead">Your Search</p>{renderedList}</div>;
};
