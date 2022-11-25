import React from "react";
import styled from "styled-components";
import { SVG } from "./svgs";
const Container = styled.div`
  width: 60%;
  height: 60%;
`;
export default function Cross(props: SVG) {
  return (
    <Container>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          y="0.286133"
          width="4.69292"
          height="4.6147"
          fill={props.fill}
        ></rect>
        <rect
          x="4.69336"
          y="4.90234"
          width="4.69303"
          height="4.61493"
          fill={props.fill}
        ></rect>
        <rect
          x="9.38477"
          y="9.51465"
          width="4.69303"
          height="4.61482"
          fill={props.fill}
        ></rect>
        <rect
          x="14.0801"
          y="14.1309"
          width="4.69303"
          height="4.61482"
          fill={props.fill}
        ></rect>
        <rect
          x="18.7734"
          y="18.7432"
          width="4.69303"
          height="4.6147"
          fill={props.fill}
        ></rect>
        <rect
          y="23.3594"
          width="4.61482"
          height="4.69292"
          transform="rotate(-90 0 23.3594)"
          fill={props.fill}
        ></rect>
        <rect
          x="4.69336"
          y="18.7422"
          width="4.61482"
          height="4.69303"
          transform="rotate(-90 4.69336 18.7422)"
          fill={props.fill}
        ></rect>
        <rect
          x="14.0801"
          y="9.51465"
          width="4.6147"
          height="4.69303"
          transform="rotate(-90 14.0801 9.51465)"
          fill={props.fill}
        ></rect>
        <rect
          x="18.7734"
          y="4.90234"
          width="4.61493"
          height="4.69303"
          transform="rotate(-90 18.7734 4.90234)"
          fill={props.fill}
        ></rect>
      </svg>
    </Container>
  );
}
