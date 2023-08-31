import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  test("should render the button with the text", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(<Button onClick={onClick}>Generate Password</Button>);

    expect(
      screen.getByRole("button", { name: "Generate Password" })
    ).toBeInTheDocument();

    expect(screen.getByText("Generate Password")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Generate Password" }));
  });
});
