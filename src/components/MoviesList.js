import React from "react";
import { MovieItem } from "./MovieItem";
export const MoviesList = ({ movies, onMovieSelect }) => {
  const renderedList = movies.map((movie) => {
    return <MovieItem key={movie.id} movie={movie} />;
  });
  return <div className="row mt-3 container mr-0">{console.log(movies)}{renderedList}</div>;
};
