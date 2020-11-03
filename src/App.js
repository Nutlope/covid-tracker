import React, { useEffect, useState } from "react";

import { Cards, CountryPicker, Chart, Footer } from "./components";
import { fetchData } from "./api/";
import styles from "./App.module.css";

const App = () => {
  const [data, setData] = useState();
  const [country, setCountry] = useState("");

  async function getData() {
    const fetchedData = await fetchData();
    setData(fetchedData);
  }

  useEffect(() => {
    getData();

    console.log("Data from app.js", data);
  }, []);

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setData(data);
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
      <Footer />
    </div>
  );
};

export default App;
