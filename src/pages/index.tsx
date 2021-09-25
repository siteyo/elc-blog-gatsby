import React from 'react';

import { graphql, PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from 'components/Layout';
import SEO from 'components/Seo';

// Page
const IndexPage: React.FC<PageProps<GatsbyTypes.HomeImageQuery>> = ({
  data,
}) => (
  <Layout>
    <SEO title="Home" />
    <>
      {data.contentfulAsset?.gatsbyImageData && (
        <GatsbyImage image={data.contentfulAsset.gatsbyImageData} alt="" />
      )}
    </>
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
