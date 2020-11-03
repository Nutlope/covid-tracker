import React from "react";
import { Typography, Grid } from "@material-ui/core";
import CardComponent from "./Card/Card";
import styles from "./Cards.module.css";

const Info = ({ data }) => {
  if (!data) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h4" component="h2">
        Global
      </Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={data.confirmed.value}
          lastUpdate={data.lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={data.recovered.value}
          lastUpdate={data.lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={data.deaths.value}
          lastUpdate={data.lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;
