import { PrismicImage, PrismicRichText } from "@prismicio/react";
import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import Button from "../../src/components/Button";
import { COLORS } from "../../src/GlobalStyles";
import Link from "next/link";

interface IProjectBlock {
  project: any;
  index: number;
}

const StyledImgContainer = styled.figure`
  width: 100%;
  aspect-ratio: 2;
  /* border-radius: 0.5rem; */
  overflow: hidden;
  box-shadow: 7px 7px ${COLORS.pink};
  background-color: red;
  margin: 1rem 0;
`;

const StyledTextContainer = styled.div`
  margin: 1rem 0;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.2);
`;
const StyledArticle = styled.article`
  margin: 2em 0;
`;

const StyledContainer = styled.div``;
const StyledProjectTitle = styled.h4`
  font-weight: 800;
  letter-spacing: 2px;
  background: -webkit-linear-gradient(45deg, ${COLORS.purple}, ${COLORS.blue});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 1rem 0;
`;
const StyledProjectType = styled.p`
  font-weight: 300;
  letter-spacing: 2px;
  margin: 1rem 0;
`;
export default function MobileProjectBlock(props: IProjectBlock) {
  return (
    <li>
      <StyledArticle>
        <StyledContainer>
          <StyledProjectType>{props.project.data.type}</StyledProjectType>
          <StyledProjectTitle>{props.project.data.name}</StyledProjectTitle>
          <StyledTextContainer>
            <PrismicRichText field={props.project.data.description_short} />
          </StyledTextContainer>
          <Link href={`/project/${props.project.id}`}>
            <Button colorType="gradientPink">Více</Button>
          </Link>
        </StyledContainer>
        <StyledImgContainer>
          <Parallax translateY={["10%", "-10%"]}>
            <StyledImg
              src={props.project.data.cover_photo.url}
              alt={props.project.data.cover_photo.alt}
            />
          </Parallax>
        </StyledImgContainer>
      </StyledArticle>
    </li>
  );
}
