import React, { useState } from 'react'

import Review from '../review/Review';

import useStyles from './styles';
import { Grid, Button } from "@material-ui/core";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const Slider = ({ data }) => {
  console.log(data);
  const [currentReview, setCurrentReview] = useState(0);
  const classes = useStyles();
  const prevReview = (id) => { 
    console.log('id',id);
    if (id === 0) {
      setCurrentReview(3);
    } else { 
      setCurrentReview(--id);
    }
  }

  const nextPreview = (id) => { 
    console.log('id', id);
    if (id === 3) {
      setCurrentReview(0)
    } else { 
      setCurrentReview(++id)
    }
  }

  
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
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={1} style={{textAlign:'center'}}>
          <Button className={classes.arrow} onClick={()=> prevReview(currentReview)}><SkipPreviousIcon/></Button>
        </Grid>
        <Grid item xs={10}>
          <Review {...data[currentReview]} />
        </Grid>
        <Grid item xs={1} style={{ textAlign: 'center' }}>
          <Button className={classes.arrow} onClick={ () => nextPreview(currentReview)}><SkipNextIcon/></Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Slider
