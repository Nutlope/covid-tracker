import Chart from "./components/Chart/Chart";
import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from "./App.module.css";
import { fetchData } from "./api";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();

  async function getData() {
    const fetchedData = await fetchData();
    setData(fetchedData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <Cards data={data} />
      {/* <CountryPicker />
      <Chart /> */}
    </div>
  );
}

export default App;
