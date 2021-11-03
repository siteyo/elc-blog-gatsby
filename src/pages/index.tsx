import * as React from 'react';

import { graphql, PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import HomeLayout from 'components/HomeLayout';
import SEO from 'components/Seo';

// Page
const IndexPage: React.FC<PageProps<GatsbyTypes.HomeImageQuery>> = ({
  data,
}) => (
  <HomeLayout>
    <SEO title="Home" />
    <>
      {data.contentfulAsset?.gatsbyImageData && (
        <GatsbyImage image={data.contentfulAsset.gatsbyImageData} alt="" />
      )}
    </>
  </HomeLayout>
);

export default IndexPage;

export const query = graphql`
  query HomeImage {
    contentfulAsset(title: { eq: "HomeImage" }) {
      gatsbyImageData(
        formats: WEBP
        layout: CONSTRAINED
        placeholder: BLURRED
        height: 300
      )
    }
  }
`;
