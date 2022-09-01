import React from "react";
import styled from "styled-components";
import { IMovieItem } from "../dto";

interface ISlide{
  item: IMovieItem;
}

const SlideContainer = styled.div`
width: 100%;
z-index: 1;
`

const Image = styled.img`
    filter: brightness(90%);
    transform: translateY(-20%);
`

export default function Slide({item}:ISlide){
  return (
    <SlideContainer>
      <Image src={'https://image.tmdb.org/t/p/w1280/'+ item.backdrop_path} />
    </SlideContainer>
    )
} 