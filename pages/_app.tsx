import Link from "next/link";
import { PrismicLink, PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";

import { repositoryName, linkResolver } from "../prismicio";

import "../styles/globals.css";
import React from "react";
import {
  COLORS,
  DEVICE,
  StyledH2,
  StyledPargraph,
  Title,
} from "../src/GlobalStyles";
import styled from "styled-components";
import { GoogleAnalytics } from "nextjs-google-analytics";

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
        <GoogleAnalytics trackPageViews />
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
