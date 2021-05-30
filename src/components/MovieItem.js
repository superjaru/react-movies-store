import React from "react";

export const MovieItem = ({ movie }) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="img"
      />
    </div>
  );
};
