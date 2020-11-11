import React from "react";
import { Line } from "react-chartjs-2";
// import { ResponsiveLine } from "@nivo/line";

import styles from "./Chart.module.css";

const Chart = ({ data, state }) => {
  // if (data) {
  //   data.reverse();
  //   console.log("reversed data", data);
  //   console.log("The type of data is", typeof data);
  // }

  console.log("data from chart.js", data);

  // const nivoLineChart = data ? (
  //   <ResponsiveLine
  //     data={data}
  //     margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
  //     xScale={{ type: "point" }}
  //     yScale={{ type: "linear", min: "auto", max: "auto", stacked: true, reverse: false }}
  //     yFormat=" >-.2f"
  //     axisTop={null}
  //     axisRight={null}
  //     axisBottom={{
  //       orient: "bottom",
  //       tickSize: 5,
  //       tickPadding: 5,
  //       tickRotation: 0,
  //       legend: "transportation",
  //       legendOffset: 36,
  //       legendPosition: "middle",
  //     }}
  //     axisLeft={{
  //       orient: "left",
  //       tickSize: 5,
  //       tickPadding: 5,
  //       tickRotation: 0,
  //       legend: "count",
  //       legendOffset: -40,
  //       legendPosition: "middle",
  //     }}
  //     pointSize={10}
  //     pointColor={{ theme: "background" }}
  //     pointBorderWidth={2}
  //     pointBorderColor={{ from: "serieColor" }}
  //     pointLabelYOffset={-12}
  //     useMesh={true}
  //     legends={[
  //       {
  //         anchor: "bottom-right",
  //         direction: "column",
  //         justify: false,
  //         translateX: 100,
  //         translateY: 0,
  //         itemsSpacing: 0,
  //         itemDirection: "left-to-right",
  //         itemWidth: 80,
  //         itemHeight: 20,
  //         itemOpacity: 0.75,
  //         symbolSize: 12,
  //         symbolShape: "circle",
  //         symbolBorderColor: "rgba(0, 0, 0, .5)",
  //         effects: [
  //           {
  //             on: "hover",
  //             style: {
  //               itemBackground: "rgba(0, 0, 0, .03)",
  //               itemOpacity: 1,
  //             },
  //           },
  //         ],
  //       },
  //     ]}
  //   />
  // ) : null;

  const lineChart = data ? (
    <Line
      data={{
        labels: data.map(({ date }) => new Date(date).toLocaleDateString()),
        datasets: [
          {
            data: data.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "blue",
            pointRadius: 0,
            fill: true,
          },
          {
            data: data.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            pointRadius: 0,
            fill: true,
          },
          {
            data: data.map((data) => data.recovered),
            label: "Recovered",
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            pointRadius: 0,
            fill: true,
          },
        ],
      }}
      options={{
        title: { display: true, text: `Current state in ${state}` },
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
