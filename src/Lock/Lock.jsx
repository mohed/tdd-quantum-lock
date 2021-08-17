import logo from "../logo.svg";
import Input from "../Input/Input";
import { arraysEqual } from "../Helpers/ArrayHelper";

const Lock = (props) => {
  const { passCode, unlockCallback } = props;

  const tryUnlock = (inputHistory) => {
    if (arraysEqual(passCode, inputHistory)) {
      unlockCallback();
    }
  };

  return (
    <div data-testid="lock">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 data-testid="passcode-label">Enter passcode</h2>
      <Input callBack={tryUnlock} />
    </div>
  );
};

export default Lock;
