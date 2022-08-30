import React from "react";
import Logo from './logo';
import SearchPanel from './searchPanel';
import FavoriteButton from './favoriteButton';
import { IPopularMovie, ISearchPanel } from "../dto";

export default function Header( {onPopularMovie,onSearchPanel}:ISearchPanel&IPopularMovie){
  return (
      <>
      <Logo onPopularMovie={()=>onPopularMovie() } />
        
      {/* <RandomFilm onRandom={ (randomId)=>onRandom(randomId)} /> */}
      </>
    )
} 