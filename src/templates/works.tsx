import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import PostCard from 'components/PostCard';

interface WorksProps {
  data: GatsbyTypes.WorksPageQuery;
}

const Works: React.VFC<WorksProps> = ({ data }) => {
  const content = data.allContentfulWorks.edges.map<React.ReactChild>(edge => (
    <PostCard
      key={edge.node.slug}
      title={edge.node.title ?? ''}
      createdAt={edge.node.createdAt ?? ''}
      slug={edge.node.slug ?? ''}
    />
  ));
  return <Layout>{content}</Layout>;
};

export default Works;

export const query = graphql`
  query WorksPage {
    allContentfulWorks(limit: 3, sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          title
          updatedAt
          createdAt(formatString: "YYYY/MM/DD")
          slug
        }
      }
    }
  }
`;
