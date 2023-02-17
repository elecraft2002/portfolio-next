import React, { useState, useEffect, Suspense, useRef } from "react";
import styled from "styled-components";
import { COLORS, NAV_HEIGHT, DEVICE, SIZE } from "../../src/GlobalStyles";
import { Title } from "../homepage/Landing";
import { Parallax } from "react-scroll-parallax";

const StyledLandingContainer = styled.div`
  position: relative;
  background: ${COLORS.blue};
  color: ${COLORS.white};
  background: linear-gradient(
    60deg,
    ${COLORS.blue} -33%,
    ${COLORS.purple} 0%,
    ${COLORS.blue} 100%
  );
  width: 100%;
  height: 70vh;
  &:before {
    content: "";
    position: absolute;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-size: 20vw 20vw;
    background-image: linear-gradient(
        to right,
        ${COLORS.white} 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, ${COLORS.white} 1px, transparent 1px);
  }
  margin-bottom: 10vh;
`;

const StyledImageContainer = styled.figure`
  height: 70vh;
  top: 5vh;
  box-shadow: 7px 7px ${COLORS.pink};
  position: relative;
`;
const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const StyledContentWidth = styled.div`
  max-width: ${SIZE.laptopL};
  margin: auto;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;
const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media ${DEVICE.mobileL} {
    flex-direction: row;
  }
`;
const StyledTitleWrapper = styled.span`
  margin-top: 20vh;
`;

export default function ProjectLanding({ project }: any) {
  return (
    <StyledLandingContainer>
      <StyledContentWidth>
        <StyledContentWrapper>
          <StyledTitleWrapper>
            <Title>{project.data.name}</Title>
          </StyledTitleWrapper>
          <StyledImageContainer>
            <StyledImg src={project.data.cover_photo.url} />
          </StyledImageContainer>
        </StyledContentWrapper>
      </StyledContentWidth>
    </StyledLandingContainer>
  );
}
