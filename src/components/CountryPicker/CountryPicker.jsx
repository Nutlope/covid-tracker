import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries, fetchStates } from "../../api";

import styles from "./CountryPicker.module.css";

const Countries = ({ handleStateChange }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
    const secondFetchAPI = async () => {
      setStates(await fetchStates());
    };

    secondFetchAPI();
    fetchAPI();
  }, []);
  console.log("States from countrypicker", states);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleStateChange(e.target.value)}>
        <option value="">United States</option>
        {states.map((state, i) => (
          <option key={i} value={state}>
            {state}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
