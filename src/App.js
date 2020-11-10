import React, { useEffect, useState } from "react";

import { Cards, StatePicker, Chart, Footer } from "./components";
import { fetchDataTwo } from "./api/";
import styles from "./App.module.css";
import image from "./images/image.png";

const App = () => {
  const [data, setData] = useState();
  const [state, setState] = useState("");

  async function getRealData() {
    const fetchedData = await fetchDataTwo();
    setData(fetchedData);
  }

  useEffect(() => {
    getRealData();
  }, []);

  const handleStateChange = async (state) => {
    const data = await fetchDataTwo(state);
    setData(data);
    setState(state);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <StatePicker handleStateChange={handleStateChange} />
      <Chart data={data} state={state} />
      <Footer />
    </div>
  );
};

export default App;
