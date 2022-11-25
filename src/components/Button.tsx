import React from "react";
import styled from "styled-components";
import { COLORS } from "../GlobalStyles";

type TButton = "gradientPink" | "white";
interface IButton {
  children?: any;
  onClick?: Function;
  colorType: TButton;
}
interface IButtonStyle {
  colorType: TButton;
}
const ButtonStyle = styled.button<IButtonStyle>`
  ${(props) => {
    if (props.colorType == "gradientPink") {
      return `color:${COLORS.white}; background: linear-gradient(30deg, ${COLORS.purple} 0%, ${COLORS.pink} 100%);`;
    }
    if (props.colorType == "white") {
      return `color: ${COLORS.purple}; background: ${COLORS.white};`;
    }
  }};
  &:hover {
    transform: scale(1.05);
  }
  border: none;
  border-radius: 4px;
  padding: 0.25em 1em;
  /* height: 2em; */
  font-size: 1em;
  transition: 0.5s;
  cursor: pointer;
`;

export default function Button(props: IButton) {
  return (
    <ButtonStyle colorType={props.colorType}>{props.children}</ButtonStyle>
  );
}
