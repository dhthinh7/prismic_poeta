import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import config from './slicemachine.config.json'

/**
 * The project's Prismic repository name.
 */
export const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName

export const client = prismic.createClient(repositoryName)

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
// TODO: Update the routes array to match your project's route structure.
const routes: prismic.ClientConfig['routes'] = [
  // Examples:
  {
    type: 'home_page',
    path: '/'
  },
  {
    type: 'blog',
    path: '/blog/:uid'
  },
  {
    type: 'page',
    resolvers: {
      levelone: 'level_one',
      leveltwo: 'level_two',
      levelthree: 'level_three'
    },
    path: '/:levelone?/:leveltwo?/:levelthree?/:uid'
  },
  {
    type: 'case_study',
    resolvers: {
      levelone: 'level_one',
      leveltwo: 'level_two',
      levelthree: 'level_three'
    },
    path: '/case-study/:levelone?/:leveltwo?/:levelthree?/:uid'
  },
  {
    type: 'industry',
    resolvers: {
      levelone: 'level_one',
      leveltwo: 'level_two',
      levelthree: 'level_three'
    },
    path: '/industry/:levelone?/:leveltwo?/:levelthree?/:uid'
  },
  {
    type: 'partnerships',
    resolvers: {
      levelone: 'level_one',
      leveltwo: 'level_two',
      levelthree: 'level_three'
    },
    path: '/partnerships/:levelone?/:leveltwo?/:levelthree?/:uid'
  },
  {
    type: 'services',
    resolvers: {
      levelone: 'level_one',
      leveltwo: 'level_two',
      levelthree: 'level_three'
    },
    path: '/services/:levelone?/:leveltwo?/:levelthree?/:uid'
  }
]

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === 'production'
        ? { next: { tags: ['prismic'] }, cache: 'force-cache' }
        : { next: { revalidate: 5 } }
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req
  })

  return client
}
