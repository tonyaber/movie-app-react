import React from "react";
import styled from "styled-components";
import { IInformation } from "../dto";
import { Title } from './title';
import { Tagline } from './tagline';
import { Feature } from './feature';
import { FeatureStart } from './featureStart';
import { Overview } from './overview';
import { FavoriteButton } from './favoriteButton';
import star from '../assets/svg/star.svg';
import clock from '../assets/svg/clock.svg';
import calendar from '../assets/svg/calendar.svg';
import heart from '../assets/svg/heart.svg';
import disableHeart from '../assets/svg/disable_heart.svg';
import { formatTime, formatDate } from '../utils/format';
import {ProductionContainer} from './productionContainer'

const InfoStyled = styled.div`
  width: 50%;
  color: white;
  text-align: center;
  z-index:1;
`;

export function Information({ item, onAddToFavorite }: IInformation) {
  console.log(item)
  const productionCompanies = item.production_companies.slice().map(it => it.logo_path).filter(it => it != null);
  return (
    <InfoStyled>
      <Title title={item.title} />
      <Tagline tagline={item.tagline} />
      <ProductionContainer url={productionCompanies} />
      <FeatureStart text={item.vote_average.toFixed(1)} url={ star} />
      <Feature text={formatTime(item.runtime)} url={clock} />
      <Feature text = {formatDate(item.release_date)} url={calendar}/>
      <Overview text={item.overview} />
      <FavoriteButton onAddToFavorite={() => onAddToFavorite(item.id)} isFavorite={ item.favorite}/> 
    </InfoStyled>
  )
} 