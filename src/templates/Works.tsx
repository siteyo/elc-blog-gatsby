import React from 'react';

import { makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

import { graphql, PageProps, navigate } from 'gatsby';

import Layout from 'components/Layout';
import PostCard from 'components/PostCard';

import SEO from 'components/Seo';

const useStyles = makeStyles({
  pageRoot: {
    margin: '1rem 0',
  },
  pageButtons: {
    justifyContent: 'center',
  },
});

export interface WorksPageContext {
  limit: number;
  skip: number;
  numPage: number;
  currentPage: number;
}

const Works: React.VFC<
  PageProps<GatsbyTypes.WorksPageQuery, WorksPageContext>
> = ({ data, pageContext }) => {
  const classes = useStyles();
  const content = data.allContentfulWorks.edges.map<React.ReactChild>(edge => (
    <PostCard
      key={edge.node.slug}
      title={edge.node.title ?? ''}
      createdAt={edge.node.createdAt ?? ''}
      slug={edge.node.slug ?? ''}
      description={edge.node.description}
    />
  ));
  const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    if (page === 1) {
      navigate(`/works`);
    } else {
      navigate(`/works/page/${page}`);
    }
  };
  return (
    <Layout contentMaxWidth="sm">
      <SEO title="Works" />
      <div>{content}</div>
      <Pagination
        classes={{ root: classes.pageRoot, ul: classes.pageButtons }}
        page={pageContext.currentPage}
        count={pageContext.numPage}
        color="secondary"
        onChange={handleChange}
      />
    </Layout>
  );
};

export default Works;

export const query = graphql`
  query WorksPage($skip: Int!, $limit: Int!) {
    allContentfulWorks(
      sort: { fields: createdAt, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          updatedAt
          createdAt(formatString: "YYYY/MM/DD")
          slug
          description
        }
      }
    }
  }
`;
