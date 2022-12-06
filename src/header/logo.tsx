import React from "react";
import icon from '../assets/svg/tv.svg'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IPopularMovie } from "../dto";
import image from '../assets/svg/film-rolls-animate (3).svg'

const Icon = styled.img`
  width: 20px;
  height: auto;
  filter: invert(1);
  margin-right: 10px;
`;

const Image = styled.img`
  width: 100px;
`

const Title = styled.h1`
  font-size: 32px;
  @media (max-width: 480px) {
    font-size: 24px;

}
`

const LinkComponent = styled(Link)` 
  display: flex;
  color: white;
  text-decoration: none;
 
  &:hover, &:focus, &:active{
    color: white;
    text-decoration: none;
  }
`

export default function Logo({onPopularMovie}:IPopularMovie) {
  return (
    <LinkComponent to={"/"} onClick={()=>onPopularMovie()}>
      <Icon src={icon} />
      <Title>MovieApp</Title>
    
      </LinkComponent>
    )
} 