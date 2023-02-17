import { PrismicLink } from "@prismicio/react";
import styled, { keyframes, css } from "styled-components";

export const COLORS = {
  pink: "#E637BF",
  purple: "#540D6E",
  white: "#f8f7ff",
  black: "#000",
  red: "#FF312E",
  blue: "#00256e",
  green: "#09FF00",
  pinkSaturated: "#E637BF",
  purpleSaturated: "#540D6E",
  whiteSaturated: "#f8f7ff",
  blackSaturated: "#000",
  redSaturated: "#FF312E",
  blueSaturated: "#256EFF",
  greenSaturated: "#09FF00",
};
export const NAV_HEIGHT = "70px";
export const SIZE = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1200px",
  desktop: "2560px",
};
export const DEVICE = {
  mobileS: `(min-width: ${SIZE.mobileS})`,
  mobileM: `(min-width: ${SIZE.mobileM})`,
  mobileL: `(min-width: ${SIZE.mobileL})`,
  tablet: `(min-width: ${SIZE.tablet})`,
  laptop: `(min-width: ${SIZE.laptop})`,
  laptopL: `(min-width: ${SIZE.laptopL})`,
  desktop: `(min-width: ${SIZE.desktop})`,
};

const fadeInAnimation = keyframes`
0%{
  transform:translateY(+100%);
}100%{
  transform:translateY(0);
}
`;
export const StyledFadeInContainer = styled.span`
  overflow: hidden;
  display: block;
  &${(props: any) => {
      return props.children;
    }} {
  }
`;
export const fadeIn = css`
  animation-name: ${fadeInAnimation};
  animation-duration: 1s;
  overflow: hidden;
`;
export const backgroundGradient = (theme: string) => {
  console.log(theme);
  if (theme == "whiteTheme") return `background: ${COLORS.white}`;
  if (theme == "blueTheme")
    return `
    color:${COLORS.white};
    background: linear-gradient(
    60deg,
    ${COLORS.blue} -33%,
    ${COLORS.purple} 0%,
    ${COLORS.blue} 100%
    );`;
  if (theme == "redTheme")
    return `
    color:${COLORS.white};
    background: linear-gradient(
      60deg,
      ${COLORS.red} -33%,
      ${COLORS.purple} 0%,
      ${COLORS.red} 100%
      );`;
  if (theme == "darkTheme")
    return `
    color:${COLORS.white};
    background: ${COLORS.black}`;
  return `background: ${COLORS.white}`;
};

export const grid = () => {
  return `
  position:relative;
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
  }`;
};
export const StyledH2 = styled.h2`
  font-size: 3rem;
`;
export const Title = styled.h1`
  font-size: 4em;
  font-weight: 800;
  margin: 1rem 0;
  @media ${DEVICE.laptop} {
    font-size: 7em;
  }
`;
export const SubTitle = styled.p`
  font-size: 2.9rem;
  margin: 1rem 0;
  font-weight: 300;
  @media ${DEVICE.laptop} {
    font-size: 3rem;
    letter-spacing: 16px;
  }
`;

export const StyledPargraph = styled.p``;