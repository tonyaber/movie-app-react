import React from "react";
import styled from "styled-components";
import { IMovieList } from '../dto';
import MovieItem from './movieItem';


const Container = styled.div`
  width: 100%;  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 50px 0;
`

export default function List({ movieList}:IMovieList) {
  console.log(movieList)
  return (
    <Container>
      {movieList.map(item => <MovieItem key={item.id} item={item} />)}
    </Container>
    )
} 