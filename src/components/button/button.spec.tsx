import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./button";

describe("Button", () => {
  it("renders primary button by default", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("primary")
  });

  it("renders danger button when mode is set to danger", () => {
    render(<Button mode="danger">Danger Button</Button>);
    const buttonElement = screen.getByText("Danger Button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("danger")
  });

  it("renders saving text when loading", () => {
    render(<Button loading={true}>Click me</Button>);
    const buttonElement = screen.getByText("Saving...");
    expect(buttonElement).toBeInTheDocument();
  });

  it("triggers onClick callback when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = screen.getByText("Click me");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
