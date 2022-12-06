import React from "react";
import styled from "styled-components";
import { IMovieList } from '../dto';
import MovieItem from './movieItem';


const Container = styled.div`
  width: 100%;  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 320px) {
    gap: 30px 0;
  }
  @media (min-width: 321px) {
    gap: 30px 20px;
  }
  @media (min-width: 480px) {
    gap: 30px 20px;
  }
  
  @media (min-width: 1024px) {
    gap: 50px 40px;
  }
`

export default function List({ movieList}:IMovieList) {
  console.log(movieList)
  return (
    <Container>
      {movieList.map((item,i) => <MovieItem key={i} item={item} />)}
    </Container>
    )
} 