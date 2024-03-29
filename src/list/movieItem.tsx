import React from "react";
import { IItem } from '../dto';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const Title = styled.h3`
  display:block;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  font-size: 20px;
  height: 60px;
`

const Container = styled.div`

  overflow: hidden;
  position: relative;
   transition: 0.5s ease-in;
  &:hover{
    transform: scale(1.1);
  }
  @media (max-width: 320px) {
    width: 80%;
  }
  @media (min-width: 321px) {
    width: calc((100% - 40px) / 2);
  }

  @media (min-width: 768px) {
    width: calc((100% - 80px) / 4);
  }
  @media (min-width: 1024px) {
    width: calc((100% - 160px) / 5);
  }
  
  
`
const LinkComponent = styled(Link)`
  color: white;
  text-decoration: none;
 

  &:hover, &:focus, &:active{
    color: white;
    text-decoration: none;
  }
`



export default function MovieItem({ item }: IItem) {
  return (
    <Container>
      <LinkComponent to={"/movie/" + item.id}  data-testid={'movie-item'}> 
        <Image src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />    
        <Title>{item.title}</Title>
      </LinkComponent>
    </Container> 
    )
} 