import { render, screen, fireEvent } from "@testing-library/react";
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
      fireEvent.keyDown(inputComponent, { key: "1" });
      fireEvent.keyDown(inputComponent, { key: "2" });
      fireEvent.keyDown(inputComponent, { key: "3" });
      fireEvent.keyDown(inputComponent, { key: "4" });

      expect(screen.getByTestId("key-agent")).toBeInTheDocument();
    });

    test("shoud set new passcode on valid input", () => {
      fireEvent.keyDown(inputComponent, { key: "1" });
      fireEvent.keyDown(inputComponent, { key: "2" });
      fireEvent.keyDown(inputComponent, { key: "3" });
      fireEvent.keyDown(inputComponent, { key: "4" });

      inputComponent = screen.getByTestId("input");
      fireEvent.keyDown(inputComponent, { key: "9" });
      fireEvent.keyDown(inputComponent, { key: "9" });
      fireEvent.keyDown(inputComponent, { key: "9" });
      fireEvent.keyDown(inputComponent, { key: "9" });
      fireEvent.keyDown(inputComponent, { key: "5" });
      fireEvent.keyDown(inputComponent, { key: "6" });
      fireEvent.keyDown(inputComponent, { key: "7" });
      fireEvent.keyDown(inputComponent, { key: "8" });

      expect(screen.getByTestId("lock")).toBeInTheDocument();
    });
  });
});
