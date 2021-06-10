import React from 'react'
import {AiFillYoutube} from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import {FavMovie} from './FavMovie';
import styled from "styled-components";
export const Brand = () => {
    return (
        <div className="navbar-brand">
        <LogoWrapper href="#">
          <IconContext.Provider  value={{size: '50px' ,color : "orange"}}><AiFillYoutube/></IconContext.Provider>
          </LogoWrapper>
        <AppNameWrapper className='d-inline' href="#" style={{textDecoration : 'none'}}>

        <AppName main className="">Movie</AppName><AppName main2 className="text-muted lead">Store</AppName> 
        </AppNameWrapper>
       
        </div>
    )
}


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