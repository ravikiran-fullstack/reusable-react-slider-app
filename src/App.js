import React from "react";

import Slider from "./components/slider/Slider";

import useStyles from "./styles";
import { Grid } from "@material-ui/core";

import data from "./data";

const App = () => {
  const classes = useStyles();
  return (
    <>
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
