import React from "react";
import styled from "styled-components";

interface IActor {
  url: string;
  name: string;
  character: string;
}

const Image = styled.img`
  	display: block;
    width: 100%;
    max-width: 96px;
    height: 96px;
    object-fit: cover;
    border-radius: 50%;
`;

const Container = styled.div`
width: calc((100% - 160px) / 5);
`
export function Actor({ url, name, character }: IActor) {
  return (
    <Container>      
      <Image src={'https://image.tmdb.org/t/p/w500/' + url} />
      <p>{name}</p>
      <span>as {character }</span>
    </Container>
  )
}