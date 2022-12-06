import { GENRES } from '../const/const';
import Genre from './genre';
import React, { useState } from 'react';
import styled from 'styled-components';

interface IGenre{
  onGenreClick: (id: number) => void;
  genreActive: number;
}
const GenreComponent = styled.div`
gap: 10px 10px;
position: relative;
margin: 20px 0;
display: flex;
flex-wrap: wrap;
justify-content: center;
  @media (min-width: 768px) {
    gap: 20px 20px;
  }
  @media (min-width: 1024px) {
    gap: 20px 40px;
  }
`

const GenreMenu = styled.div`
 margin: 20px 0;
  padding: 10px;
  border: 1px solid #b60082;
  border-radius: 10px;
  text-align: center;
  @media (min-width: 769px) {
      display: none;
       
  }
`

export default function GenreList({onGenreClick,genreActive}:IGenre) {
  const [isShow, setShow]=useState(true);
  console.log(isShow)

  const handleClick = ()=>{
    setShow(state=>state=!isShow);
  }
  return (
    <>
      <GenreMenu onClick={handleClick}>Genres</GenreMenu>
      <GenreComponent>
 {GENRES.map((it, i) => <Genre isShow={isShow} text={it.name} key={i} onClick={() => onGenreClick(it.id)} active={genreActive===it.id}></Genre>)}
      </GenreComponent>
     
    </>
  )
}