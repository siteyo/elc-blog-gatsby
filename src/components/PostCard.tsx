import React from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import { Link } from 'gatsby';

interface PostCardProps {
  title: string;
  description: string;
  createdAt: string;
  slug: string;
}

const PostCard: React.VFC<PostCardProps> = ({
  title,
  description,
  createdAt,
  slug,
}) => {
  return (
    <Link to={`/works/${slug}`}>
      <Paper>
        <Grid container>
          <Grid item sm={9} xs={12}>
            <Typography variant="h4">{title}</Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            {createdAt}
          </Grid>
        </Grid>
        <Typography variant="h6">{description}</Typography>
      </Paper>
    </Link>
  );
};

export default PostCard;
