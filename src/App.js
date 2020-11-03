// import Chart from "./components/Chart/Chart";
// import Cards from "./components/Cards/Cards";
// import CountryPicker from "./components/CountryPicker/CountryPicker";
// import styles from "./App.module.css";
// import { fetchData } from "./api";
// import { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState();

//   async function getData() {
//     const fetchedData = await fetchData();
//     setData(fetchedData);
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div className={styles.container}>
//       <Cards data={data} />
//       {/* <CountryPicker />
//       <Chart /> */}
//     </div>
//   );
// }

// export default App;

import React from "react";

import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api/";
import styles from "./App.module.css";

// import image from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        {/* <img className={styles.image} src={image} alt="COVID-19" /> */}
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
