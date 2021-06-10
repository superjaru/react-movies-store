import React, { useState, useEffect } from "react";
import movieAPI from "../apis/movieAPI";
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
    <>
          <SearchBoxWrapper className="form-inline d-flex" >

          <input
            className="form-control"
            value={term}
            
            onChange={(e) => SetTerm(e.target.value)}
            />
            <SearchBtnWrapper><IconContext.Provider value={{color : 'grey' , display : 'inline'}}><BsSearch /></IconContext.Provider></SearchBtnWrapper>

            </SearchBoxWrapper>
            </>
  );
};




const SearchBoxWrapper = styled.form`
position : absolute;
right : 80px;
`

const SearchBtnWrapper = styled.div`
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