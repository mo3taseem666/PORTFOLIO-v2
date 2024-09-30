import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  /////////////////
  const [path, setPath] = useState('WELCOME');
  /////////////////

  return <MyContext.Provider value={{ path, setPath }}>{children}</MyContext.Provider>;
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useMyProvider = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useMyProvider must be used within a MyProvider");
  }

  return context;
};

export { MyContext };