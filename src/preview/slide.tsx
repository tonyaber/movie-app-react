import React from "react";
import styled from "styled-components";
import { IMovieItem } from "../dto";

interface ISlide{
  item: IMovieItem;
}

const SlideContainer = styled.div`
width: 100%;
`

export default function Slide({item}:ISlide){
  return (
    <SlideContainer>
      <img src={'https://image.tmdb.org/t/p/w1280/'+ item.backdrop_path} />
    </SlideContainer>
    )
} 