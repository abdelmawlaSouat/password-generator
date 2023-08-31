import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextField } from "./TextField";

describe("TextField", () => {
  test("should display the default field value", () => {
    render(<TextField />);

    expect(screen.getByText("P4$5W0rD!")).toBeInTheDocument();

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("should display the value and call the event handler function when the users clicks on the icon", async () => {
    const user = userEvent.setup();

    render(<TextField value="my-password" />);

    expect(screen.getByText("my-password")).toBeInTheDocument();

    await user.click(screen.getByRole("button"));

    expect(screen.getByText("COPIED")).toBeInTheDocument();
  });
});
