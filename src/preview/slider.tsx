import React from "react";
import styled from "styled-components";
import { IMovieItem } from "../dto";
import Slide from "./slide";

interface ISlider{
  movieList: IMovieItem[];
  slideNumber: number;
}

interface ISliderContainer{
  slideNumber: number;
}

const SliderContainer = styled.div<ISliderContainer>`
  display: flex;
  width: 100%;
  height: 400px;
  transform: translateX(calc(${props => props.slideNumber} * 100%));
  transition: transform 0.5s ease-in-out;
`

export default function Slider({movieList, slideNumber}:ISlider){
  return (
    <SliderContainer slideNumber = {-slideNumber}>
      {movieList.map(it => <Slide key={it.id} item={ it}/>)}
    </SliderContainer>
    )
} 