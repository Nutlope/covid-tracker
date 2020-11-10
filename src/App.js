import React, { useEffect, useState } from "react";

import { Cards, StatePicker, Chart, Footer } from "./components";
import { fetchDataTwo, fetchUSData } from "./api/";
import styles from "./App.module.css";
import image from "./images/image.png";

const App = () => {
  const [data, setData] = useState();
  const [state, setState] = useState("");
  const [usData, setUsData] = useState("");

  async function getRealData() {
    const fetchedData = await fetchDataTwo();
    setData(fetchedData);
  }
  async function getTotalData() {
    const fetchedUSData = await fetchUSData();
    setUsData(fetchedUSData);
  }

  useEffect(() => {
    getRealData();
    getTotalData();
  }, []);

  const handleStateChange = async (state) => {
    const data = await fetchDataTwo(state);
    setData(data);
    setState(state);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={usData} />
      <StatePicker handleStateChange={handleStateChange} />
      <Chart data={data} state={state} />
      <Footer />
    </div>
  );
};

export default App;
