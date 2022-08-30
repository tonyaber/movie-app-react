import React from "react";
import styled from "styled-components";
import { IMovieList } from '../dto';
import MovieItem from './movieItem';


const Container = styled.div`
  width: 80%;  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 50px 0;
`

export default function List({ movieList, onSelect}:IMovieList) {

  return (
    <Container>
      {movieList.map(item => <MovieItem key={item.id} item={item} onSelect={ ()=>onSelect(item.id)} />)}
    </Container>
    )
} 