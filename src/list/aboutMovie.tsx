import React, { useEffect, useRef, useState } from "react";
import { IAboutItem } from '../dto';
import styled from "styled-components";
import { Link } from "react-router-dom";
import star from '../assets/svg/star.svg';
import clock from '../assets/svg/clock.svg';
import calendar from '../assets/svg/calendar.svg'
interface IBackground {
  url: string;
}

const formatTime = (duration: number) => {

  if (duration < 60) {
    return duration;
  }
    const hour = Math.floor(duration / 60);
  const minute = Math.floor(duration % 60);
    return `${hour} : ${minute > 10 ? minute : '0' + minute}`;
}

const formatDate = (date: string) => {
  const index = date.indexOf('-');
  return date.slice(0, index);
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding:0;
  width: 90%;
  height: 600px;   
  position: relative; 
`;

const Background = styled.div<IBackground>`
display: block;
  position: absolute;
  top:0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url( ${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  filter: blur(3px) brightness(60%);
  z-index:0;
`


const Poster = styled.img`
  width: 200px;
  height: 300px;
  z-index:1;
`;

const InfoContainer = styled.div`
  width: 50%;
  color: white;
  text-align: center;
  z-index:1;
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 32px;
`;

const Features = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: right;
  
`

const FeaturesIcon = styled.img`
  width: 30px;
  height: 30px; 
  filter: invert(1);  
`

const FeaturesIconStar = styled.img`
  width: 30px;
  height: 30px;
  transform: scale(1.7);
  filter: invert(86%) sepia(35%) saturate(4590%) hue-rotate(2deg) brightness(110%) contrast(102%);
`
const Tagline = styled.p`
  display: block;
  text-align: right;
  font-style: italic;
`

const Overview = styled.p`
  text-align: center;

`
export default function AboutMovie({ item,  onAddToFavorite }: IAboutItem) {
  console.log(item)
  return (   
    <Container>
      <Background url={'https://image.tmdb.org/t/p/w1280/' + item.backdrop_path}/>
      <Poster src={'https://image.tmdb.org/t/p/w500/' + item.poster_path}/>
      <InfoContainer>
        <Title>{item.title}</Title>
        <Tagline>{item.tagline}</Tagline>
        <Features>
          {item.vote_average.toFixed(1)} 
          <FeaturesIconStar src={star}/>          
        </Features>
        <Features>
          {formatTime(item.runtime)}
          <FeaturesIcon src={clock}/>          
        </Features>
        <Features>
          {formatDate(item.release_date)}
          <FeaturesIcon src={calendar}/>        
        </Features>
        <Overview>{item.overview}</Overview>

        <button onClick={() => onAddToFavorite(item.id)}>Add to Favorite////{item.favorite?'true':'false'}</button>
      </InfoContainer>
    </Container>   
    )
} 

// adult: false
// backdrop_path: "/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg"
// belongs_to_collection: {id: 399, name: 'Predator Collection', poster_path: '/6Z7lASptoiRVxiCFvZaFgH9qp7u.jpg', backdrop_path: '/fXVzk9OxQwROCuiWvd0Cv76qmZi.jpg'}
// budget: 0
// genres: (2) [{…}, {…}]
// homepage: "https://www.20thcenturystudios.com/movies/prey"
// id: 766507
// imdb_id: "tt11866324"
// original_language: "en"
// original_title: "Prey"
// overview: "When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal."
// popularity: 5322.786
// poster_path: "/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg"
// production_companies: (3) [{…}, {…}, {…}]
// production_countries: [{…}]
// release_date: "2022-08-02"
// revenue: 0
// runtime: 100
// spoken_languages: (2) [{…}, {…}]
// status: "Released"
// tagline: "They hunt to live. It lives to hunt."
// title: "Prey"
// video: false
// vote_average: 8.034
// vote_count: 3288