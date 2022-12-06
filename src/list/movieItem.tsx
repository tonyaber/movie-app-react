import React from "react";
import { IItem, IMovieItem } from '../dto';
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
  width: calc((100% - 160px) / 5);
  overflow: hidden;
  position: relative;
   transition: 0.5s ease-in;
  &:hover{
    transform: scale(1.1);
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
      <LinkComponent to={"/movie/" + item.id} > 
        <Image src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />    
        <Title>{item.title}</Title>
      </LinkComponent>
    </Container> 
    )
} 