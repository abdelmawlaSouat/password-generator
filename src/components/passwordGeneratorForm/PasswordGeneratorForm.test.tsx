import { AppState, PasswordStrengthStatus } from "@/types";
import { render, screen } from "@testing-library/react";
import {
  PasswordGeneratorForm,
  capitalization,
  getPasswordStrengthStatus,
} from "./PasswordGeneratorForm";
import userEvent from "@testing-library/user-event";
import { passwordStrength } from "check-password-strength";

jest.mock("check-password-strength", () => ({
  passwordStrength: jest.fn(),
}));

const mockValues: AppState = {
  characterLength: 10,
  includeUppercaseLetters: true,
  includeLowercaseLetters: true,
  includeNumbers: false,
  includeSymbols: false,
  password: "",
};

describe("PasswordGeneratorForm", () => {
  describe("capitalization", () => {
    test.each`
      includeUppercaseLetters | includeLowercaseLetters | expected
      ${true}                 | ${false}                | ${"uppercase"}
      ${false}                | ${true}                 | ${"lowercase"}
      ${false}                | ${false}                | ${undefined}
      ${true}                 | ${true}                 | ${undefined}
    `(
      "should return '$expected' if includeUppercaseLetters = '$includeUppercaseLetters'  and includeLowercaseLetters = '$includeLowercaseLetters'",
      ({ includeUppercaseLetters, includeLowercaseLetters, expected }) => {
        const values: AppState = {
          ...mockValues,
          includeUppercaseLetters,
          includeLowercaseLetters,
        };

        expect(capitalization(values)).toBe(expected);
      }
    );
  });

  describe("getPasswordStrengthStatus", () => {
    test.each`
      value         | expected
      ${"Too weak"} | ${PasswordStrengthStatus.TOO_WEAK}
      ${"Weak"}     | ${PasswordStrengthStatus.WEAK}
      ${"Medium"}   | ${PasswordStrengthStatus.MEDIUM}
      ${"Strong"}   | ${PasswordStrengthStatus.STRONG}
    `(
      "should return '$expected' if the password strength is '$value'",
      ({ value, expected }) => {
        (passwordStrength as jest.Mock).mockReturnValue({
          value,
        });

        expect(getPasswordStrengthStatus("123")).toEqual(expected);
      }
    );
  });

  test("should display all the components (title, checkboxes, cta)", () => {
    const setValuesMock = jest.fn();

    render(
      <PasswordGeneratorForm values={mockValues} setValues={setValuesMock} />
    );

    expect(screen.getByText("Character Length")).toBeInTheDocument();

    expect(
      screen.getByRole("slider", {
        name: "slider-thumb",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("checkbox", { name: "Include Uppercase Letters" })
    ).toHaveAttribute("value", "on");

    expect(
      screen.getByRole("checkbox", { name: "Include Lowercase Letters" })
    ).toHaveAttribute("value", "on");

    expect(
      screen.getByRole("checkbox", { name: "Include Numbers" })
    ).toHaveAttribute("value", "on");

    expect(
      screen.getByRole("checkbox", { name: "Include Symbols" })
    ).toHaveAttribute("value", "on");

    expect(
      screen.getByRole("button", { name: "Generate" })
    ).toBeInTheDocument();
  });

  test("should call the event handler when the user clicks on the cta", async () => {
    const user = userEvent.setup();

    const setValuesMock = jest.fn();

    render(
      <PasswordGeneratorForm values={mockValues} setValues={setValuesMock} />
    );

    await user.click(screen.getByRole("button", { name: "Generate" }));

    expect(setValuesMock).toHaveBeenCalledTimes(1);
  });

  test.each`
    inputName                      | key                          | value
    ${"Include Uppercase Letters"} | ${"includeUppercaseLetters"} | ${false}
    ${"Include Numbers"}           | ${"includeNumbers"}          | ${true}
    ${"Include Lowercase Letters"} | ${"includeLowercaseLetters"} | ${false}
    ${"Include Symbols"}           | ${"includeSymbols"}          | ${true}
  `(
    "should call the event handler when the user clicks on the '$inputName' checkbox",
    async ({ inputName, key, value }) => {
      const user = userEvent.setup();

      const setValuesMock = jest.fn();

      render(
        <PasswordGeneratorForm values={mockValues} setValues={setValuesMock} />
      );

      await user.click(screen.getByRole("checkbox", { name: inputName }));

      expect(setValuesMock).toHaveBeenCalledWith({
        ...mockValues,
        [key]: value,
      });
    }
  );
});
