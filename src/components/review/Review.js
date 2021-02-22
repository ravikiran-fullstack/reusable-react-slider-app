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
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActionsStyle}>
        <div style={{ marginBottom: "10px" }}>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              console.log("current id ", props.id);
              if (props.id === 0) {
                return props.showReview(3);
              } else {
                return props.showReview(props.id - 1);
              }
            }}
          >
            {"<"}
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              if (props.id === 3) {
                return props.showReview(0);
              } else {
                return props.showReview(props.id + 1);
              }
            }}
          >
            {">"}
          </Button>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.randomPerson()}
        >
          Surprise me
        </Button>
      </CardActions>
    </Card>
  );
};

export default Review;