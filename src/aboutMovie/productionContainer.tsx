import React from "react";
import styled from "styled-components";
import { ProductionIcon } from "./productionIcon";

interface IProductionContainer {
  url: string[];
}

const Container = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: right;
`;


export function ProductionContainer({url}:IProductionContainer){
  return (
    <Container>
      {url.map((it,i)=><ProductionIcon key={i} url={it}/>)}
    </Container>
  )
}