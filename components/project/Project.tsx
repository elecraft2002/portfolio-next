import { SliceZone } from "@prismicio/react";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import styled from "styled-components";
import { NAV_HEIGHT } from "../../src/GlobalStyles";
import ProjectLanding from "./ProjectLanding";
import { components } from "../../slices";
const StyledPageContainer = styled.div`
  margin-top: ${NAV_HEIGHT};
`;

export default function Project({ project }: any) {
  console.log(project);
  return (
    <ParallaxProvider>
      <StyledPageContainer>
        <ProjectLanding project={project} />
        <SliceZone components={components}  slices={project.data.slices}/>
      </StyledPageContainer>
    </ParallaxProvider>
  );
}
