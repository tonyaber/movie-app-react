import React from "react";
import styled from "styled-components";

interface IOverview {
  text: string;
}

const OverviewStyled = styled.p`
  text-align: center;
  margin-top: 20px;
  display: block;
  @media (max-width: 768px) {
    display: none;
}
`;

export function Overview({ text }: IOverview) {
  const overview = text.length < 500 ? text : text.slice(0, 500) + '...';
  return (
     <OverviewStyled>{overview}</OverviewStyled>
  )
}