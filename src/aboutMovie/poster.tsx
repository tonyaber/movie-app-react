import styled from "styled-components";

interface IPoster {
  url: string;
}

const PosterStyled = styled.img`
  width: 200px;
  height: 300px;
  z-index:1;
  transition: 0.5s ease-in;
`;

export function Poster({url}:IPoster){
  return (
    <PosterStyled src={'https://image.tmdb.org/t/p/w500/' + url}/>
  )
}