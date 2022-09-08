import React, { useState } from "react";
import styled from "styled-components";

interface IPoint{
  activeSlider: number;
  slide: number;
  onPointClick: (slider: number) => void;
}
interface IPointContainer {
  color: string;
}

const PointContainer = styled.div<IPointContainer>`
  width: 10px;
  height: 10px;
  background: ${props => props.color};
  z-index:2;
  margin-top: 15px;

   &:hover{
    transform: scale(1.5);
  } 
`

export default function Point({ activeSlider, slide, onPointClick }: IPoint) { 
  const color = activeSlider === slide ? 'red' : 'white';
  return (
    <PointContainer color={color } onClick={()=>onPointClick(slide)} ></PointContainer>
    )
} 