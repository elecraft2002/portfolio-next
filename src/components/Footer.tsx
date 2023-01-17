import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import React from "react";
import styled from "styled-components";
import { COLORS, SIZE } from "../GlobalStyles";
import Socials from "../../components/homepage/Socials";

const StyledFooter = styled.footer`
  background: ${COLORS.black};
  color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledFooterContainer = styled.div`
  max-width: ${SIZE.laptopL};
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
  text-align: center;
`;
export const Footer = ({ settings }) => {
  console.log(settings);
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <div>
          <h4>Napište mi</h4>
          <Socials socials={settings.data.socials} />
        </div>
      </StyledFooterContainer>
      <p>Vojtík Suchánek 2023</p>
    </StyledFooter>
  );
};
