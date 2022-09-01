import React from "react";
import styled from "styled-components";

interface IArrowRight {
  onArrowRight: () => void;
}

const Button = styled.button`
  position: absolute;
  top:50px;
  right: 20px;
  z-index: 2;
  `
export default function ArrowRight({onArrowRight}:IArrowRight) {
  return (
    <>
      <Button onClick = {()=>onArrowRight()}>Arrow Right</Button>
    </>
  )
}