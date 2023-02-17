import { createClient } from "../prismicio";
import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import styled from "styled-components";
import { COLORS } from "../src/GlobalStyles";

const StyledMainContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img`
  box-shadow: 7px 7px ${COLORS.pink};
`;

export default function Error({ error }) {
  console.log(error);
  return (
    <StyledMainContainer>
      <StyledImage
        src={error.data.error_image.url}
        alt={error.data.error_image.alt}
      />
      <PrismicRichText field={error.data.error_message} />
      <Link href={"/"}>
        <PrismicRichText field={error.data.home} />
      </Link>
    </StyledMainContainer>
  );
}
export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  // const page = await client.getByUID("page", "home", { lang: locale });
  const error = await client.getSingle("404", { lang: "cs-cz" });

  return {
    props: {
      error,
    },
  };
}
