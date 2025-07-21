import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);

  const headingElement = screen.getByText("First Name*");

  expect(headingElement).toBeInTheDocument();
});

test("Selecting time update the input field time", () => {
  render(<BookingForm />);

  const timeSelect = screen.getByLabelText("Time*");
  // Initial value should be empty
  expect(timeSelect.value).toBe("");

  fireEvent.change(timeSelect, { target: { value: "20:30" } });
  expect(timeSelect.value).toBe("20:30");

  // Check if the option is selected
  const selectedOption = screen.getByRole("option", { name: "20:30" });
  expect(selectedOption.selected).toBe(true);
});

test("Submitt button - renders and clicks", () => {
  render(<BookingForm />);

  const submitButton = screen.getByRole("button", { name: "Reserve a Table" });
  expect(submitButton).toBeInTheDocument();
  expect(submitButton).toBeEnabled();
  expect(submitButton.type).toBe("submit");
});
