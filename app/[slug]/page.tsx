import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import React from "react";

interface IPage {
  slug: string;
}
export default async function Page({ params }: { params: IPage }) {
  const client = createClient();

  const page = await client.getByUID("page", params.slug);
  console.log("page", page.data.slices);

  return (
    <div>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { slug: page.uid };
  });
}
