import React, { useEffect, useState } from "react";
import { IMovieItem } from "../dto";
import Slider from './slider'
import ArrowLeft from './arrowLeft';
import ArrowRight from './arrowRight';
import styled from "styled-components";
import Points from './points';

interface IPreview{
  movieList: IMovieItem[];
}

const Container = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 1280px;`

export default function Preview({ movieList }: IPreview) {
  const [slide, setSlider] = useState<number>(0);
  const amountSliders = movieList.length;

  const changeSlider = (n: number) => {    
    if (slide+n < 0) {
      setSlider(amountSliders)
    }
    if (slide+n >= amountSliders) {
      setSlider(-1)
    }
    setSlider(slide=>slide+n)
  }

  useEffect(() => {
    console.log('outTimer')
    const timer  = setInterval(() => {
      console.log('InTimer')
      changeSlider(1);
    }, 5000);
   return ()=> clearInterval(timer);
  }, [slide])

  return (
    <Container>
      <Slider movieList={movieList} slideNumber={slide } />
      <ArrowLeft onArrowLeft={() => changeSlider(-1)} />
      <ArrowRight onArrowRight={() => changeSlider(+1)} />
      <Points amountSliders={amountSliders} activeSlider={slide} onPointClick={(number)=>setSlider(number) } />
      </Container>
    )
} 