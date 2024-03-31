import { createClient } from '@/prismicio'
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { Metadata } from 'next';

export async function generateMetadata({ params }: {
  params: {
    category: string,
    uid: string
  }
}): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("category_page", params.uid);;

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function Page({ params }: {
  params: {
    category: string,
    uid: string
  }
}) {
  const client = createClient()

  const page = await client.getByUID('category_page', params.uid)

  return <SliceZone slices={page.data.slices} components={components} />
}

export async function generateStaticParams() {
  const client = createClient()
  const pages = await client.getAllByUIDs('category_page', ['services'])

  return pages.map((page) => {
    return {
      category: page.data.category,
      uid: page.uid,
    }
  })
}