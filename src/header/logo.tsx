import React from "react";
import img from '../assets/svg/tv.svg'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IPopularMovie } from "../dto";

const Image = styled.img`
  width: 20px;
  height: auto;
  filter: invert(1);
  margin-right: 10px;
`;

const Title = styled.h1`
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
        <Image src={img} />
        <Title>MovieApp</Title>
      </LinkComponent>
    )
} 