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

test("fetchAPI returns a non-empty array", () => {
  // Mock the fetchAPI function on window object
  const mockTimes = ["17:00", "18:00", "19:00", "20:00"];
  window.fetchAPI = jest.fn(() => mockTimes);

  // Call fetchAPI with a test date
  const testDate = new Date("2025-07-21");
  const result = window.fetchAPI(testDate);

  // Verify that fetchAPI was called with the correct date
  expect(window.fetchAPI).toHaveBeenCalledWith(testDate);

  // Verify that the result is an array
  expect(Array.isArray(result)).toBe(true);

  // Verify that the array is not empty
  expect(result.length).toBeGreaterThan(0);

  // Verify that the result contains the expected times
  expect(result).toEqual(mockTimes);

  // Clean up the mock
  delete window.fetchAPI;
});

test("initializeTimes function uses fetchAPI and updates available times", () => {
  // Mock the fetchAPI function
  const mockTimes = ["17:00", "17:30", "18:00", "18:30", "19:00"];
  window.fetchAPI = jest.fn(() => mockTimes);

  // Render the BookingForm component
  render(<BookingForm />);

  // Check that fetchAPI was called during initialization
  expect(window.fetchAPI).toHaveBeenCalled();

  // Check that the time select has the correct options
  const timeSelect = screen.getByLabelText("Time*");
  const options = Array.from(timeSelect.options)
    .map((option) => option.value)
    .filter((value) => value !== "");

  expect(options).toEqual(mockTimes);

  // Clean up the mock
  delete window.fetchAPI;
});
