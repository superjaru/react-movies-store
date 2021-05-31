import React from "react";
import styled from "styled-components";
import noImagePic from "../img/no-ingage-found.jpg"
export const MovieItem = ({ movie }) => {
  return (
    <div className="my-3 mr-3 col-xl-3 col-lg-4 col-md-5 col-sm-8 mt-5">
      <Img
        src={movie.poster_path? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : noImagePic }
        alt="img"
      />
      <Title>{movie.title}</Title>
    </div>
  );
};


const Img = styled.img`
width : 100%;
height : 100%;
transition: transform .5s;


&:hover{
  transform : scale(1.1);
  cursor : pointer;
}
 
`

const Title = styled.p`
color : white;
margin-top : 20px;

`

