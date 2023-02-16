import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../GlobalStyles";

export interface ILink {
  settings: any;
  link: any;
  label: any;
}
const Link = styled.span`
  text-decoration: none;
  padding: 1rem;
  font-family: "Fira Sans", sans-serif;
  color: ${COLORS.white};
  text-transform: uppercase;
  font-weight: 500;
`;
export default function NavigationLink(props: any) {
  console.log(props)
  return (
    <Link>
      <PrismicLink /* field={props.link}  */href={props.link.url}>
        <PrismicText field={props.label} />
      </PrismicLink>
    </Link>
  );
}
