import React from "react";
import styled from "styled-components";
import {Brand} from '../components/Brand'
import {SearchBar} from "../components/SearchBar"
export const Navbar = ({onSearch , setSearchBtn , searchBtn}) => {
    return (
        <NavBar>
            <Brand/>
            <FavBtn>My Favorite</FavBtn>
            <SearchBar onSearch={onSearch} setSearchBtn={setSearchBtn} searchBtn={searchBtn} />
        </NavBar>
    )
}



const NavBar = styled.nav`
display : flex;
padding-top : 10px;
align-items: center;
;
`
const FavBtn = styled.div`
font-family: "Bebas Neue";
letter-spacing: 1px;
font-size: 1.5rem;
margin-left : 10%;
color : white;
&:hover{
    color : grey;
    cursor : pointer;
}
`

