import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchDataTwo = async (state) => {
  let changeableUrl = "https://api.covidtracking.com/v1/states/al/daily.json";

  if (state) {
    changeableUrl = `https://api.covidtracking.com/v1/states/${state}/daily.json`;
  }

  try {
    const { data } = await axios.get(changeableUrl);

    return data.map(({ positive, recovered, death, dateChecked: date }) => ({
      confirmed: positive,
      recovered,
      deaths: death,
      date,
    }));
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get("https://api.covidtracking.com/v1/us/daily.json");

    return data.map(({ positive, recovered, death, dateChecked: date }) => ({
      confirmed: positive,
      recovered,
      deaths: death,
      date,
    }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    console.log(countries);
    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};

export const fetchStates = async () => {
  try {
    const states = await axios.get("https://api.covidtracking.com/v1/states/info.json");

    // Array of states
    return states.data.map((state) => state.state);
  } catch (error) {
    return error;
  }
};
