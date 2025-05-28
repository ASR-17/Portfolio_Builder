// context/PortfolioContext.jsx
import React, { createContext, useState } from "react";

export const PortfolioContext = createContext();

export const PortfolioContextProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState({});
  const [selectedTheme, setSelectedTheme] = useState(null);

  return (
    <PortfolioContext.Provider
      value={{ portfolioData, setPortfolioData, selectedTheme, setSelectedTheme }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};