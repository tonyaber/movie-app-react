import React from "react";
import styled from "styled-components";
import { IMovieItem } from "../dto";
import star from '../assets/svg/star.svg';
import {Overview} from '../aboutMovie/overview';
import {formatDate, formatTime} from '../utils/format';
import { FeatureStart } from "../aboutMovie/featureStart";
import { Link } from "react-router-dom";

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
  font-size: 32px;
  color: gold;
  text-align: center;
`

const LinkComponent = styled(Link)`
display: block;
margin: 20px auto;
padding: 5px;
background-color: red;
border-radius: 10px;
  color: white;
  text-decoration: none;
  width: 150px;
  text-align: center;

  &:hover, &:focus, &:active{
    color: white;
    text-decoration: none;
  }
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
        <LinkComponent to={"/movie/" + item.id}>More Information</LinkComponent>
      </Information>
      
      
    </SlideContainer>
    )
} 