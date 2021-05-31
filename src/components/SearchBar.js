import React, { useState, useEffect } from "react";
import movieAPI from "../apis/movieAPI";
import {AiFillYoutube} from "react-icons/ai";
import {BsSearch} from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";
export const SearchBar = ({ onSearch , setSearchBtn , searchBtn}) => {
  const [term, SetTerm] = useState("");
  const [debouncedTerm, SetDebouncedTerm] = useState("");
  useEffect(() => {
    if (term.length < 1) {
      return;
    }
    const doSearch = async () => {
      const { data } = await movieAPI.get("", {
        params: {
          query: debouncedTerm,
        },
      });
      onSearch(data.results);
    };
    doSearch();
  }, [debouncedTerm]);
  useEffect(() => {
    const timer = setTimeout(() =>{
      SetDebouncedTerm(term)
    },500);
    return () => {
      clearTimeout(timer);
    }
  }, [term])
  return (
    <NavBar>
      <div className="navbar-brand">
        <LogoWrapper href="#">
          <IconContext.Provider  value={{size: '50px' ,color : "orange"}}><AiFillYoutube/></IconContext.Provider>
          </LogoWrapper>
        <AppNameWrapper className='d-inline' href="#" style={{textDecoration : 'none'}}>

        <AppName main className="">Movie</AppName><AppName main2 className="text-muted lead">Store</AppName> 
        </AppNameWrapper>
        </div>
  
          <SearchBoxWrapper className="form-inline d-flex" >

          <input
            className="form-control"
            value={term}
            type="search"
            onChange={(e) => SetTerm(e.target.value)}
            />
            <SearchBtnWrapper><IconContext.Provider value={{color : 'grey' , display : 'inline'}}><BsSearch /></IconContext.Provider></SearchBtnWrapper>

            </SearchBoxWrapper>
       
    </NavBar>
  );
};

const NavBar = styled.nav`
display : flex;
padding-top : 10px;
align-items: center;
;
`
const LogoWrapper = styled.a`
margin-left : 12px;
padding-left : 24px;
;
`

const AppName = styled.span`
font-family: "Bebas Neue", cursive;
font-size: 25px;
color : ${props => (props.main ? "white" : "grey")};
`
const AppNameWrapper = styled.a`
position : absolute;
margin-top: 7px;
margin-left : 5px;

`

const SearchBoxWrapper = styled.form`
position : absolute;
right : 80px;
`

const SearchBtnWrapper = styled.form`
position : absolute;
right : 10px;
top : 5px;
&:hover {
  cursor : pointer ;

}
${BsSearch}:hover &{
  fill : red;
}
`