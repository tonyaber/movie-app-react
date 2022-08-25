import React from "react";
import { IMovieItem } from '../dto';
import MovieItem from './movieItem';

interface IMovieList{
  movieList: Array<IMovieItem>
}


export default function List({ movieList}:IMovieList) {

  return (
    <>
      {movieList.map(item => <MovieItem key={item.id} item={item}/>)}
    </>
    )
} 