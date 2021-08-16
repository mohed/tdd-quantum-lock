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

  describe("initial locked state", () => {
    test("should initialize with a locked component", () => {
      const lockComponent = screen.getByTestId("lock");
      expect(lockComponent).toBeInTheDocument();
    });

    test("should change to unlocked state on default passcode", () => {
      const inputComponent = screen.getByTestId("input");
      fireEvent.keyDown(inputComponent, { key: "1" });
      fireEvent.keyDown(inputComponent, { key: "2" });
      fireEvent.keyDown(inputComponent, { key: "3" });
      fireEvent.keyDown(inputComponent, { key: "4" });

      expect(screen.getByTestId("key")).toBeInTheDocument();
    });
  });
});
