import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

function Chart() {
  const [dailyData, setDailyData] = useState();

  async function getDailyData() {
    const fetchedDailyData = await fetchDailyData();
    setDailyData(fetchedDailyData);
  }

  useEffect(() => {
    getDailyData();
  }, []);

  const LineChart = (
    (
      <Line
        data={{
          labels: "",
          datasets: [{}, {}],
        }}
      ></Line>
    )
  ) => {};

  return (
    <div>
      <h1>Chart</h1>
    </div>
  );
}

export default Chart;
