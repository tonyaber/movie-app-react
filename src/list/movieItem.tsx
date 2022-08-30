import React from "react";
import { IItem, IMovieItem } from '../dto';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Image = styled.img`
  width: 150px;
  height: auto;
`;

const Container = styled.div`
  width: calc((100% - 80px) / 5);
`
const LinkComponent = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover, &:focus, &:active{
    color: white;
    text-decoration: none;
  }
`

export default function MovieItem({ item, onSelect }: IItem) {
  return (
    <Container>
      <LinkComponent to={"/movie" + item.id} onClick={() => onSelect()} > 
        <p>{item.title}</p>
        <Image src = {'https://image.tmdb.org/t/p/w500/' + item.poster_path}/>      
      </LinkComponent>
    </Container> 
    )
} 