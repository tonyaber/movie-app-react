import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  padding: 5px;
  border: none; 
  outline: none;
  background: none;
  border: 1px solid #b60082;
  border-radius: 10px;
  transition: 0.5s ease-in;
  cursor:pointer;
  
  &:hover{
    transform: scale(1.2);
    -moz-box-shadow:inset  0 0 10px #b60082; 
    -webkit-box-shadow: inset 0 0 10px #b60082; 
    box-shadow: inset 0 0 10px #b60082;
  } 
`

export default function FavoriteButton() {
  return (
      <Link to='/favorite'>
        <Button>Favorite movies</Button>
      </Link>
    )
} 