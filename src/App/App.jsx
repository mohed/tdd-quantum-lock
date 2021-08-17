import { useState } from "react";
import Lock from "../Lock/Lock";
import Updater from "../KeyAgent/KeyAgent";
import "./App.css";

function App() {
  const [locked, setLocked] = useState(true);
  const [passCode, setPassCode] = useState([1, 2, 3, 4]);

  const handleUnlock = () => {
    setLocked(false);
  };

  const handleSetPassCode = (passCodeCandidate) => {
    if (passCodeCandidate !== null) {
      setPassCode(passCodeCandidate);
    }

    setLocked(true);
  };

  return (
    <div className="App">
      <header className="App-header" data-testid="header">
        {locked ? (
          <Lock unlockCallback={handleUnlock} passCode={passCode} />
        ) : (
          <Updater newPasscodeCallback={handleSetPassCode} />
        )}
      </header>
    </div>
  );
}

export default App;
