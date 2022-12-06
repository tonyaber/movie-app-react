import styled from "styled-components";

interface IPoster {
  url: string;
}

const PosterStyled = styled.img`
  width: 200px;
  height: 300px;
  z-index:1;
  transition: 0.5s ease-in;
  @media (max-width: 600px) {
    width: 150px;
    height: 200px;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

export function Poster({url}:IPoster){
  return (
    <PosterStyled src={'https://image.tmdb.org/t/p/w500/' + url}/>
  )
}