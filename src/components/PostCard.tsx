import React from 'react';
import {
  Typography,
  Grid,
  makeStyles,
  createStyles,
  Box,
  Divider,
} from '@material-ui/core';

import TypoLink from 'components/TypoLink';

/* Styles */
const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      marginTop: 20,
      marginBottom: 20,
    },
    link: {
      textDecoration: 'none',
      color: 'inherit',
      '&:hover': {
        borderBottom: `solid 1px ${theme.palette.primary.main}`,
      },
    },
  }),
);

/* Interface */
interface PostCardProps {
  title: string;
  createdAt: string;
  slug: string;
  description?: string;
}

/* Component */
const PostCard: React.VFC<PostCardProps> = ({
  title,
  createdAt,
  slug,
  description,
}) => {
  const classes = useStyles();
  return (
    <Box>
      <Grid className={classes.container} container>
        <Grid item sm={9} xs={12}>
          <TypoLink
            variant="h5"
            color="primary"
            to={`/works/${slug}`}
            underline="hover"
          >
            {title}
          </TypoLink>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Typography variant="h6" color="primary">
            {createdAt}
          </Typography>
        </Grid>
        <Grid item sm={12} xs={12}>
          <Typography variant="body2" color="secondary">
            {description}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
};

export default PostCard;
