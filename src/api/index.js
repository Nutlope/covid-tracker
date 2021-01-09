import axios from "axios";

export const fetchDataTwo = async (state) => {
  let changeableUrl = "https://api.covidtracking.com/v1/us/daily.json";

  if (state) {
    changeableUrl = `https://api.covidtracking.com/v1/states/${state}/daily.json`;
  }

  try {
    const { data } = await axios.get(changeableUrl);
    console.log("data from API", data);
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

export const fetchUSData = async () => {
  try {
    const { data } = await axios.get("https://api.covidtracking.com/v1/us/daily.json");

    return data.map(
      ({
        positive,
        hospitalizedCurrently,
        death,
        dateChecked: date,
        positiveIncrease,
        deathIncrease,
        hospitalizedIncrease,
      }) => ({
        confirmed: positive,
        hospitalized: hospitalizedCurrently,
        deaths: death,
        positiveIncrease,
        hospitalizedIncrease,
        deathIncrease,
        date,
      })
    );
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
