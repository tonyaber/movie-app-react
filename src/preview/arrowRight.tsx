import React from "react";
import styled from "styled-components";

interface IArrowRight {
  onArrowRight: () => void;
}

const Button = styled.button`
  position: absolute;
  top:40px;
  right: 20px;
  z-index: 2;
  border: none; 
  outline: none;
  background: none;
  &:hover{
    transform: scale(1.5);
  } 
  &:active{
    color: red;
  }
  `
export default function ArrowRight({onArrowRight}:IArrowRight) {
  return (
    <>
      <Button onClick = {()=>onArrowRight()}>ᐅ</Button>
    </>
  )
}