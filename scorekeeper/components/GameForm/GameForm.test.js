import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);
  const form = screen.getByRole("form");
  expect(form).toHaveAccessibleName("Create a new game");
});

test("submits the correct form data when every field is filled out", async () => {
  const user = userEvent.setup();
  const onCreateGame = jest.fn();
  render(<GameForm onCreateGame={onCreateGame} />);
  const nameOfGame = screen.getByLabelText("Name of game");
  const playerNames = screen.getByLabelText("Player names, separated by comma");
  const button = screen.getByRole("button");
  await user.type(nameOfGame, "Dodelido");
  await user.type(playerNames, "John Doe, Jane Doe");
  await user.click(button);
  expect(onCreateGame).toHaveBeenCalledTimes(1);
  expect(onCreateGame).toHaveBeenCalledWith({
    nameOfGame: "Dodelido",
    playerNames: ["John Doe", "Jane Doe"],
  });
});

test("does not submit form if one input field is left empty", async () => {
  const user = userEvent.setup();
  const onCreateGame = jest.fn();
  render(<GameForm onCreateGame={onCreateGame} />);
  const nameOfGame = screen.getByLabelText("Name of game");
  const button = screen.getByRole("button");
  await user.type(nameOfGame, "Dodelido");
  await user.click(button);
  expect(onCreateGame).not.toHaveBeenCalled();
  // expect(onCreateGame).toHaveBeenCalledTimes(0);
});
