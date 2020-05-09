import React from "react";
import styled from "styled-components";

import { TextMdCss } from "./fontSizing";

export const RedX = () => <span style={{ color: "red" }}>X</span>;

export const PadWrapper = styled.div`
  padding: 16px;
`;
export const FancyBtn = styled.button`
  line-height: 26px;
  text-transform: uppercase;
  letter-spacing: 2.7px;
  margin: 20px 30px;
  font-size: 13px;
  border-radius: 26px 0 26px 0;
  border: 2px solid lightcyan;
  padding: 8px 16px;
  cursor: pointer;
`;
export const HiddenBtn = styled.button`
  display: none;
`
export const Header3 = styled.h3`
  font-weight: normal;
  margin-left: 16px;
`;
export const InputStyled = styled.input`
  ${TextMdCss};
  margin-bottom: calc(1rem + 1vw);
`;
export const ImportBtn = styled.button`
  text-align: center;
`;

export const SmImg = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 16px;
  object-fit: cover;
  border-top: 1px solid orange;
  border-bottom: 1px solid orange;
`;
