import React from 'react'

import Review from '../review/Review';

import useStyles from './styles';
import { Grid, Button } from "@material-ui/core";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const Slider = ({ data }) => {
  console.log(data);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ marginTop: "100px" }}
      >
        <Grid item>
          <h1 className={classes.heading}>/Reviews</h1>
          <div className={classes.underline}></div>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={1} style={{textAlign:'center'}}>
          <Button className={classes.arrow}><SkipPreviousIcon/></Button>
        </Grid>
        <Grid item xs={10}>
          <Review {...data[2]} />
        </Grid>
        <Grid item xs={1} style={{ textAlign: 'center' }}>
          <Button className={classes.arrow}><SkipNextIcon/></Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Slider
