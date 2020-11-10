import React from "react";
import { Typography, Grid } from "@material-ui/core";
import CardComponent from "./Card/Card";
import styles from "./Cards.module.css";

const Info = ({ data }) => {
  if (!data) {
    return "Loading...";
  }

  // TODO: Need to make this show numbers for US instead of defaulting to a state
  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h4" component="h2">
        United States
      </Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={data[0].confirmed}
          lastUpdate={data[0].date}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={data[0].recovered}
          lastUpdate={data[0].date}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={data[0].deaths}
          lastUpdate={data[0].date}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;
