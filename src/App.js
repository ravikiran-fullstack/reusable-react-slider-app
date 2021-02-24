import React from "react";

import Slider from "./components/slider/Slider";
import ImageSlider from './components/imageSlider/ImageSlider';

import { sliderImages } from './components/imageSlider/sliderData';


import useStyles from "./styles";
import { Grid } from "@material-ui/core";

import data from "./data";

const App = () => {
  const classes = useStyles();
  return (
    <>
      {/* <Grid container style={{marginTop: '200px'}}> 
        <Grid item xs={12}>
          <ImageSlider slides={ sliderImages }/>
        </Grid>  
      </Grid> */}
      <Grid
        container
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <h1 className={classes.heading}>/Reviews</h1>
        </Grid>
      </Grid>
      <Grid container> 
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Slider data={data} />
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  );
};

export default App;
