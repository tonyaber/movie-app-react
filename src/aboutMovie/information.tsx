import React from "react";
import styled from "styled-components";
import { IInformation } from "../dto";
import { Title } from './title';
import { Tagline } from './tagline';
import { Feature } from './feature';
import { FeatureStart } from './featureStart';
import { Overview } from './overview';
import star from '../assets/svg/star.svg';
import clock from '../assets/svg/clock.svg';
import calendar from '../assets/svg/calendar.svg'
import { formatTime, formatDate } from '../utils/format';

const InfoStyled = styled.div`
  width: 50%;
  color: white;
  text-align: center;
  z-index:1;
`;

export function Information({item, onAddToFavorite}:IInformation){
  return (
    <InfoStyled>
      <Title title={item.title} />
      <Tagline tagline={item.tagline} />
      <FeatureStart text={item.vote_average.toFixed(1)} url={ star} />
      <Feature text={formatTime(item.runtime)} url={clock} />
      <Feature text = {formatDate(item.release_date)} url={calendar}/>
      <Overview text={item.overview} />
      <button onClick={() => onAddToFavorite(item.id)}>Add to Favorite////{item.favorite?'true':'false'}</button>
    </InfoStyled>
  )
}