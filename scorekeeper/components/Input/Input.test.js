import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
    
    render(
        <Input labelText="Name" name="name" placeholder="placeholder"   />
    )
    const input = screen.getByLabelText("Name");
    expect(input).toHaveAttribute("name", "name");
    expect(input).toHaveAttribute("placeholder", "placeholder");
});


test("calls callback on every user input", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
        <Input onChange={handleChange} labelText="Name" name="name"  />
    )
    const input = screen.getByLabelText("Name");
    await user.type(input, "Hello");
    expect(handleChange).toHaveBeenCalledTimes(5);
});
