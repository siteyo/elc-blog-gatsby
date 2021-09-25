import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

import { graphql, navigate, PageProps } from 'gatsby';

import Layout from 'components/Layout';
import Disc from 'components/Disc';
import SEO from 'components/Seo';

const useStyles = makeStyles({
  pageRoot: {
    margin: '1rem 0',
  },
  pageButtons: {
    justifyContent: 'center',
  },
});

export interface DiscographyPageContext {
  limit: number;
  skip: number;
  numPage: number;
  currentPage: number;
}

const Discography: React.FC<
  PageProps<GatsbyTypes.DiscographyPageQuery, DiscographyPageContext>
> = ({ data, pageContext }) => {
  const classes = useStyles();
  const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    if (page === 1) {
      navigate(`/discography`);
    } else {
      navigate(`/discography/page/${page}`);
    }
  };
  return (
    <Layout>
      <SEO title="Discography" />
      <Grid container spacing={8}>
        {data.allContentfulDiscs.edges.map(edge => (
          <Grid item xs={6} sm={4} md={3}>
            <Disc
              title={edge.node.title ?? ''}
              released={edge.node.released ?? ''}
              slug={edge.node.slug ?? ''}
              image={edge.node.image}
            />
          </Grid>
        ))}
      </Grid>
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

export default Discography;

export const query = graphql`
  query DiscographyPage($skip: Int!, $limit: Int!) {
    allContentfulDiscs(
      sort: { fields: createdAt, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          description
          image {
            gatsbyImageData
          }
          released
          slug
        }
      }
    }
  }
`;
