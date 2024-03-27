import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home_page");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function Home() {
  const client = createClient();

  const page = await client.getSingle('home_page')
  return <div>
    {/* <h1 className="text-red-500">{page.data.title}</h1> */}
    {/* <pre>{JSON.stringify(page.data.slices)}</pre> */}
    <SliceZone slices={page.data.slices} components={components} />
  </div>
}
