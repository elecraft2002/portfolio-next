import React from "react";
import { useRouter } from "next/router";
import { createClient } from "../../../prismicio";
// import { createClient } from '@prismicio/client'

export default function Index(props) {
  const router = useRouter();
  const id = router.query.id as string;
  console.log(props);
  return (
    <div>
      <h1>{props.project.data.name}</h1>
      {id}
    </div>
  );
}

export async function getStaticProps({ locale, previewData, params }) {
  const client = createClient({ previewData });
  // const page = await client.getByUID("page", "home", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });
  const project = await client.getByID(params.id, { lang: locale });
  // console.log(params.id);
  return {
    props: {
      // page,
      navigation,
      settings,
      project,
    },
  };
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
