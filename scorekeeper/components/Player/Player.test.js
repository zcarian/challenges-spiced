import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
    render(<Player name="Marcin" score={0} />);
    const player = screen.getByText("Marcin");
    const score = screen.getByText("0");
    const buttons = screen.getAllByRole("button");
    expect(player).toBeInTheDocument();
    expect(score).toBeInTheDocument();
    expect(buttons).toHaveLength(2); 
});

test("calls callbacks when increasing or decreasing score", async () => {
    const user = userEvent.setup();
    const onIncrease = jest.fn();
    const onDecrease = jest.fn();
    render(<Player name="Marcin" score={0} onIncreasePlayerScore={onIncrease} onDecreasePlayerScore={onDecrease} />);
    const increaseButton = screen.getByRole("button", {name: "Increase Score"})
    const decreaseButton = screen.getByRole("button", {name: "Decrease Score"})
    await user.click(increaseButton);
    expect(onIncrease).toHaveBeenCalledTimes(1);
    await user.click(decreaseButton);
    expect(onDecrease).toHaveBeenCalledTimes(1);
});
