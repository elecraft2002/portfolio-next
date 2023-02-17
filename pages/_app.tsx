import Link from "next/link";
import { PrismicLink, PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";

import { repositoryName, linkResolver } from "../prismicio";

import "../styles/globals.css";
import React from "react";
import { COLORS, DEVICE } from "../src/GlobalStyles";
import styled from "styled-components";

const richTextComponents = {
  paragraph: ({ children }) => <p className="mb-7 last:mb-0">{children}</p>,
  oList: ({ children }) => (
    <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }) => (
    <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  preformatted: ({ children }) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicLink>
  ),
};
const StyledH2 = styled.h2`
  font-size: 3rem;
`;
const Title = styled.h1`
  font-size: 4em;
  font-weight: 800;
  margin: 1rem 0;
  @media ${DEVICE.laptop} {
    font-size: 7em;
  }
`;
const SubTitle = styled.p`
  font-size: 2.9rem;
  margin: 1rem 0;
  font-weight: 300;
  @media ${DEVICE.laptop} {
    font-size: 3rem;
    letter-spacing: 16px;
  }
`;

const StyledPargraph = styled.p``;

export const components = {
  heading1: ({ children }) => <Title>{children}</Title>,
  heading2: ({ children }) => <StyledH2>{children}</StyledH2>,
  paragraph: ({ children }) => <StyledPargraph>{children}</StyledPargraph>,
  hyperlink: ({ children, node }) => (
    <PrismicLink
      field={node.data}
      style={{ color: COLORS.blue, textDecoration: "underline" }}
    >
      {children}
    </PrismicLink>
  ),
};

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      internalLinkComponent={Link as any}
      linkResolver={linkResolver}
      richTextComponents={components}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
