import React from "react";

interface IArrowRight {
  onArrowRight: () => void;
}

export default function ArrowRight({onArrowRight}:IArrowRight) {
  return (
    <>
      <button onClick = {()=>onArrowRight()}>Arrow Right</button>
    </>
  )
}