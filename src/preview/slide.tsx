import React from "react";
import styled from "styled-components";
import { IMovieItem } from "../dto";
import star from '../assets/svg/star.svg';
import {Overview} from '../aboutMovie/overview';
import {formatDate, formatTime} from '../utils/format';
import { FeatureStart } from "../aboutMovie/featureStart";
import { Link } from "react-router-dom";
import { Button } from './button';

interface ISlide{
  item: IMovieItem;
}

const SlideContainer = styled.div`
  flex: 1 0 100%;
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`

const Image = styled.img`
   width: auto;
    transform: none;
    height: 100%;
  object-fit: contain;
  filter: brightness(90%);

  z-index:4;
  position: relative;
  @media (min-width: 1024px) {
    width: 60%;
    max-height: 400px;
    transform: translateY(-20%);
  }
`

const Information = styled.div`
  width: 30%;
  height: 100%;
  padding: 10px 50px 10px 20px;
  z-index:5;
  @media (max-width: 320px) {
    width: 100%;
  position: absolute;

  }
  @media (min-width: 321px) {
    width: 100%;
    position: absolute;

  }
  @media (min-width: 480px) {
    width: 50%;
    position: absolute;

  }

  @media (min-width: 1024px) {
    width: 30%;
    position:static;
  }
`

const Title = styled.h3`
  font-size: 32px;
  color: gold;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 24px;
}
`

const LinkComponent = styled(Link)`
  text-decoration: none;
`

export default function Slide({ item }: ISlide) {
  const overview = item.overview.slice(0, 100) + '...';
  return (
    <SlideContainer>
      <Image src={'https://image.tmdb.org/t/p/w1280/' + item.backdrop_path} />
      <Information>
        <Title>{item.title}</Title>
        <FeatureStart text={item.vote_average.toFixed(1)} url={ star} />
        <Overview text={overview} />
        <LinkComponent to={"/movie/" + item.id}><Button text={"More Information "} onClick={()=>{}} /></LinkComponent>
      </Information>
      
      
    </SlideContainer>
    )
} 