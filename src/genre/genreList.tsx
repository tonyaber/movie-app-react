import { GENRES } from '../const/const';
import Button from '../header/favoriteButton';
import React from 'react';
import styled from 'styled-components';

interface IGenre{
  onGenreClick: (id: number) => void;
  genreActive: number;
}
const GenreComponent = styled.div`
margin: 20px 0;
`

export default function GenreList({onGenreClick,genreActive}:IGenre) {
  return (
    <GenreComponent>
      {GENRES.map((it, i) => <Button text={it.name} key={i} onClick={() => onGenreClick(it.id)} active={genreActive===it.id}></Button>)}
    </GenreComponent>
  )
}