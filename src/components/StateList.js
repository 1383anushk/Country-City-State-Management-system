import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import CityList from "./CityList";

const StateList = ({ countryIndex }) => {
  const { countries, setCountries } = useContext(AppContext);

  const addState = () => {
    const stateName = prompt("Enter state name:");
    if (stateName) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.push({
        name: stateName,
        cities: [],
      });
      setCountries(updatedCountries);
    }
  };

  const editState = (stateIndex) => {
    const newName = prompt("Enter new state name:");
    if (newName) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].name = newName;
      setCountries(updatedCountries);
    }
  };

  const deleteState = (stateIndex) => {
    if (window.confirm("Are you sure you want to delete this state?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.splice(stateIndex, 1);
      setCountries(updatedCountries);
    }
  };

  return (
    <div>
      <h4>States in {countries[countryIndex].name}</h4>
      <button onClick={addState}>Add State</button>
      {countries[countryIndex].states.map((state, stateIndex) => (
        <div key={stateIndex} className="card">
          <p>{state.name}</p>
          <button onClick={() => editState(stateIndex)}>Edit</button>
          <button onClick={() => deleteState(stateIndex)}>Delete</button>
          <CityList countryIndex={countryIndex} stateIndex={stateIndex} />
        </div>
      ))}
    </div>
  );
};

export default StateList;
