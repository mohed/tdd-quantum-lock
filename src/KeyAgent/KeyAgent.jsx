import { useState } from "react";
import Input from "../Input/Input";
import { arraysFollow, arraysEqual } from "../Helpers/ArrayHelper";

const KeyAgent = (props) => {
  const { newPasscodeCallback } = props;
  const programmingCode = [9, 9, 9, 9];
  const [ticker, setTicker] = useState(0);
  const [error, setError] = useState(false);

  const handleInput = (inputHistory) => {
    setTicker(ticker + 1);
    if (ticker < 4) listen(inputHistory);
    else if (ticker === 7) program(inputHistory);
  };

  const listen = (inputHistory) => {
    if (!arraysFollow(inputHistory, programmingCode)) {
      setError(true);
      newPasscodeCallback(null);
    }
  };

  const program = (inputHistory) => {
    if (arraysEqual(inputHistory, programmingCode)) {
      setError(true);
      newPasscodeCallback(null);
      return;
    }

    newPasscodeCallback(inputHistory);
  };

  return (
    <div data-testid="key-agent">
      {error ? <h2 data-testid="error">Error</h2> : null}
      {ticker === 0 ? <h2 data-testid="unlocked">Unlocked</h2> : null}
      {ticker >= 1 && ticker < 4 ? (
        <h2 data-testid="listening">Listening ...</h2>
      ) : null}
      {ticker >= 4 && ticker <= 7 ? (
        <h2 data-testid="programming">Provide a new passcode</h2>
      ) : null}
      <Input callBack={handleInput} />
    </div>
  );
};

export default KeyAgent;
