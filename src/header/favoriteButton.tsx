import React from "react";
import heart from '../assets/svg/heart.svg';
import styled from "styled-components";

interface IButton{
  text: string;
  onClick: () => void;
}



const ButtonComponent = styled.button`
  padding: 10px;
  border: none; 
  outline: none;
  background: none;
  border: 1px solid #b60082;
  border-radius: 10px;
  transition: 0.5s ease-in;
  cursor:pointer;
 
  
  &:hover{
    transform: scale(1.2);
    -moz-box-shadow:inset  0 0 10px #b60082; 
    -webkit-box-shadow: inset 0 0 10px #b60082; 
    box-shadow: inset 0 0 10px #b60082;
  } 
  @media (max-width: 480px) {
    border: none;
  }
  
`

const Icon = styled.img`
  width: 30px;
  height: 30px;
  filter: invert(86%); 
  display: none;
  @media (max-width: 480px) {
    display: block;
    border: none;
  }
`
const Text = styled.p`
  @media (max-width: 480px) {
    display: none;
  }
`


export default function Button({text, onClick}:IButton) {
  return (
      <ButtonComponent onClick={()=>onClick()}>
        <Text>{text}</Text>
         <Icon src={heart}/>
         </ButtonComponent>
    )
} 