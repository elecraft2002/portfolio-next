import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices";
import React from "react";
import { Layout } from "../src/components/Layout";
import Homepage from "../components/homepage/Homepage";

const Index = ({ page, navigation, settings, homepage }) => {
  return (
    <Layout
      alternateLanguages={settings.alternate_languages}
      navigation={navigation}
      settings={settings}
    >
      <Homepage homepage={homepage} settings={settings}/>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  // const page = await client.getByUID("page", "home", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });
  const homepage = await client.getSingle("homapage", { lang: locale });

  return {
    props: {
    // page,
      navigation,
      settings,
      homepage,
    },
  };
}
