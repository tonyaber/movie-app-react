import React from "react";
import Logo from './logo';
import SearchPanel from './searchPanel';
import Button from './favoriteButton';
import { IPopularMovie } from "../dto";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function Header( {onPopularMovie }:IPopularMovie){
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onPopularMovie={() => onPopularMovie()} />
        <Link to='/favorite' data-testid={'favorite-button'}>
          <Button text={"Favorite movies"} onClick={()=>{}}/>
        </Link>
      </HeaderContent>          
    </HeaderContainer>
    )
} 