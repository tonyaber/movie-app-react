import React from "react";
import styled from "styled-components";

interface ITitle {
  title: string;
}

const TitleStyled = styled.p`
  text-transform: uppercase;
  font-size: 32px;
`;

export function Title({title}:ITitle){
  return (
     <TitleStyled>{title}</TitleStyled>
  )
}