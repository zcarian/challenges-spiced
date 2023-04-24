import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
    const onChange = jest.fn();

    render(
        <Input   
        id="name"
        name="name"
        placeholder="placeholder"
        type="text"
        value={4}
        required={true}/>
    )
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("name", "name");
    expect(input).toHaveAttribute("id", "name");
    expect(input).toHaveAttribute("placeholder", "placeholder");
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("value", "4");
    expect(input).toHaveAttribute("required");

});


test("calls callback on every user input", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
        <Input onChange={handleChange} />
    )
    const input = screen.getByRole("textbox");
    await user.type(input, "Hello");
    expect(handleChange).toHaveBeenCalledTimes(5);
});
