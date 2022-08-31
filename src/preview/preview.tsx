import React, { useEffect, useState } from "react";
import { IMovieItem } from "../dto";
import Slider from './slider'
import ArrowLeft from './arrowLeft';
import ArrowRight from './arrowRight';
import styled from "styled-components";

interface IPreview{
  movieList: IMovieItem[];
}

const Container = styled.div`
  overflow: hidden;
  position: relative;`
export default function Preview({ movieList }: IPreview) {
  const [slide, setSlider] = useState<number>(0);
  const amountSliders = movieList.length;

  const onArrow = (n: number) => {
    
    if (slide+n < 0) {
      setSlider(amountSliders)
    }
    if (slide+n >= amountSliders) {
      setSlider(-1)
    }
    console.log(slide, n)
    setSlider(slide=>slide+n)
  }

  return (
    <Container>
      <Slider movieList={movieList} slideNumber={slide } />
      <ArrowLeft onArrowLeft={() => onArrow(-1)} />
      <ArrowRight onArrowRight={()=> onArrow(+1)}/>
      </Container>
    )
} 