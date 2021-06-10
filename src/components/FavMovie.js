import React from 'react'
import styled from "styled-components";
export const FavMovie = () => {
    return (
        <FavMovieWrapper className="d-inline">
            My Favorite
        </FavMovieWrapper>
    )
}

const FavMovieWrapper = styled.div`
position : absolute;
margin-top: 7px;
margin-left : 10%;
color : white;
&:hover{
    color : grey;
    cursor : pointer;
}
`