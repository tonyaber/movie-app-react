import React from 'react';
import styled from 'styled-components';
import { IActor } from '../dto';
import { Actor } from './actor';

interface IActors {
  items: IActor[];
}

const Title = styled.h3`
  margin: 20px;
  font-size: 32px;
  text-align: center;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 320px) {
    gap: 30px 0;
  }
  @media (min-width: 321px) {
    gap: 30px 20px;
  } 
  @media (min-width: 1024px) {
    gap: 50px 40px;
  }
`
export default function Actors({ items }: IActors) {
  console.log(items)
  return (
    <>
      <Title>Top cast</Title>
      <Container>
        {items.map((it) => <Actor key={it.id} name={ it.name} url={it.profile_path} character={it.character} />)}
      </Container>
      
    </>
  )
  
}