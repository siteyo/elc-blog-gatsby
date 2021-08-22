import { GatsbyNode } from 'gatsby';
import path from 'path';
import { WorksPageContext } from 'templates/works';

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
    const totalCount = result.data?.allContentfulWorks.totalCount ?? 0;
    const postsPerPage = 10;
    const numPage = Math.ceil(totalCount / postsPerPage);
    Array.from({ length: numPage }).forEach((_, i) => {
      createPage<WorksPageContext>({
        path: i === 0 ? `/works` : `/works/page/${i + 1}`,
        component: path.resolve('./src/templates/works.tsx'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPage,
          currentPage: i + 1,
        },
      });
    });
  });
};
