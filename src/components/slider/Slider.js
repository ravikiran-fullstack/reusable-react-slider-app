import React, { useState } from "react";

import Review from "../review/Review";

import useStyles from "./styles";
import { Grid, Button } from "@material-ui/core";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const Slider = ({ data }) => {
  console.log(data);
  const length = data.length;
  const [currentReview, setCurrentReview] = useState(0);
  const classes = useStyles();
  const prevReview = () => {
    setCurrentReview(currentReview === 0 ? length - 1 : currentReview - 1);
  };

  const nextPreview = () => {
    setCurrentReview(currentReview === length - 1 ? 0 : currentReview + 1);
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <h1 className={classes.heading}>/Reviews</h1>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={1} style={{ textAlign: "center" }}>
          <Button className={`${classes.arrow} ${classes.leftArrow}`} onClick={() => prevReview()}>
            <SkipPreviousIcon />
          </Button>
        </Grid>

        <Grid item xs={10} className={classes.slider}>
          {data.map((review, index) => {
            return (
              <div
                className={
                  index === currentReview
                    ? `${classes.slide} ${classes.active}`
                    : `${classes.slide}`
                }
                key={index}
              >
                {index === currentReview && (
                  <Review {...review} key={index} className={classes.image} />
                )}
              </div>
            );
          })}
        </Grid>

        <Grid item xs={1} style={{ textAlign: "center" }}>
          <Button className={`${classes.arrow} ${classes.rightArrow}`} onClick={() => nextPreview()}>
            <SkipNextIcon />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Slider;
