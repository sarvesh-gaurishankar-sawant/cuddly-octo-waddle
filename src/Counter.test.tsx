import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

function setup() {
  const user = userEvent.setup();
  render(<Counter />);
  return {
    user,
    value: () => screen.getByRole("status"),
    increment: screen.getByRole("button", { name: "Increment" }),
    decrement: screen.getByRole("button", { name: "Decrement" }),
    reset: screen.getByRole("button", { name: "Reset" }),
  };
}

describe("Counter", () => {
  it("starts at 0 with reset disabled", () => {
    const { value, reset } = setup();
    expect(value()).toHaveTextContent("0");
    expect(reset).toBeDisabled();
  });

  it("increments and decrements", async () => {
    const { user, value, increment, decrement } = setup();
    await user.click(increment);
    await user.click(increment);
    expect(value()).toHaveTextContent("2");
    await user.click(decrement);
    expect(value()).toHaveTextContent("1");
  });

  it("resets to 0", async () => {
    const { user, value, increment, reset } = setup();
    await user.click(increment);
    await user.click(reset);
    expect(value()).toHaveTextContent("0");
    expect(reset).toBeDisabled();
  });
});
