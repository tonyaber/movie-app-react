import React from "react";
import Logo from './logo';
import SearchPanel from './searchPanel';
import FavoriteButton from './favoriteButton';
import { IPopularMovie } from "../dto";
import styled from "styled-components";

const HeaderContainer = styled.div`
  padding: 10px;
  
  width: 100vw;
  position: fixed;
  top:0;
  left:0;
  z-index: 3;
 
  background-color: #342131;
`

const HeaderContent = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function Header( {onPopularMovie }:IPopularMovie){
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onPopularMovie={()=>onPopularMovie() } />
        <FavoriteButton/>
      </HeaderContent>          
    </HeaderContainer>
    )
} 