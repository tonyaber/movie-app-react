import React from "react";
import styled from "styled-components";

interface ITagline {
  tagline: string;
}

const TaglineStyled = styled.p`
  display: block;
  text-align: right;
  font-style: italic;
`

export function Tagline({tagline}:ITagline){
  return (
     <TaglineStyled>{tagline}</TaglineStyled>
  )
}