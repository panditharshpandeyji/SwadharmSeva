import React, { createContext, useState, useContext } from "react";
const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [textId, setTextId] = useState(1);

  return (
    <MyContext.Provider value={{ textId, setTextId }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
