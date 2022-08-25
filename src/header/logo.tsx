import React from "react";
import img from '../assets/svg/tv.svg'
import styled from "styled-components";

const Image = styled.img`
  width: 20px;
  heigth: auto;
`;

export default function Logo(){
    return (
      <>
        <Image src={img} />
        <h1>MovieApp</h1>
      </>
    )
} 