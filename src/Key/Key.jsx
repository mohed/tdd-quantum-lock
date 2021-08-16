import { useState } from "react";

const Updater = (props) => {
  const [locked, setLocked] = useState(true);
  const [passCode, setPassCode] = useState([]);

  return (
    <div data-testid="key">
      <h2> Unlocked </h2>
    </div>
  );
};

export default Updater;
