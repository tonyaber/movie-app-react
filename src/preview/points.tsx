import React from "react";
import styled from "styled-components";
import { IMovieItem } from "../dto";
import Point from './point';

interface IPoints{
  activeSlider: number;
  amountSliders: number;
  onPointClick: (number: number) => void;
}

const PointsContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 100px;
`

export default function Points({ activeSlider,amountSliders,onPointClick }: IPoints) {
  const points = [];
  for (let i = 0; i < amountSliders; i++){
    points.push(<Point key={i} slide={i } activeSlider={activeSlider} onPointClick = {(number)=>onPointClick(number)} />)
  }
  return (
    <PointsContainer>
      {points}
    </PointsContainer>
    )
} 