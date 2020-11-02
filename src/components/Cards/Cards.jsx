import React from "react";
import styles from "./Cards.module.css";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

// TODO: Troubleshoot why double destructuring of props didn't work here
// data: { confirmed, recovered, deaths, lastUpdate }
function Cards({ data }) {
  if (!data) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify-="center">
        <Grid item component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data.confirmed.value} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of COVID-19 cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data.recovered.value} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of COVID-19 recoveries</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={data.deaths.value} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of COVID-19 deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
