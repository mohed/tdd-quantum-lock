import { fireEvent } from "@testing-library/dom";
export const enterCorrectPasscode = (inputComponent) => {
  fireEvent.keyDown(inputComponent, { key: "1" });
  fireEvent.keyDown(inputComponent, { key: "2" });
  fireEvent.keyDown(inputComponent, { key: "3" });
  fireEvent.keyDown(inputComponent, { key: "4" });
};

export const enterCorrectProgrammingCode = (inputComponent) => {
  fireEvent.keyDown(inputComponent, { key: "9" });
  fireEvent.keyDown(inputComponent, { key: "9" });
  fireEvent.keyDown(inputComponent, { key: "9" });
  fireEvent.keyDown(inputComponent, { key: "9" });
};
export const enterNewPasscode = (inputComponent) => {
  fireEvent.keyDown(inputComponent, { key: "5" });
  fireEvent.keyDown(inputComponent, { key: "6" });
  fireEvent.keyDown(inputComponent, { key: "7" });
  fireEvent.keyDown(inputComponent, { key: "8" });
};
