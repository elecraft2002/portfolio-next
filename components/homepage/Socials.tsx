import { PrismicImage, PrismicLink } from "@prismicio/react";
import React from "react";
import styled from "styled-components";
interface ISocials {
  socials: any[];
}

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const StyledLinkContainer = styled.div`
  width: 2.5rem;
  aspect-ratio: 1;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0 0 5px red);
  }
`;

const Social = ({ data }) => {
  console.log(data);
  return (
    <>
      <StyledLinkContainer>
        <PrismicImage field={data.icon} />
      </StyledLinkContainer>
    </>
  );
};

export default function Socials({ socials }: ISocials) {
  console.log(socials);
  return (
    <StyledList>
      {socials.map((social: any, i: number) => {
        return (
          <li key={i}>
            <PrismicLink href={social.link.url}>
              <Social data={social} />
            </PrismicLink>
          </li>
        );
      })}
    </StyledList>
  );
}
