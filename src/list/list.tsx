import React from "react";
import { IMovieList } from '../dto';
import MovieItem from './movieItem';


export default function List({ movieList}:IMovieList) {

  return (
    <>
      {movieList.map(item => <MovieItem key={item.id} item={item}/>)}
    </>
    )
} 