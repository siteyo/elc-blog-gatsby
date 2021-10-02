import * as React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';

interface LinkCardProps {
  title: string;
  description: string;
  image: string;
}

const LinkCard: React.VFC<LinkCardProps> = ({ title, description, image }) => (
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
);

export default LinkCard;
