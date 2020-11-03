import React, { useEffect, useState } from "react";

import { Cards, CountryPicker, Chart, Footer } from "./components";
import { fetchData } from "./api/";
import styles from "./App.module.css";
import image from "./images/image.png";

const App = () => {
  const [data, setData] = useState();
  const [country, setCountry] = useState("");

  async function getData() {
    const fetchedData = await fetchData();
    setData(fetchedData);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setData(data);
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
      <Footer />
    </div>
  );
};

export default App;
