import React from 'react';
import { Typography, Grid, makeStyles, Box, Divider } from '@material-ui/core';
import { Link } from 'gatsby';

/* Styles */
const useStyles = makeStyles({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
});

/* Interface */
interface PostCardProps {
  title: string;
  createdAt: string;
  slug: string;
}

/* Component */
const PostCard: React.VFC<PostCardProps> = ({ title, createdAt, slug }) => {
  const classes = useStyles();
  return (
    <Box>
      <Link to={`/works/${slug}`}>
        <Grid className={classes.container} container>
          <Grid item sm={9} xs={12}>
            <Typography variant="h4">{title}</Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            {createdAt}
          </Grid>
        </Grid>
      </Link>
      <Divider />
    </Box>
  );
};

export default PostCard;
