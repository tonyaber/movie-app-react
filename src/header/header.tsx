import React from "react";
import Logo from './logo';
import SearchPanel from './searchPanel';
import FavoriteButton from './favoriteButton';
import { IFavorite, IPopularMovie, ISearchPanel } from "../dto";

export default function Header( {onFavoriteClick, onPopularMovie, }:IPopularMovie&IFavorite){
  return (
      <>
      <Logo onPopularMovie={()=>onPopularMovie() } />
      <FavoriteButton onFavoriteClick={() => onFavoriteClick()} />
      <br />
      {/* <RandomFilm onRandom={ (randomId)=>onRandom(randomId)} /> */}
      </>
    )
} 