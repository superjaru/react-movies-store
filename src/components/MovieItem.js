import React from "react";
import styled from "styled-components";
import noImagePic from "../img/no-ingage-found.jpg"
export const MovieItem = ({ movie }) => {
  return (
    <div className="my-5 mt-0 mr-3 col-xl-2 col-lg-4 col-md-5 col-sm-8">
      <Img
        src={movie.poster_path? `https://image.tmdb.org/t/p/w300/${movie.poster_path}` : noImagePic }
        alt="img"
      />
      <Title>{movie.title}</Title>
    </div>
  );
};

const Div = styled.div`
width : 20%;
height : 20%;
`
const Img = styled.img`
width : 100%;
height : 90%;
transition: transform .5s;


&:hover{
  transform : scale(1.1);
  cursor : pointer;
}
 
`

const Title = styled.p`
color : white;
margin-top : 20px;
font-size: 80%;
`

