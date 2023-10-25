"use client";
import { useState } from "react";
import { AppContext } from "./AppContext";

function AppProvider({ children }) {
  const [result, setResult] = useState("0");

  const resetResult = () => {
    setResult("0");
  };

  const addNumber = (number) => {
    if (result == "0") setResult(number);
    else setResult(result + number);
  };

  const addOperator = (operator) => {
    setResult(`${result} ${operator} `);
  };

  const addDecimal = (decimal) => {
    const array = result.split(" ");
    const lastElement = array[array.length - 1];
    if (!lastElement.includes(decimal)) {
      setResult(result + decimal);
    }
  };

  const addResult = () => {
    setResult(eval(result));
  };

  const handleButtonClick = (value) => {
    if (value === "AC") resetResult();
    else if (value === "+" || value === "-" || value === "*" || value === "/")
      addOperator(value);
    else if (value === ".") addDecimal(value);
    else if (value === "=") addResult();
    else addNumber(value);
  };

  return (
    <AppContext.Provider value={{ result, handleButtonClick }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
