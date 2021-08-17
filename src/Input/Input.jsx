import React from "react";
import { useState } from "react";

const Input = (props) => {
  const { callBack } = props;

  const [input, setInput] = useState("");
  const [inputHistory] = useState([]);

  const handleKeyDown = (e) => {
    if (isNaN(e.key)) {
      return;
    }

    updateInputHistory(parseInt(e.key));
    setInput(e.key);
    callBack(inputHistory);
  };

  const updateInputHistory = (integer) => {
    inputHistory.push(integer);
    if (inputHistory.length > 4) {
      inputHistory.shift();
    }
  };

  return (
    <>
      <input
        data-testid="input"
        type="number"
        onChange={() => {}}
        value={input}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
      />
      <label data-testid="numbers">{inputHistory}</label>
    </>
  );
};

export default Input;
