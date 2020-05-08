import React from "react";
import styled from "styled-components";

import { TextMdCss } from "./fontSizing";

export const RedX = () => <span style={{ color: "red" }}>X</span>;

export const PadWrapper = styled.div`
  padding: 16px
  border: 2px solid darkgrey;
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
