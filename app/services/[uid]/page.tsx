import { createClient } from '@/prismicio'
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

export default async function Page({ params }: {
  params: {
    category: string,
    uid: string
  }
}) {
  const client = createClient()

  const page = await client.getByUID('category', params.uid)

  return <SliceZone slices={page.data.slices} components={components} />
}

export async function generateStaticParams() {
  const client = createClient()
  const pages = await client.getAllByType('category')

  return pages.map((page) => {
    return {
      category: page.data.category,
      uid: page.uid,
    }
  })
}