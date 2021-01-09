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
      <Typography gutterBottom variant="h4" component="h2" className={styles.title}>
        United States Covid-19 Cases
      </Typography>
      <Typography className={styles.subtitle}>
        Last updated: {new Date(data[0].date).toDateString()}
      </Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={data[0].confirmed}
          cardSubtitle="Number of active cases from COVID-19."
          added={data[0].positiveIncrease.toLocaleString()}
        />
        <CardComponent
          className={styles.hospitalized}
          cardTitle="Hospitalized"
          value={data[0].hospitalized}
          cardSubtitle="Current hospitalized people from COVID-19."
          added={data[0].hospitalizedIncrease.toLocaleString()}
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={data[0].deaths}
          cardSubtitle="Number of deaths from COVID-19."
          added={data[0].deathIncrease.toLocaleString()}
        />
      </Grid>
    </div>
  );
};

export default Info;
