import {
  PrismicImage,
  PrismicImageProps,
  PrismicRichText,
} from "@prismicio/react";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Window from "../../src/components/window/Window";
import { COLORS, DEVICE, SIZE } from "../../src/GlobalStyles";

const StyledFactsContainer = styled.section`
  background: linear-gradient(90deg, ${COLORS.blue} 0%, ${COLORS.black} 100%);
  clip-path: polygon(
    0 4em,
    35% 4em,
    35% 2em,
    66% 2em,
    66% 0,
    100% 0,
    100% 100%,
    0 100%
  );
  display: flex;
  flex-direction: column;
  @media ${DEVICE.laptopL} {
    align-items: center;
  }
`;

const InfoCenterBlock = styled.div`
  padding: 0 1rem;
  padding-top: 5em;
  max-width: ${SIZE.laptopL};
  min-height: 100vh;
  color: ${COLORS.white};
  @media ${DEVICE.laptopL} {
    width: ${SIZE.laptopL};
    padding: 0;
    padding-top: 5em;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

interface IHeading2 {
  color: string;
}

const StyledIcon = styled.div`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  margin-right: 1rem;
`;
const StyledInfoHeading = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 1.6rem;
`;

export const SHeading2 = styled.h2<IHeading2>`
  color: ${(props) => props.color};
  font-size: 2rem;
  margin: 1rem 0;
  font-weight: 600;
  @media ${DEVICE.mobileL} {
    font-size: 3rem;
  }
  @media ${DEVICE.laptop} {
    font-size: 4rem;
  }
`;

const StyledInfoDescription = styled.span`
  font-weight: 300;
`;
interface IInfoText {
  title: string;
  description: [];
  icon: PrismicImageProps;
}
const InfoText = (props: IInfoText) => {
  return (
    <li>
      <StyledInfoHeading>
        <StyledIcon>
          <PrismicImage field={props.icon} />
        </StyledIcon>
        <h3>{props.title}</h3>
      </StyledInfoHeading>
      {/* <p>{props.description}</p> */}
      <StyledInfoDescription>
        <PrismicRichText field={props.description} />
      </StyledInfoDescription>
    </li>
  );
};

export default function Facts(props) {
  return (
    <StyledFactsContainer>
      <InfoCenterBlock>
        <SHeading2 color={COLORS.white}>Vaše weby budou výjmečné</SHeading2>
        <InfoGrid>
          <Window
            height="auto"
            width="auto"
            backgroundColor={COLORS.white}
            borderColor={COLORS.black}
          >
            {/* <Image   {...likeGif} alt="like guy" /> */}
          </Window>
          <div>
            {/* <ul>
              {props.homepage.data.infotext.map((section: any, i: number) => {
                return (
                  <InfoText
                    key={i}
                    description={section.description}
                    icon={section.icon}
                    title={section.title}
                  />
                );
              })}
            </ul> */}
          </div>
        </InfoGrid>
        <SHeading2 color={COLORS.white}>Projekty</SHeading2>
        <div style={{ height: "150vh" }}></div>
      </InfoCenterBlock>
    </StyledFactsContainer>
  );
}
