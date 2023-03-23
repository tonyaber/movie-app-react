import React from "react";
import styled from "styled-components";
import { ISearchPanel } from "../dto";
import search from '../assets/svg/search.svg';

const Input = styled.input`
  display: block;
  width: 300px;
  padding: 10px;
  margin: 0 auto;
  border: none;
  border-radius: 20px;
  background-color: #34213194;
  @media (max-width: 400px) {
  width: 90%;
}
`;

export default function SearchPanel({onSearchPanel, value}:ISearchPanel){
    return (
      <>
        <Input onChange={(e) => onSearchPanel(e.target.value)} type="text"  data-testid={'search-panel'} placeholder="Search movie..." value={value} />
      </>
    )
} 