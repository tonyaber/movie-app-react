import React from "react";
import { IMovieItem } from '../dto';
import styled from "styled-components";

const Image = styled.img`
  width: 150px;
  height: auto;
`;

interface IItem{
  item: IMovieItem
}


export default function MovieItem({ item}:IItem) {
  return (
    <>
      <p>{item.title}</p>
      <Image src = {'https://image.tmdb.org/t/p/w500/' + item.poster_path}/>
      
    </>
    )
} 