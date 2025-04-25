import NotFound from '@/app/(system)/not-found'
import HierarchyLayout from '@/components/layout/HierarchyLayout'
import { ICategory } from '@/lib/model/index.type.'
import { BreadcrumbMapper } from '@/lib/utils/dataMapper.util'
import { prismicUtils } from '@/lib/utils/prismic.util'
import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { SliceZone } from '@prismicio/react'
import { Metadata } from 'next'
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types'

/**
 * Generates metadata for the page.
 * @param params Object containing the page path.
 */
export async function generateMetadata({
  params
}: {
  params: {
    caseStudyPath: string
  }
}): Promise<Metadata> {
  const client = createClient()
  const uid = params.caseStudyPath[params.caseStudyPath.length - 1]

  try {
    const page = await client.getByUID('case_study', uid)

    const { meta_title, meta_description, keywords, application_name, authors, open_graph, twitter } = page.data

    const _keywords = keywords.map((key) => {
      return key.keyword as string
    })

    const _authors: { name: string; url: string }[] = authors.map((author) => ({
      name: author.name as string,
      url: prismicUtils.getUrl(author.url)
    }))

    const _openGraph: OpenGraph = {
      title: open_graph[0]?.title || '',
      description: open_graph[0]?.description || '',
      url: prismicUtils.getUrl(open_graph[0]?.url),
      siteName: open_graph[0]?.site_name || undefined,
      type: 'website',
      images: [
        {
          url: open_graph[0]?.image?.url || '',
          width: 1200,
          height: 630,
          alt: open_graph[0]?.image.alt || 'image'
        }
      ]
    }

    const _twitter: Twitter = {
      card: 'summary_large_image',
      site: twitter[0]?.site || undefined,
      description: twitter[0]?.description || '',
      images: [open_graph[0]?.image.url || '']
    }

    return {
      title: meta_title || '', // Defines the page title (shown in the browser tab and search results)
      description: meta_description || '', // Short description for SEO (meta description),
      keywords: _keywords || [], // Keywords for SEO (Google doesn't use them anymore, but some engines do),
      robots: {
        index: true,
        follow: true,
        nocache: false
      },
      applicationName: application_name || '', // Name of the web app,
      authors: _authors, //List of authors with names and URLs.,
      // creator: '', // Name of the person who created the website.
      // publisher: '', // The entity that published the content.
      // generator: '', // The tool used to generate the page (e.g., "Next.js").
      openGraph: _openGraph, // Metadata for Open Graph (used for Facebook, LinkedIn, etc.).
      twitter: _twitter // Metadata for Twitter Cards (used when sharing on Twitter).
    }
  } catch {
    return {
      title: '',
      description: ''
    }
  }
}

/**
 * Page component that fetches and renders dynamic content.
 * @param params Object containing the page path.
 */
export default async function Page({
  params
}: {
  params: {
    caseStudyPath: string
  }
}) {
  const client = createClient()
  const uid = params.caseStudyPath[params.caseStudyPath.length - 1]

  try {
    const page = await client.getByUID('case_study', uid)
    const categories = await client.getAllByType('category')

    const breadcrumbMapper = new BreadcrumbMapper(categories)
    const breadcrumbs: ICategory[] = [
      ...breadcrumbMapper.breadcrumbsMapper(page),
      {
        id: page.id,
        uid: page.uid,
        categoryName: page.data.display_name || page.data.meta_title,
        isShow: true
      }
    ]

    return (
      <HierarchyLayout categories={breadcrumbs}>
        <SliceZone
          slices={page.data.slices}
          components={components}
          context={{ breadcrumbs, page: page, categories: categories }}
        />
      </HierarchyLayout>
    )
  } catch {
    return <NotFound />
  }
}

/**
 * Generates static paths for all pages.
 */
export async function generateStaticParams() {
  const client = createClient()

  const pages = await client.getAllByType('case_study')

  return pages.map((page) => ({
    caseStudyPath: page.url?.split('/').filter(Boolean) || []
  }))
}
