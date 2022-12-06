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
    margin: 0 auto;
`;

const Name = styled.p`
  text-align: center;
`;

const Character=styled.p`
  text-align: center;
  font-style: italic;
`

const Container = styled.div`
 @media (max-width: 320px) {
    width: 80%;
  }
  @media (min-width: 321px) {
    width: calc((100% - 40px) / 2);
  }
  @media (min-width: 480px) {
    width: calc((100% - 40px) / 3);
  }
  @media (min-width: 768px) {
    width: calc((100% - 120px) / 4);
  }
  @media (min-width: 1024px) {
    width: calc((100% - 160px) / 5);
  }
`
export function Actor({ url, name, character }: IActor) {
  return (
    <Container>      
      <Image src={'https://image.tmdb.org/t/p/w500/' + url} />
      <Name>{name}</Name>
      {character?<Character>as {character }</Character>:null}
    </Container>
  )
}