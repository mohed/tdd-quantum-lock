import { useState } from "react";
import Lock from "../Lock/Lock";
import Updater from "../Key/Key";
import "./App.css";

function App() {
  const [locked, setLocked] = useState(true);
  const [passCode, setPassCode] = useState([1, 2, 3, 4]);

  const handleUnlockCallback = () => {
    setLocked(false);
  };

  return (
    <div className="App">
      <header className="App-header" data-testid="header">
        {locked ? (
          <Lock unlockCallback={handleUnlockCallback} passCode={passCode} />
        ) : (
          <Updater />
        )}
      </header>
    </div>
  );
}

export default App;
