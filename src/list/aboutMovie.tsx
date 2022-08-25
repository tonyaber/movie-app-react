import React from "react";
import { IAboutItem } from '../dto';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Image = styled.img`
  width: 150px;
  height: auto;
`;

export default function AboutMovie({ item }: IAboutItem) {
  return (
    < >
      <p>{item.title}</p>
      <Image src = {'https://image.tmdb.org/t/p/w500/' + item.backdrop_path}/>
      
    </>
    )
} 