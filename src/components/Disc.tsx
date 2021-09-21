import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

interface DiscProps {
  title: string;
  released: string;
  slug: string;
  image?: Pick<GatsbyTypes.ContentfulAsset, 'gatsbyImageData'>;
}

const Disc: React.VFC<DiscProps> = ({ title, released, slug, image }) => (
  <Link to={`/music/${slug}`}>
    <Box>
      <GatsbyImage image={image?.gatsbyImageData} alt="" />
      <Typography variant="body1">{title}</Typography>
      <Typography variant="body2">{released}</Typography>
    </Box>
  </Link>
);

export default Disc;
