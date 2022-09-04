import React from "react";
import styled from "styled-components";

interface IFeature {
  text: number|string;
  url: any;
}

const FeatureStyled = styled.div`
   margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: right;
`;

const FeatureIcon = styled.img`
  width: 30px;
  height: 30px; 
  filter: invert(1);  
`

export function Feature({text, url}:IFeature){
  return (
    <FeatureStyled>
      {text}
      <FeatureIcon src={url}/> 
    </FeatureStyled>
  )
}