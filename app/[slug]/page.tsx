import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";
import React from "react";

interface IPage {
  slug: string;
}

export async function generateMetadata({ params }: { params: IPage }): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("page", params.slug);;

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function Page({ params }: { params: IPage }) {
  const client = createClient();

  const page = await client.getByUID("page", params.slug);

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
