import React from "react";
import Logo from './logo';
import SearchPanel from './searchPanel';
import RandomFilm from './randomFilm';
import { IRandom, ISearchPanel } from "../dto";

export default function Header({onRandom, onSearchPanel}:IRandom&ISearchPanel){
  return (
      <>
        <Logo/>
        <SearchPanel onSearchPanel={(text)=>onSearchPanel(text)} />
        <br/>
      <RandomFilm onRandom={ (randomId)=>onRandom(randomId)} />
      </>
    )
} 