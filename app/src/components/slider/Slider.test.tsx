import { render, screen } from "@testing-library/react";
import { Slider } from "./Slider";

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));

describe("Slider", () => {
  test("should render the slider with the right elements (label, value & input)", () => {
    render(
      <Slider
        value={15}
        id="characters-length"
        label="Character Length"
        min={1}
        max={25}
        onChange={() => {}}
      />
    );

    const slider = screen.getByRole("slider", {
      name: "slider-characters-length",
    });

    expect(slider).toHaveAttribute("aria-valuemin", "1");

    expect(slider).toHaveAttribute("aria-valuemax", "25");

    expect(slider).toHaveAttribute("aria-valuenow", "15");

    expect(screen.getByText("Character Length")).toBeInTheDocument();

    expect(screen.getByText("15")).toBeInTheDocument();
  });
});
