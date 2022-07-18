import React, { PropsWithChildren, useRef } from 'react'
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
  NO_GROUP,
  Action,
} from 'kbar'
import classNames from 'src/utils/classnames'
import { navigate, graphql, useStaticQuery } from 'gatsby'
import { useMemo } from 'react'
import {
  IoHomeOutline as IoHome,
  IoSearchOutline as IoSearch,
  IoLogoTwitter as IoTwitter,
  IoLogoGithub as IoGithub,
  IoMailOutline as IoMail,
  IoLibraryOutline as IoLibrary,
  IoFilmOutline as IoFilm,
  IoDocumentTextOutline as IoDocument,
  IoColorPaletteOutline as IoColor,
  IoInformationCircleOutline as IoInformation,
  IoLeafOutline as IoLeaf,
  IoChevronForwardOutline,
} from 'react-icons/io5'

export default function CommandPallette(props: PropsWithChildren<{}>) {
  const { site, allMdx } = useStaticQuery(query)

  const actions = useMemo<Action[]>(() => {
    const items = [
      ...PAGES,
      {
        id: 'search',
        name: 'ძებნა',
        keywords: 'search',
        icon: <IoSearch />,
        section: 'Navigation',
        shortcut: ['?'],
      }
    ]

    if (allMdx.edges.length > 0) {
      allMdx.edges.forEach(({ node }: any) => {
        items.push({
          id: node.id,
          name: node.frontmatter.title,
          keywords: `${node.frontmatter.keywords?.join(' ')} ${node.frontmatter.categories?.join(' ')}`,
          perform: () => navigate(`/${node.fields.slug}`),
          parent: 'search',
        })
      })
    }

    return items
  }, [site, allMdx])

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator>
            <div className="w-[600px] rounded-lg overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
              <KBarSearch className="bg-transparent w-full px-4 py-4 outline-none font-mono dark:text-gray-200" />
              <RenderResults />
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {props.children}
    </KBarProvider>
  )
}

function RenderResults() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        if (typeof item === 'string') {
          return (
            <div
              className={classNames(
                'px-4 py-2 text-xs DejaVuSansMono text-gray-300 dark:text-gray-500',
                'bg-transparent',
              )}
            >
              {item}
            </div>
          )
        }

        return (
          <div
            className={classNames(
              'flex justify-between',
              'px-4 py-4 iAWriterQuattro dark:text-gray-300',
              active ? 'bg-gray-50 dark:bg-gray-700 dark:text-gray-200' : 'bg-transparent',
            )}
          >
            <div className="flex items-center gap-1">
              {item.icon && <span className="mr-2">{item.icon}</span>}

              {item.ancestors.length > 0 && (
                <span className="iAWriterDuospace mr-1">
                  {item.ancestors.map((ancestor: any) => (
                    <div
                      key={ancestor.name}
                      className="inline-flex items-center gap-1 text-sm text-gray-300 dark:text-gray-500"
                    >
                      <span>{ancestor.name}</span> <IoChevronForwardOutline />
                    </div>
                  ))}
                </span>
              )}

              <span className='iAWriterDuospace'>{item.name}</span>
            </div>

            <div className="flex gap-1">
              {item.shortcut?.map((shortcut, index) => (
                <span
                  key={index}
                  className="bg-gray-100 dark:bg-gray-600 px-1 text-sm rounded text-gray-600 dark:text-gray-400"
                >
                  {shortcut}
                </span>
              ))}
            </div>
          </div>
        )
      }}
    />
  )
}

const query = graphql`
  query CommandPallette {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        siteUrl
        image
      }
    }
    allMdx(filter: { frontmatter: { published: { ne: false } } }, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
            keywords
            categories
          }
        }
      }
    }
  }
`

const PAGES = [
  {
    id: 'home',
    name: 'Home',
    shortcut: ['g', 'h'],
    keywords: 'home',
    url: '/',
    section: 'Navigation',
    icon: <IoHome />,
  },
  {
    id: 'search',
    name: 'Search',
    keywords: 'search',
    icon: <IoSearch />,
    shortcut: ['?'],
  },
  {
    id: 'email',
    name: 'Email',
    section: 'Contact',
    shortcut: ['g', 'c'],
    keywords: 'email',
    icon: <IoMail />,
    perform: () => navigate(`mailto:shalva.gegia@gmail.com?subject=Hi`),
  },
  {
    id: 'twitter',
    name: 'Twitter',
    section: 'Contact',
    shortcut: ['g', 't'],
    keywords: 'twitter',
    icon: <IoTwitter />,
    perform: () => navigate(`https://twitter.com/@ShalvaGegia`),
  },
  {
    id: 'theme',
    name: 'Theme',
    section: 'Preferences',
    icon: <IoColor />,
    keywords: 'change theme',
  },
  {
    id: 'dark',
    name: 'Dark',
    parent: 'theme',
    keywords: 'dark',
    perform: () => (window as any).__setPreferredTheme('dark'),
  },
  {
    id: 'light',
    name: 'Light',
    parent: 'theme',
    keywords: 'light',
    perform: () => (window as any).__setPreferredTheme('light'),
  },
]
