import React from "react";
import styled from "styled-components";

interface IArrowLeft {
  onArrowLeft: () => void;
}

const Button = styled.button`
  position: absolute;
  top:20px;
  right: 20px;
  z-index: 2;
  `

export default function ArrowLeft({onArrowLeft}:IArrowLeft) {
  return (
    <>
      <Button onClick = {()=>onArrowLeft()}>Arrow Left</Button>
    </>
  )
}