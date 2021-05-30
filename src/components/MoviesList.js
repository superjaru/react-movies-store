import React from "react";
import { MovieItem } from "./MovieItem";
export const MoviesList = ({ movies, onMovieSelect }) => {
  const renderedList = movies.map((movie) => {
    return <MovieItem key={movie.id} movie={movie} />;
  });
  return <div>{renderedList}</div>;
};
