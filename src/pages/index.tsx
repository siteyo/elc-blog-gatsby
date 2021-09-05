import React from 'react';
import Layout from 'components/Layout';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

// Page
const IndexPage: React.FC<PageProps<GatsbyTypes.HomeImageQuery>> = ({
  data,
}) => (
  <Layout>
    {data.contentfulAsset?.gatsbyImageData && (
      <GatsbyImage image={data.contentfulAsset.gatsbyImageData} alt="" />
    )}
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query HomeImage {
    contentfulAsset(title: { eq: "HomeImage" }) {
      gatsbyImageData(formats: WEBP, layout: FULL_WIDTH, placeholder: BLURRED)
    }
  }
`;
