import { useState } from "react";
import logo from "../logo.svg";

const Lock = (props) => {
  const { passCode, unlockCallback } = props;

  const [input, setInput] = useState("");
  const [inputHistory] = useState([]);

  const handleKeyDown = (e) => {
    if (isNaN(e.key)) {
      return;
    }

    updateInputHistory(parseInt(e.key));
    setInput(e.key);
    tryUnlock();
  };

  const updateInputHistory = (integer) => {
    inputHistory.push(integer);
    if (inputHistory.length > 4) {
      inputHistory.shift();
    }
  };

  const tryUnlock = () => {
    if (arraysEqual(passCode, inputHistory)) {
      unlockCallback();
    }
  };

  // courtesy of enyo by way of stackoverflow
  const arraysEqual = (a, b) => {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  return (
    <div data-testid="lock">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 data-testid="passcode-label">Enter passcode</h2>
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
    </div>
  );
};

export default Lock;
