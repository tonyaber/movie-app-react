import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IGenre{
  text: string;
  active: boolean;
  onClick: () => void;
  isShow: boolean;
}

interface IGenreComponent{
  active: boolean;
  isShow: boolean;
}

const GenreComponent = styled.div<IGenreComponent>`
  padding: 10px;
  border: 1px solid #b60082;
  border-radius: 10px;
  transition: 0.5s ease-in;
  cursor:pointer;
  background-color: ${props => props.active?'red':'none'};
  
  &:hover{
    transform: scale(1.21);
    -moz-box-shadow:inset  0 0 10px #b60082; 
    -webkit-box-shadow: inset 0 0 10px #b60082; 
    box-shadow: inset 0 0 10px #b60082;
  } 
  @media (max-width: 768px) {
      ${props => props.isShow?' display: none;':''};
  }  
`

export default function Genre({text, onClick, active,isShow}:IGenre) {
  return (
      <GenreComponent onClick={()=>onClick()}  isShow={isShow} active={active}>{text}</GenreComponent>
    )
} 