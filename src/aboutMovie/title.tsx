import React from "react";
import styled from "styled-components";

interface ITitle {
  title: string;
}

const TitleStyled = styled.h2`
  text-transform: uppercase;
  font-size: 32px;
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export function Title({title}:ITitle){
  return (
     <TitleStyled>{title}</TitleStyled>
  )
}