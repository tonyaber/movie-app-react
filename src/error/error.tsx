import React from 'react';
import styled from 'styled-components';
import image from '../assets/svg/cry.svg';


const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 150px;
  filter: invert(1);
`

const Text = styled.p`
  margin-top: 20px;
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`

export default function Error() {
  return (
    <>
      <Image src={image}/>
       <Text>Error loading <br/> Please reload the page</Text>
    </>
  )
}