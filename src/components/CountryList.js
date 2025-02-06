import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import StateList from "./StateList";

const CountryList = () => {
  const { countries, setCountries } = useContext(AppContext);

  const editCountry = (index) => {
    const newName = prompt("Enter new country name:");
    if (newName) {
      const updatedCountries = [...countries];
      updatedCountries[index].name = newName;
      setCountries(updatedCountries);
    }
  };

  const deleteCountry = (index) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      const updatedCountries = [...countries];
      updatedCountries.splice(index, 1);
      setCountries(updatedCountries);
    }
  };

  return (
    <div>
      <h2>Countries</h2>
      {countries.length === 0 && <p>No countries added yet.</p>}
      {countries.map((country, index) => (
        <div key={index} className="card">
          <h3>{country.name}</h3>
          <button onClick={() => editCountry(index)}>Edit</button>
          <button onClick={() => deleteCountry(index)}>Delete</button>
          <StateList countryIndex={index} />
        </div>
      ))}
    </div>
  );
};

export default CountryList;
