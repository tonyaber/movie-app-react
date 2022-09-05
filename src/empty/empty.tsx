import React from 'react';
import styled from 'styled-components';
import image from '../assets/svg/empty.svg';

const Image = styled.img`
display: block;
 margin: 0 auto;
  width: 300px;
  filter: invert(1);
`

const Text = styled.p`
  margin-top: 20px;
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
`

export default function Empty() {
  return (
    <>
      <Image src={image}/>
       <Text>Sorry, nothing found...</Text>
    </>
  )
}