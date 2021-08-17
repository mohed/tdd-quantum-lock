import { render, fireEvent } from "@testing-library/react";
import Lock from "./Lock";

describe("lock", () => {
  var getByTestId;

  beforeEach(() => {
    ({ getByTestId } = render(
      <Lock unlockCallback={() => {}} passCode={[1, 2, 3, 4]} />
    ));
  });

  describe("input", () => {
    var inputComponent;
    beforeEach(() => {
      inputComponent = getByTestId("input");
    });

    test("should initialize with an empty value ", () => {
      const inputComponent = getByTestId("input");

      expect(inputComponent.value).toBe("");
    });

    test("should accept input", () => {
      fireEvent.keyDown(inputComponent, {
        key: "1",
      });

      expect(inputComponent.value).toBe("1");
    });

    test("should only store and display one digit", () => {
      fireEvent.keyDown(inputComponent, { key: "1" });
      fireEvent.keyDown(inputComponent, { key: "2" });

      expect(inputComponent.value).toBe("2");
    });

    test("should only accept integers", () => {
      fireEvent.keyDown(inputComponent, { key: "1" });
      fireEvent.keyDown(inputComponent, { key: "A" });

      expect(inputComponent.value).toBe("1");
    });
  });

  describe("numbers", () => {
    var numbersLabel;

    beforeEach(() => {
      numbersLabel = getByTestId("numbers");
    });

    test("should initialize with an empty numbers label", () => {
      expect(numbersLabel.textContent).toBe("");
    });

    describe("numbers with input", () => {
      var inputComponent;

      beforeEach(() => {
        inputComponent = getByTestId("input");
      });

      test("should add new inputed digits to end of numbers  ", () => {
        fireEvent.keyDown(inputComponent, { key: "1" });
        fireEvent.keyDown(inputComponent, { key: "2" });

        expect(numbersLabel.textContent).toBe("12");
      });

      test("should only store the 4 latest inputs", () => {
        fireEvent.keyDown(inputComponent, { key: "1" });
        fireEvent.keyDown(inputComponent, { key: "9" });
        fireEvent.keyDown(inputComponent, { key: "3" });
        fireEvent.keyDown(inputComponent, { key: "7" });
        fireEvent.keyDown(inputComponent, { key: "5" });

        expect(numbersLabel.textContent).toBe("9375");
      });
    });
  });
});
