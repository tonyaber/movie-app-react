import React from "react";
import styled from "styled-components";
import { IMovieItem } from "../dto";
import star from '../assets/svg/star.svg';
import {Overview} from '../aboutMovie/overview';
import {formatDate, formatTime} from '../utils/format';
import { FeatureStart } from "../aboutMovie/featureStart";

interface ISlide{
  item: IMovieItem;
}

const SlideContainer = styled.div`
  flex: 1 0 100%;
  z-index: 1;
  position: relative;
  display: flex;
`

const Image = styled.img`
  max-height: 500px;
  width: 70%;
  object-fit: contain;
  filter: brightness(90%);
  transform: translateY(-20%);
`

const Information = styled.div`
  width: 30%;
  height: 100%;
  padding: 10px 50px 10px 20px;
`

const Title = styled.h3`
  text-align: center;
`

export default function Slide({item}:ISlide){
  return (
    <SlideContainer>
      <Image src={'https://image.tmdb.org/t/p/w1280/' + item.backdrop_path} />
      <Information>
        <Title>{item.title}</Title>
        <FeatureStart text={item.vote_average.toFixed(1)} url={ star} />
        <Overview text={ item.overview} />
      </Information>
      
      
    </SlideContainer>
    )
} 