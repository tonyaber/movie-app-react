import React from "react";
import img from '../assets/svg/tv.svg'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IPopularMovie } from "../dto";

const Image = styled.img`
  width: 20px;
  heigth: auto;
`;

export default function Logo({onPopularMovie}:IPopularMovie) {
  return (
    <Link to={"/"} onClick={()=>onPopularMovie()}>
        <Image src={img} />
        <h1>MovieApp</h1>
      </Link>
    )
} 