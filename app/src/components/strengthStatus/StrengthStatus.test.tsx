import { render, screen } from "@testing-library/react";
import { StrengthStatus } from "./StrengthStatus";
import { PasswordStrengthStatus } from "@/types";

describe("StrengthStatus", () => {
  test.each`
    status                             | expectedLabel
    ${PasswordStrengthStatus.TOO_WEAK} | ${"Too weak !"}
    ${PasswordStrengthStatus.WEAK}     | ${"Weak"}
    ${PasswordStrengthStatus.MEDIUM}   | ${"Medium"}
    ${PasswordStrengthStatus.STRONG}   | ${"Strong"}
  `(
    "should display the right strength status : '$expectedLabel'",
    ({ status, expectedLabel }) => {
      render(<StrengthStatus status={status} />);

      expect(screen.getByText(expectedLabel)).toBeInTheDocument();
    }
  );
});
