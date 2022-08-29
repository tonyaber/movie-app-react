import React from "react";
import Logo from './logo';
import SearchPanel from './searchPanel';
import RandomFilm from './randomFilm';
import { IRandom } from "../dto";

export default function Header({onRandom}:IRandom){
  return (
      <>
        <Logo/>
        <SearchPanel />
        <br/>
      <RandomFilm onRandom={ (randomId)=>onRandom(randomId)} />
      </>
    )
} 