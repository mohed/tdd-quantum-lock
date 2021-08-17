import { render, screen, fireEvent } from "@testing-library/react";
import {
  enterNewPasscode,
  enterCorrectPasscode,
  enterCorrectProgrammingCode,
} from "../Helpers/TestHelper";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("renders enter passcode header", () => {
    const linkElement = screen.getByTestId("header");
    expect(linkElement).toBeInTheDocument();
  });

  test("should initialize with a locked component", () => {
    expect(screen.getByTestId("lock")).toBeInTheDocument();
  });

  describe("state change", () => {
    var inputComponent;
    beforeEach(() => {
      inputComponent = screen.getByTestId("input");
    });

    test("should change to unlocked state on default passcode", () => {
      enterCorrectPasscode(inputComponent);

      expect(screen.getByTestId("key-agent")).toBeInTheDocument();
    });

    test("shoud set new passcode on valid input", () => {
      enterCorrectPasscode(inputComponent);

      inputComponent = screen.getByTestId("input");
      enterCorrectProgrammingCode(inputComponent);
      enterNewPasscode(inputComponent);

      expect(screen.getByTestId("lock")).toBeInTheDocument();
    });

    test("should exit the programming state on invalid programming code", () => {
      enterCorrectPasscode(inputComponent);
      inputComponent = screen.getByTestId("input");
      fireEvent.keyDown(inputComponent, { key: "1" });

      expect(screen.getByTestId("lock")).toBeInTheDocument();
    });

    test("should dissregard new passcode when equal to proggramming code", () => {
      enterCorrectPasscode(inputComponent);

      inputComponent = screen.getByTestId("input");
      enterCorrectProgrammingCode(inputComponent);
      enterCorrectProgrammingCode(inputComponent);

      inputComponent = screen.getByTestId("input");
      enterCorrectProgrammingCode(inputComponent);

      expect(screen.getByTestId("lock")).toBeInTheDocument();
    });

    test("should unlock on newly provided valid passcode", () => {
      enterCorrectPasscode(inputComponent);

      inputComponent = screen.getByTestId("input");
      enterCorrectProgrammingCode(inputComponent);
      enterNewPasscode(inputComponent);

      inputComponent = screen.getByTestId("input");
      enterNewPasscode(inputComponent);

      expect(screen.getByTestId("unlocked")).toBeInTheDocument();
    });
  });
});
