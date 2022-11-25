import React, { RefObject, useRef } from "react";
import styled from "styled-components";
import Button from "../../src/components/Button";
import { COLORS } from "../../src/GlobalStyles";
interface IProjectBlock {}

const StyledProjectContainer = styled.article`
  grid-area: project;
  margin: 1rem;
`;

const StyledProjectType = styled.p`
  font-weight: 300;
  letter-spacing: 2px;
`;
const StyledProjectTitle = styled.h4`
  font-weight: 800;
  letter-spacing: 2px;
  background: -webkit-linear-gradient(45deg,${COLORS.purple},${COLORS.blue});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function ProjectBlock(props) {
  return (
    <StyledProjectContainer>
      <StyledProjectType>PROJEKT</StyledProjectType>
      <StyledProjectTitle>Tablo třídy L4</StyledProjectTitle>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
        aspernatur pariatur quo sequi alias esse voluptatibus possimus eveniet,
        earum assumenda laudantium recusandae quae soluta excepturi maxime
        aliquid dolores minus necessitatibus.
      </p>
      <Button colorType="gradientPink">VÍCE</Button>
    </StyledProjectContainer>
  );
}
