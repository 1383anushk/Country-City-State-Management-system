import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState(() => {
    const savedData = localStorage.getItem("countries");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("countries", JSON.stringify(countries));
  }, [countries]);

  return (
    <AppContext.Provider value={{ countries, setCountries }}>
      {children}
    </AppContext.Provider>
  );
};
