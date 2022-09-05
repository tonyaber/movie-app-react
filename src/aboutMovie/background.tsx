import React from "react";
import styled from "styled-components";

interface IBackground {
  url: string;
}

const BackgroundContainer = styled.img<IBackground>`
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
  border-radius: 15px;
`

export function Background({url}:IBackground){
  return (
    <BackgroundContainer url={'https://image.tmdb.org/t/p/w1280/' + url}/>
  )
}