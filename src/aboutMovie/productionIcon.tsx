import React from "react";
import styled from "styled-components";

interface IProductionIcon {
  url: string;
}


const  Icon= styled.img`
  width: 50px;
  filter: invert(1);  
`

export function ProductionIcon({url}:IProductionIcon){
  return (
    <Icon src={'https://image.tmdb.org/t/p/w500/' + url}/> 

  )
}