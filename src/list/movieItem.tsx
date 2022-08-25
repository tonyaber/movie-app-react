import React from "react";
import { IItem, IMovieItem } from '../dto';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Image = styled.img`
  width: 150px;
  height: auto;
`;

export default function MovieItem({ item}:IItem) {
  return (
    <Link to="/movie" >
      <p>{item.title}</p>
      <Image src = {'https://image.tmdb.org/t/p/w500/' + item.poster_path}/>
      
    </Link>
    )
} 