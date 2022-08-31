import React from "react";
import Logo from './logo';
import SearchPanel from './searchPanel';
import FavoriteButton from './favoriteButton';
import { IPopularMovie } from "../dto";

export default function Header( {onPopularMovie }:IPopularMovie){
  return (
      <>
      <Logo onPopularMovie={()=>onPopularMovie() } />
      <FavoriteButton/>
      <br />
      {/* <RandomFilm onRandom={ (randomId)=>onRandom(randomId)} /> */}
      </>
    )
} 