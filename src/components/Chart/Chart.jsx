import React from "react";
import { Line } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({ data, state }) => {
  console.log("data from Chart.js is ", data);

  const lineChart = data ? (
    <Line
      data={{
        labels: data.map(({ date }) => new Date(date).toLocaleDateString()),
        datasets: [
          {
            data: data.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: data.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
          {
            data: data.map((data) => data.recovered),
            label: "Recovered",
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            fill: true,
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${state}` },
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
