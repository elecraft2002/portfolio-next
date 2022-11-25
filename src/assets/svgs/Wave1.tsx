import React from "react";
import styled from "styled-components";
import { Gradient } from "./svgs";

const Svg = styled.svg`
  width: 100%;
`;

export default function Wave1(props: Gradient) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <defs>
        <linearGradient
          id="linear-gradient"
          x2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color={props.from} />
          <stop offset="1" stop-color={props.to} />
        </linearGradient>
      </defs>
      <path
        fill="url(#linear-gradient)"
        fill-opacity="1"
        d="M0,64L0,96L288,96L288,128L576,128L576,128L864,128L864,96L1152,96L1152,0L1440,0L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
      ></path>
    </Svg>
  );
}
