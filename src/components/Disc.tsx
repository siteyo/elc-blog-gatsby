import React from 'react';

import { Box, Typography, makeStyles } from '@material-ui/core';

import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

interface DiscProps {
  title: string;
  released: string;
  slug: string;
  image?: Pick<GatsbyTypes.ContentfulAsset, 'gatsbyImageData'>;
}

const useStyles = makeStyles(theme => ({
  link: {
    opacity: 1.0,
    '&:hover': {
      opacity: 0.5,
      color: theme.palette.secondary.main,
      transitionDuration: theme.transitions.duration.standard,
    },
    color: 'inherit',
    textDecoration: 'none',
  },
}));

const Disc: React.VFC<DiscProps> = ({ title, released, slug, image }) => {
  const classes = useStyles();
  return (
    <Box>
      <Link className={classes.link} to={`/music/${slug}`}>
        <GatsbyImage image={image?.gatsbyImageData} alt="" />
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body2">{released}</Typography>
      </Link>
    </Box>
  );
};

export default Disc;
