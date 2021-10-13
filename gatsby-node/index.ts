import { GatsbyNode } from 'gatsby';
import path from 'path';
import { WorksPageContext } from 'templates/Works';
import { WorkPageContext } from 'templates/Work';
import { DiscographyPageContext } from 'templates/Discography';
import { MusicPageContext } from 'templates/Music';

// eslint-disable-next-line
export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  // reporter,
}) => {
  const { createPage } = actions;

  // Works Page
  await graphql<{
    allContentfulWorks: Pick<
      GatsbyTypes.Query['allContentfulWorks'],
      'totalCount'
    >;
  }>(
    `
      {
        allContentfulWorks(limit: 1000) {
          totalCount
        }
      }
    `,
  ).then(result => {
    // if (result.errors) {
    //   reporter.panicOnBuild(`Error while running GraphQL query.`);
    //   return Promise.reject(result.errors);
    // }
    const totalCount = result.data?.allContentfulWorks?.totalCount ?? 0;
    const postsPerPage = 10;
    const numPage = Math.ceil(totalCount / postsPerPage);
    Array.from({ length: numPage }).forEach((_, i) => {
      createPage<WorksPageContext>({
        path: i === 0 ? `/works` : `/works/page/${i + 1}`,
        component: path.resolve('./src/templates/Works.tsx'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPage,
          currentPage: i + 1,
        },
      });
    });
  });

  // Work Page
  await graphql<{
    allContentfulWorks: Pick<GatsbyTypes.Query['allContentfulWorks'], 'edges'>;
  }>(
    `
      query CreateWorkPage {
        allContentfulWorks(limit: 1000) {
          edges {
            node {
              createdAt(formatString: "YYYY/MM/DD")
              title
              slug
              body {
                raw
                references {
                  ... on ContentfulYouTube {
                    contentful_id
                    url
                    internal {
                      type
                    }
                  }
                  ... on ContentfulWorks {
                    contentful_id
                    title
                    description
                    slug
                    internal {
                      type
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  ).then(result => {
    result.data?.allContentfulWorks?.edges?.forEach(edge => {
      createPage<WorkPageContext>({
        path: `/works/${edge.node.slug}`,
        component: path.resolve('./src/templates/Work.tsx'),
        context: {
          post: edge,
        },
      });
    });
  });

  // Discography
  await graphql<{
    allContentfulDiscs: Pick<
      GatsbyTypes.Query['allContentfulDiscs'],
      'totalCount'
    >;
  }>(
    `
      {
        allContentfulDiscs {
          totalCount
        }
      }
    `,
  ).then(result => {
    const totalCount = result.data?.allContentfulDiscs?.totalCount ?? 0;
    const postsPerPage = 12;
    const numPage = Math.ceil(totalCount / postsPerPage);
    Array.from({ length: numPage }).forEach((_, i) => {
      createPage<DiscographyPageContext>({
        path: i === 0 ? `/discography` : `/discography/page/${i + 1}`,
        component: path.resolve(`./src/templates/Discography.tsx`),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPage,
          currentPage: i + 1,
        },
      });
    });
  });

  // Music
  await graphql<{
    allContentfulDiscs: Pick<GatsbyTypes.Query['allContentfulDiscs'], 'edges'>;
  }>(
    `
      query CreateMusicPage {
        allContentfulDiscs(limit: 1000) {
          edges {
            node {
              title
              description
              released(formatString: "YYYY/MM/DD")
              songs {
                raw
              }
              slug
              image {
                gatsbyImageData
              }
            }
          }
        }
      }
    `,
  ).then(result => {
    result.data?.allContentfulDiscs?.edges?.forEach(edge => {
      createPage<MusicPageContext>({
        path: `/music/${edge.node.slug}`,
        component: path.resolve(`./src/templates/Music.tsx`),
        context: {
          post: edge,
        },
      });
    });
  });
};
