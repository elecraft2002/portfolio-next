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
import likeGif from "../../src/assets/imgs/Iphone_screen.jpg";
import { IHome } from "./Homepage";
import Socials from "./Socials";

const StyledFactsContainer = styled.section`
  background: linear-gradient(90deg, ${COLORS.red} 0%, ${COLORS.pink} 100%);
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
  overflow-x:hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index:-1;
    background-size: 20vw 20vw;
    background-image: linear-gradient(
        to right,
        ${COLORS.white} 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, ${COLORS.white} 1px, transparent 1px);
  }
  @media ${DEVICE.laptopL} {
    align-items: center;
  }
`;

const InfoCenterBlock = styled.div`
  padding: 0 1rem;
  padding-top: 5em;
  padding-bottom: 4rem;
  max-width: ${SIZE.laptopL};
  min-height: 100vh;
  color: ${COLORS.white};
  @media ${DEVICE.laptopL} {
    width: ${SIZE.laptopL};
    padding: 0;
    padding-top: 5em;
    padding-bottom: 4rem;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  align-items: center;
  @media ${DEVICE.mobileL} {
    grid-template-columns: 1fr 1fr;
  }
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
          <PrismicImage field={props.icon as any} />
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
const StyledTextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export default function Facts(props: IHome) {
  return (
    <StyledFactsContainer id="contacts">
      <InfoCenterBlock>
        <SHeading2 color={COLORS.white}>{props.homepage.data.factsheading[0].text}</SHeading2>
        <InfoGrid>
          <Window
            height="100%"
            width="100%"
            backgroundColor={COLORS.white}
            borderColor={COLORS.black}
          >
            <img loading="lazy"
            src={props.homepage.data.factsimage.url}
              alt={props.homepage.data.factsimage.alt}
              width={props.homepage.data.factsimage.dimensions.width}
              height={props.homepage.data.factsimage.dimensions.height}
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "80vh",
                objectFit: "cover",
              }}
            />
          </Window>
          <StyledTextContainer>
            <PrismicRichText field={props.homepage.data.factsdescription}/>
            <Socials socials={props.settings?.data.socials} />
          </StyledTextContainer>
          {/* <div>
            <ul>
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
            </ul> 
          </div>*/}
        </InfoGrid>
      </InfoCenterBlock>
    </StyledFactsContainer>
  );
}
