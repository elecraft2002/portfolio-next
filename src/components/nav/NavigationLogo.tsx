import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import { PrismicLink } from "@prismicio/react";
import React from "react";
import styled from "styled-components";
import { NAV_HEIGHT } from "../../GlobalStyles";

const SNavLogo = styled.figure`
  height: ${NAV_HEIGHT};
  display:flex;
  align-items:center;
`;

export default function NavigationLogo({ settings }: any) {
  return (
    <SNavLogo>
      <PrismicLink href="/">
        {prismicH.isFilled.image(settings.data.logo) && (
          <PrismicNextImage
            style={{ width: "100%", height: "100%" }}
            field={settings.data.logo}
          />
        )}
      </PrismicLink>
    </SNavLogo>
  );
}
