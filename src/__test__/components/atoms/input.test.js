import Input from "@/components/atoms/Input";
import { fireEvent, getByPlaceholderText } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Input", () => {
  it("render input with correct placeholder", () => {
    const { getByPlaceholderText } = render(<Input placeholder="Username"></Input>);
    const input = getByPlaceholderText("Username");
    expect(input.placeholder).toBe("Username");
  });
  it("function input with onChange", () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(<Input placeholder="Username" onChange={onChange}></Input>);
    const input = getByPlaceholderText("Username");
    fireEvent.change(input, { target: { value: "Nanang" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
