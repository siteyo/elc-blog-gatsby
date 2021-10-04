import * as React from 'react';

import { Link } from 'gatsby';

import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
} from '@material-ui/core';

interface LinkCardProps {
  title: string;
  description: string;
  image: string;
  to: string;
}

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'primary',
    borderBottom: 'none',
  },
});

const LinkCard: React.VFC<LinkCardProps> = ({
  title,
  description,
  image,
  to,
}) => {
  const classes = useStyles();
  return (
    <Link className={classes.link} to={to}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" color="primary">
            {title}
          </Typography>
          <Typography variant="body2" color="secondary">
            {description}
          </Typography>
        </CardContent>
        <CardMedia component="img" image={image} />
      </Card>
    </Link>
  );
};

export default LinkCard;
