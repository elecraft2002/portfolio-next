import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Window from "../../src/components/window/Window";
import { COLORS, DEVICE, SIZE } from "../../src/GlobalStyles";
import likeGif from "../../src/assets/videos/like.gif";
import Image from "next/image";
import { IHome } from "./Homepage";
import { useIsInViewport } from "../../src/functions/Viewport";
import scroll from "../../src/functions/Scroll";
import { transformBetween } from "../../src/functions/values";
import {
  PrismicImage,
  PrismicImageProps,
  PrismicRichText,
} from "@prismicio/react";

const InfoContainer = styled.section`
  position: relative;
  margin-top: -4em;
  z-index: 1;
  display: flex;
  flex-direction: column;
  @media ${DEVICE.laptopL} {
    align-items: center;
  }
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
  background: ${COLORS.blue};
  background: linear-gradient(90deg, ${COLORS.blue} 0%, ${COLORS.black} 100%);
  clip-path: polygon(
    0 4em,
    35% 4em,
    35% 2em,
    66% 2em,
    66% 0,
    100% 0,

    100% calc(100% - 0px),
    66% calc(100% - 0px),
    66% calc(100% - 2em),
    35% calc(100% - 2em),
    35% calc(100% - 1em),
    0 calc(100% - 1em)
  );
  /* clip-path: polygon(
    0 4em,
    35% 4em,
    35% 2em,
    66% 2em,
    66% 0,
    100% 0,
    100% 100%,
    0 100%
  ); */

  /* background: linear-gradient(90deg, rgba(132,0,181,1) 0%, rgba(255,49,46,1) 100%); */
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
  grid-template-rows: 1fr 1fr;
  align-items: center;
  @media ${DEVICE.laptop} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: unset;
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

const StyledInfoText = styled.li`
  margin: 1rem 0;
`;

const InfoText = (props: IInfoText) => {
  return (
    <StyledInfoText>
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
    </StyledInfoText>
  );
};
const StyledSpacer = styled.div`
    height:2rem;
  @media ${DEVICE.tablet} {
    height: calc(150vh + 2rem);
  }
`;
export default function Info(props: IHome) {
  const ref = useRef<HTMLElement>(null);
  const [opacity, setOpacity] = useState<number>(1);
  const [bottom, setBottom] = useState<number>(1);
  const handleScrollFade = () => {
    if (window.innerWidth >= parseInt(SIZE.tablet) /* Tablet */) {
      setOpacity(
        transformBetween(
          [0, window.innerHeight / 2],
          [1, 0],
          window.scrollY -
            (ref.current.offsetTop +
              ref.current.clientHeight -
              (window.innerHeight * 3) / 2)
        )
      );
      return;
    }
    setOpacity(1);
  };
  const handleResize = () => {};
  useEffect(() => {
    handleScrollFade();
    document.addEventListener("scroll", handleScrollFade);
    document.addEventListener("resize", handleScrollFade);

    return () => {
      document.removeEventListener("scroll", handleScrollFade);
      document.removeEventListener("resize", handleScrollFade);
    };
  }, []);
  return (
    <InfoContainer ref={ref} style={{ opacity: opacity }}>
      {/* <Wave1 from={COLORS.blue} to={COLORS.black} /> */}
      <InfoCenterBlock>
        <SHeading2 color={COLORS.white}>Vaše weby budou výjmečné</SHeading2>
        <InfoGrid>
          <div>
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
          </div>
          <Window
            height="auto"
            width="auto"
            backgroundColor={COLORS.white}
            borderColor={COLORS.black}
          >
            <img src={props.homepage.data.photo.url} width={props.homepage.data?.photo.dimensions.width}  height={props.homepage.data?.photo.dimensions.height} alt={props.homepage.data?.photo.alt} />
          </Window>
        </InfoGrid>
        <SHeading2 color={COLORS.white}>Projekty</SHeading2>
        <StyledSpacer />
      </InfoCenterBlock>
    </InfoContainer>
  );
}
