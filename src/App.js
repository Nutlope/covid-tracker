import React, { useEffect, useState } from "react";

import { Cards, CountryPicker, Chart, Footer } from "./components";
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
    // console.log("state data from App.js", data);
    setState(state);
  };

  console.log("data from app.js", data);
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleStateChange={handleStateChange} />
      <Chart data={data} state={state} />
      <Footer />
    </div>
  );
};

export default App;
