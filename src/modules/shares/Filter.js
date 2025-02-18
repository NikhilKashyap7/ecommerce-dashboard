import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [df, setDf] = useState(""); 

  return (
    <FilterContext.Provider value={{ df, setDf }}>
      {children}
    </FilterContext.Provider>
  );
};
