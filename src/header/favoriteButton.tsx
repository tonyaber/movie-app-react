import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IButton{
  text: string;
  active?: boolean;
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
`

export default function Button({text, onClick, active}:IButton) {
  return (
      <ButtonComponent onClick={()=>onClick()}>{text}</ButtonComponent>
    )
} 