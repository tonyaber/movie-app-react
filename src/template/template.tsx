import React from 'react';
import styled from 'styled-components';

interface ITemplate {
  image: any;
  text: string;
}

const Image = styled.object`
  display:block;
  margin: 0 auto;
  width: 500px;
`

const Text = styled.p`
  margin-top: 20px;
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`

export default function Template({image, text}:ITemplate) {
  return (
    <>
       <Image type="image/svg+xml" data={image}>svg-animation</Image>
       <Text>{text}</Text>
    </>
  )
}