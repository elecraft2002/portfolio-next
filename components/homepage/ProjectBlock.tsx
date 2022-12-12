import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
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
interface IProjectBlock{
  project:any;
}

export default function ProjectBlock(props:IProjectBlock) {
  // console.log( props.project.id)
  return (
    <StyledProjectContainer>
      <StyledProjectType>{ props.project.data.type }</StyledProjectType>
      <StyledProjectTitle>{props.project.data.name}</StyledProjectTitle>
      <PrismicRichText field={props.project.data.description_short}/>
      <Link href={`/project/${props.project.id}`}><Button colorType="gradientPink">VÍCE</Button></Link>
    </StyledProjectContainer>
  );
}
