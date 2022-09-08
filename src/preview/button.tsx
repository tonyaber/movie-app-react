import React from "react";
import styled from "styled-components";

interface IButton {
  text: string;
   children?: JSX.Element,
}

const ButtonComponent = styled.button`
  display: block;
  margin: 20px auto;
  padding: 5px;
  background-color: red;
  border-radius: 10px;
  color: white;
  text-decoration: none;
  width: 150px;
  text-align: center;
  transition: 0.5s ease-in;

  &:hover, &:focus, &:active{
    color: white;
    text-decoration: none;
  }
   &:hover{
    transform: scale(1.2);
  } 
`;

export const Button:React.FC<IButton> = ({ text, children }) =>{
  return (
    <ButtonComponent>
      {text}
      {children}
    </ButtonComponent>
  )

}