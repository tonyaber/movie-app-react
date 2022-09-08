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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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