import { GatsbyNode } from 'gatsby';
import path from 'path';

// eslint-disable-next-line
export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  const worksIndex = path.resolve('./src/templates/work.tsx');

  const result = await graphql<{
    allContentfulWorks: Pick<GatsbyTypes.Query['allContentfulWorks'], 'nodes'>;
  }>(
    `
      query {
        allContentfulWorks {
          edges {
            node {
              slug
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data?.allContentfulWorks?.nodes?.forEach(node => {
    createPage({
      path: `/works/${node.slug}`,
      component: worksIndex,
      context: {},
    });
  });
};
