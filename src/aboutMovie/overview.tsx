import React from "react";
import styled from "styled-components";

interface IOverview {
  text: string;
}

const OverviewStyled = styled.p`
  text-align: center;
  margin-top: 20px;
`;

export function Overview({text}:IOverview){
  return (
     <OverviewStyled>{text}</OverviewStyled>
  )
}