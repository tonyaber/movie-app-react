import React from "react";
import styled from "styled-components";

interface IArrowLeft {
  onArrowLeft: () => void;
}

const Button = styled.button`
  position: absolute;
  top:10px;
  right: 20px;
  z-index: 2;
  border: none; 
  outline: none;
  background: none;
  &:active{
    color: red;
  }
`

export default function ArrowLeft({onArrowLeft}:IArrowLeft) {
  return (
    <>
      <Button onClick = {()=>onArrowLeft()}>ᐊ</Button>
    </>
  )
}