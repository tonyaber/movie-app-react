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
`

const Image = styled.img`
  max-height: 500px;
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
  font-size: 32px;
  color: gold;
  text-align: center;
`

const LinkComponent = styled(Link)`

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
        <Link to={"/movie/" + item.id}><Button text={"More Information "} /></Link>
      </Information>
      
      
    </SlideContainer>
    )
} 