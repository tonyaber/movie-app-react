import React from "react";
import styled from "styled-components";

interface IFeature {
  text: number|string;
  url: any;
}

const FeaturesStyled = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: right;

`;

const FeaturesIcon = styled.img`
  width: 30px;
  height: 30px;
  transform: scale(1.7);
  filter: invert(86%) sepia(35%) saturate(4590%) hue-rotate(2deg) brightness(110%) contrast(102%);
`

export function FeatureStart({text, url}:IFeature){
  return (
    <FeaturesStyled>
      {text}
      <FeaturesIcon src={url}/> 
    </FeaturesStyled>
  )
}