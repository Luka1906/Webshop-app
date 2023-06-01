import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isFocused;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsFocused(true);
  };


  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  
  };
};

export default useInput;
