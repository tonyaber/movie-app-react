import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  padding: 5px;
  border: none; 
  outline: none;
  background: none;
  border: 1px solid white;
  border-radius: 10px;
  transition: 0.5s ease-in;
  cursor:pointer;
  &:hover{
    transform: scale(1.2);
  } 
`

export default function FavoriteButton() {
  return (
      <Link to='/favorite'>
        <Button>Favorite movies</Button>
      </Link>
    )
} 