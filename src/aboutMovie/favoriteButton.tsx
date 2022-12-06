import React from "react";
import styled from "styled-components";
import heart from '../assets/svg/heart.svg';
import disableHeart from '../assets/svg/disable_heart.svg';

interface IFavoriteButton {
  onAddToFavorite: () => void;
  isFavorite : Boolean;
}

const FavoriteContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  padding: 5px;
  background-color: red;
  border: none;
  border-radius: 10px;
  color: white;
  text-decoration: none;
  width: 200px;
  text-align: center;
  transition: 0.5s ease-in;

  &:hover, &:focus, &:active{
    color: white;
    text-decoration: none;
  }
   &:hover{
    transform: scale(1.05);
  } 
`

const FavoriteIcon = styled.img`
  width: 30px;
  height: 30px;
  filter: invert(86%);
`

const FavoriteText = styled.span`
`

export function FavoriteButton({ onAddToFavorite, isFavorite }: IFavoriteButton) {
  const text = isFavorite ? 'Remove from favorite' : 'Add to favorite';
  const src = isFavorite ? disableHeart : heart;
  return (
    <FavoriteContainer onClick={() => { onAddToFavorite() }}>
    <FavoriteText>{text}</FavoriteText>
      <FavoriteIcon src={ src} />
   </FavoriteContainer>
  )
}