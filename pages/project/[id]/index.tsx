import React from "react";
import { useRouter } from "next/router";
import { createClient } from "../../../prismicio";
import { Layout } from "../../../src/components/Layout";
import Project from "../../../components/project/Project";
import Head from "next/head";

// import { createClient } from '@prismicio/client'

export default function Index(props) {
  const router = useRouter();
  const id = router.query.id as string;
  if (Object.keys(props).length === 0) return <p>404</p>;
  return (
    <>
      <Head>
        <title>
          {props.settings.data.siteTitle[0].text} - {props.project.data.name}
        </title>
        <link rel="shortcut icon" href={props.settings.data.logo.url} />
        <meta
          name="description"
          content={props.project.data.description_short[0].text}
        />
      </Head>
      <Layout
        alternateLanguages={props.settings.alternate_languages}
        navigation={props.navigation}
        settings={props.settings}
      >
        <Project project={props.project} />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page", { lang: "*" });

  return {
    paths: pages.map((page) => {
      return {
        params: { id: page.id },
        locale: page.lang,
      };
    }),
    fallback: true,
  };
}

export async function getStaticProps({ locale, previewData, params }) {
  try {
    const client = createClient({ previewData });
    const navigation = await client.getSingle("navigation", { lang: locale });
    const settings = await client.getSingle("settings", { lang: locale });
    const project = await client.getByID(params.id, { lang: locale });

    return {
      props: {
        navigation,
        settings,
        project,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
        // statusCode: 301
      },
    };
  }
}
