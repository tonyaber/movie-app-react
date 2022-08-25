import React from "react";
import Logo from './logo';
import SearchPanel from './searchPanel';
import RandomFilm from './randomFilm';

export default function Header(){
  return (
      <>
        <Logo/>
        <SearchPanel />
        <br/>
        <RandomFilm/>
      </>
    )
} 