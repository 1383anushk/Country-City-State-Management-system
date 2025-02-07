import React, { useContext } from "react";
import CountryList from "./components/CountryList";
import { AppContext } from "./context/AppContext";
import "./styles/styles.css";

const App = () => {
  
  const { countries, setCountries } = useContext(AppContext);

  const addCountry = () => {
    const countryName = prompt("Enter country name:");
    if (countryName) {
      setCountries([...countries, { name: countryName, states: [] }]);
    }
  };

  return (
    <div className="container">
      <h1>Country, State, and City Management</h1>
      <button onClick={addCountry}>Add Country</button>
      <CountryList />
    </div>
  );
};

export default App;
