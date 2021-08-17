import React from "react";
import { useState } from "react";
import "./Input.css";

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
    <div className="input-container">
      <input
        data-testid="input"
        className="digit-input"
        type="number"
        autoFocus
        readOnly
        maxLength="1"
        value={input}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
      />
      <label className="digit-history" data-testid="numbers">
        {inputHistory}
      </label>
    </div>
  );
};

export default Input;
