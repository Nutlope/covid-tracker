import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchStates } from "../../api";

import styles from "./CountryPicker.module.css";

const Countries = ({ handleStateChange }) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    const secondFetchAPI = async () => {
      setStates(await fetchStates());
    };

    secondFetchAPI();
  }, []);

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
