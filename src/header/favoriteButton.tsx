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
`

export default function FavoriteButton() {
  return (
      <Link to='/favorite'>
        <Button>Favorite movies</Button>
      </Link>
    )
} 