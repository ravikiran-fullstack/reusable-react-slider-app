import React from 'react'

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

const Review = (props) => {
  console.log(props);
  const { name, image, job, text } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div className={classes.media}>
          <CardMedia
            className={classes.imageStyle}
            image={image}
            title="Contemplative Reptile"
          />
        </div>
        <CardContent>
          <Typography variant="h4" align="center" className={classes.name}>
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            align="center"
            className={classes.job}
          >
            {job}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Review;