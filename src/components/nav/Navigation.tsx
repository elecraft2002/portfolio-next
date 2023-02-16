import React from "react";
import styled from "styled-components";
import NavigationLogo from "./NavigationLogo";
import NavigationLink, { ILink } from "./NavigationLink";
import Button from "../Button";
import { COLORS, NAV_HEIGHT } from "../../GlobalStyles";
import { PrismicLink } from "@prismicio/react";
import { linkResolver } from "../../../prismicio";

const FlagIcon = ({ lang }) => {
  const code = lang.substring(3).toLowerCase();

  return <span className={`fi fi-${code}`} />;
};

const NavContainer = styled.div`
  display: flex;
  width: 100vw;
  height: ${NAV_HEIGHT};
  justify-content: space-evenly;
  align-items: center;
  background: ${COLORS.black};
  position: fixed;
  z-index: 999;
  top: 0;
`;
const NavLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;
const LinkContainer = styled.li`
  display: flex;
`;

export default function Navigation({
  alternateLanguages = [],
  navigation,
  settings,
}) {
  return (
    <NavContainer>
      <NavigationLogo settings={settings} />
      <NavLinkList>
        {navigation.data.links?.map((link: ILink, i: number) => {
          return (
            <LinkContainer key={i}>
              <NavigationLink
                link={link.link}
                label={link.label}
              ></NavigationLink>
            </LinkContainer>
          );
        })}
      </NavLinkList>
      {/* <Button
        onClick={() => {
          console.log("Clicked");
        }}
        colorType={"gradientPink"}
      >
        KONTAKT
      </Button> */}
      
    </NavContainer>
  );
}
