import { render, fireEvent } from "@testing-library/react";
import KeyAgent from "./KeyAgent";

describe("key agent", () => {
  var getByTestId;
  var inputComponent;

  beforeEach(() => {
    ({ getByTestId } = render(
      <KeyAgent
        newPasscodeCallback={(o) => {
          console.log(o);
        }}
      />
    ));
    inputComponent = getByTestId("input");
  });

  test("should initialize in unlocked state", () => {
    var header = getByTestId("unlocked");
    expect(header).toBeDefined();
  });

  describe("listening state", () => {
    test("should be in listening state on first valid input", () => {
      fireEvent.keyDown(inputComponent, { key: "9" });
      var header = getByTestId("listening");
      expect(header).toBeDefined();
    });

    test("should be in listening state on 3 valid inputs", () => {
      fireEvent.keyDown(inputComponent, { key: "9" });
      fireEvent.keyDown(inputComponent, { key: "9" });
      fireEvent.keyDown(inputComponent, { key: "9" });
      var header = getByTestId("listening");
      expect(header).toBeDefined();
    });

    test("should fail on invalid first input", () => {
      fireEvent.keyDown(inputComponent, { key: "1" });
      var header = getByTestId("error");
      expect(header).toBeDefined();
    });

    test("should fail on any invalid input", () => {
      fireEvent.keyDown(inputComponent, { key: "9" });
      fireEvent.keyDown(inputComponent, { key: "9" });
      fireEvent.keyDown(inputComponent, { key: "9" });
      fireEvent.keyDown(inputComponent, { key: "1" });
      var header = getByTestId("error");
      expect(header).toBeDefined();
    });
  });

  describe("programming state", () => {
    test("should be in programming state on fully provided programming code", () => {
      fireEvent.keyDown(inputComponent, { key: "9" });
      fireEvent.keyDown(inputComponent, { key: "9" });
      fireEvent.keyDown(inputComponent, { key: "9" });
      fireEvent.keyDown(inputComponent, { key: "9" });
      var header = getByTestId("programming");
      expect(header).toBeDefined();
    });

    test("should fail if new passcode is the same as the programming code", () => {
      fireEvent.keyDown(inputComponent, { key: "9" });
      fireEvent.keyDown(inputComponent, { key: "9" });
      fireEvent.keyDown(inputComponent, { key: "9" });
      fireEvent.keyDown(inputComponent, { key: "9" });
      fireEvent.keyDown(inputComponent, { key: "9" });
      fireEvent.keyDown(inputComponent, { key: "9" });
      fireEvent.keyDown(inputComponent, { key: "9" });
      fireEvent.keyDown(inputComponent, { key: "9" });

      var header = getByTestId("error");
      expect(header).toBeDefined();
    });
  });
});
