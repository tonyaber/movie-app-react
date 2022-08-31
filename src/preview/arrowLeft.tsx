import React from "react";

interface IArrowLeft {
  onArrowLeft: () => void;
}

export default function ArrowLeft({onArrowLeft}:IArrowLeft) {
  return (
    <>
      <button onClick = {()=>onArrowLeft()}>Arrow Left</button>
    </>
  )
}