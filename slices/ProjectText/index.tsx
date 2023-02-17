import React from "react";
import { PrismicRichText } from "@prismicio/react";
import styled from "styled-components";
import {
  backgroundGradient,
  COLORS,
  DEVICE,
  grid,
  SIZE,
} from "../../src/GlobalStyles";

/**
 * @typedef {import("@prismicio/client").Content.ProjectTextSlice} ProjectTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectTextSlice>} ProjectTextProps
 * @param { ProjectTextProps }
 */
interface Theme {
  theme: string;
}

const StyledSectionContainer = styled.section<Theme>`
  max-width: ${SIZE.laptopL};
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  position: relative;
`;
const StyledSectionBackground = styled.section<Theme>`
  ${grid()};
  ${(props) => backgroundGradient(props.theme)};
`;

const StyledFormating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${DEVICE.tablet} {
    flex-direction: row;
    justify-content: center;
  }
`;
const StyledImageContainer = styled.figure`
  min-width: 50%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
`;

const StyledCaption = styled.figcaption`
  text-align: center;
  margin: 0.5rem;
`;

const StyledImage = styled.img`
  box-shadow: 7px 7px ${COLORS.pink};
`;

const ProjectText = ({ slice }) => {
  return (
    <StyledSectionBackground theme={slice.primary.color}>
      <StyledSectionContainer>
        {slice.primary.title && <PrismicRichText field={slice.primary.title} />}
        <StyledFormating>
          {slice.primary.description && (
            <span>
              <PrismicRichText field={slice.primary.description} />
            </span>
          )}
          {slice.variation == "withImage" && (
            <StyledImageContainer>
              <StyledImage
                src={slice.primary.image.url}
                alt={slice.primary.image.alt}
                loading="lazy"
              />
              <StyledCaption>{slice.primary.image.alt}</StyledCaption>
            </StyledImageContainer>
          )}
        </StyledFormating>
      </StyledSectionContainer>
    </StyledSectionBackground>
  );
};

export default ProjectText;
