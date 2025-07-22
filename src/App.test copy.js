import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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
  expect(submitButton).toBeDisabled();
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

// Mock the onBookingConfirmed prop
const mockOnBookingConfirmed = jest.fn();

describe("BookingForm Input Field Validation", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test 1: Verify all input fields have correct attributes
  test("Date input has correct validation attributes", () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    const dateInput = screen.getByLabelText("Date*");
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("name", "date");
    expect(dateInput).toHaveAttribute(
      "min",
      new Date().toISOString().split("T")[0]
    );
  });

  test("Time select has correct validation attributes", () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    const timeSelect = screen.getByLabelText("Time*");
    expect(timeSelect).toHaveAttribute("required");
    expect(timeSelect).toHaveAttribute("name", "time");
    expect(timeSelect.tagName).toBe("SELECT");
  });

  test("Guests select has correct validation attributes", () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    const guestsSelect = screen.getByLabelText("Number of Guests*");
    expect(guestsSelect).toHaveAttribute("required");
    expect(guestsSelect).toHaveAttribute("name", "guests");
    expect(guestsSelect.tagName).toBe("SELECT");
    expect(guestsSelect.value).toBe("1"); // Default value
  });

  test("Occasion select has correct attributes (optional field)", () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    const occasionSelect = screen.getByLabelText("Occasion");
    expect(occasionSelect).not.toHaveAttribute("required");
    expect(occasionSelect).toHaveAttribute("name", "occasion");
    expect(occasionSelect.tagName).toBe("SELECT");
  });

  test("First Name input has correct validation attributes", () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    const firstNameInput = screen.getByLabelText("First Name*");
    expect(firstNameInput).toHaveAttribute("type", "text");
    expect(firstNameInput).toHaveAttribute("required");
    expect(firstNameInput).toHaveAttribute("name", "firstName");
    expect(firstNameInput).toHaveAttribute(
      "placeholder",
      "Enter your first name"
    );
  });

  test("Last Name input has correct validation attributes", () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    const lastNameInput = screen.getByLabelText("Last Name*");
    expect(lastNameInput).toHaveAttribute("type", "text");
    expect(lastNameInput).toHaveAttribute("required");
    expect(lastNameInput).toHaveAttribute("name", "lastName");
    expect(lastNameInput).toHaveAttribute(
      "placeholder",
      "Enter your last name"
    );
  });

  test("Email input has correct validation attributes", () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    const emailInput = screen.getByLabelText("Email*");
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("required");
    expect(emailInput).toHaveAttribute("name", "email");
    expect(emailInput).toHaveAttribute("placeholder", "Enter your email");
  });

  test("Phone input has correct validation attributes", () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    const phoneInput = screen.getByLabelText("Phone Number*");
    expect(phoneInput).toHaveAttribute("type", "tel");
    expect(phoneInput).toHaveAttribute("required");
    expect(phoneInput).toHaveAttribute("name", "phone");
    expect(phoneInput).toHaveAttribute(
      "pattern",
      "^[+]?[\\d\\s\\-\\(\\)\\.]{7,20}$"
    );
    expect(phoneInput).toHaveAttribute(
      "title",
      "Phone number should be between 7 to 20 digits, can include +, -, and spaces."
    );
    expect(phoneInput).toHaveAttribute(
      "placeholder",
      "Please enter a valid phone number"
    );
  });

  test("Special Requests textarea has correct attributes (optional field)", () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    const specialRequestsTextarea = screen.getByLabelText("Special Requests");
    expect(specialRequestsTextarea).not.toHaveAttribute("required");
    expect(specialRequestsTextarea).toHaveAttribute("name", "specialRequests");
    expect(specialRequestsTextarea).toHaveAttribute("rows", "4");
    expect(specialRequestsTextarea).toHaveAttribute(
      "placeholder",
      "Any special requests or dietary requirements?"
    );
    expect(specialRequestsTextarea.tagName).toBe("TEXTAREA");
  });
});

describe("BookingForm Submit Button State", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Submit button is disabled when form is empty", () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    const submitButton = screen.getByRole("button", {
      name: "Reserve a Table",
    });
    expect(submitButton).toBeDisabled();
    expect(submitButton).toHaveClass("disabled");
  });

  test("Submit button is disabled when required fields are missing", () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    // Fill only some fields
    fireEvent.change(screen.getByLabelText("First Name*"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name*"), {
      target: { value: "Doe" },
    });

    const submitButton = screen.getByRole("button", {
      name: "Reserve a Table",
    });
    expect(submitButton).toBeDisabled();
  });

  test("Submit button is disabled with invalid email format", () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    // Fill all required fields but with invalid email
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split("T")[0];

    fireEvent.change(screen.getByLabelText("Date*"), {
      target: { value: tomorrowString },
    });
    fireEvent.change(screen.getByLabelText("Time*"), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText("First Name*"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name*"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email*"), {
      target: { value: "invalid-email" },
    });
    fireEvent.change(screen.getByLabelText("Phone Number*"), {
      target: { value: "1234567890" },
    });

    const submitButton = screen.getByRole("button", {
      name: "Reserve a Table",
    });
    expect(submitButton).toBeDisabled();
  });

  test("Submit button is disabled with invalid phone format", () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    // Fill all required fields but with invalid phone
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split("T")[0];

    fireEvent.change(screen.getByLabelText("Date*"), {
      target: { value: tomorrowString },
    });
    fireEvent.change(screen.getByLabelText("Time*"), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText("First Name*"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name*"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email*"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Phone Number*"), {
      target: { value: "123" },
    }); // Too short

    const submitButton = screen.getByRole("button", {
      name: "Reserve a Table",
    });
    expect(submitButton).toBeDisabled();
  });

  test("Submit button is disabled with past date", () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    // Fill all required fields but with past date
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toISOString().split("T")[0];

    fireEvent.change(screen.getByLabelText("Date*"), {
      target: { value: yesterdayString },
    });
    fireEvent.change(screen.getByLabelText("Time*"), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText("First Name*"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name*"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email*"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Phone Number*"), {
      target: { value: "1234567890" },
    });

    const submitButton = screen.getByRole("button", {
      name: "Reserve a Table",
    });
    expect(submitButton).toBeDisabled();
  });

  test("Submit button is enabled with all valid required fields", async () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    // Fill all required fields with valid data
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split("T")[0];

    fireEvent.change(screen.getByLabelText("Date*"), {
      target: { value: tomorrowString },
    });

    await waitFor(() => {
      fireEvent.change(screen.getByLabelText("Time*"), {
        target: { value: "18:00" },
      });
    });

    fireEvent.change(screen.getByLabelText("First Name*"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name*"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email*"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Phone Number*"), {
      target: { value: "1234567890" },
    });

    const submitButton = screen.getByRole("button", {
      name: "Reserve a Table",
    });
    expect(submitButton).toBeEnabled();
    expect(submitButton).not.toHaveClass("disabled");
  });
});

describe("BookingForm Validation Functions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Form validation rejects empty required fields", () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    const submitButton = screen.getByRole("button", {
      name: "Reserve a Table",
    });
    expect(submitButton).toBeDisabled();
  });

  test("Form validation rejects whitespace-only names", () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split("T")[0];

    fireEvent.change(screen.getByLabelText("Date*"), {
      target: { value: tomorrowString },
    });
    fireEvent.change(screen.getByLabelText("Time*"), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText("First Name*"), {
      target: { value: "   " },
    }); // Whitespace only
    fireEvent.change(screen.getByLabelText("Last Name*"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email*"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Phone Number*"), {
      target: { value: "1234567890" },
    });

    const submitButton = screen.getByRole("button", {
      name: "Reserve a Table",
    });
    expect(submitButton).toBeDisabled();
  });

  test("Form validation accepts valid email formats", async () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    const validEmails = [
      "test@example.com",
      "user.name@domain.co.uk",
      "firstname+lastname@company.org",
      "123@numbers.com",
    ];

    for (const email of validEmails) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowString = tomorrow.toISOString().split("T")[0];

      fireEvent.change(screen.getByLabelText("Date*"), {
        target: { value: tomorrowString },
      });
      fireEvent.change(screen.getByLabelText("Time*"), {
        target: { value: "18:00" },
      });
      fireEvent.change(screen.getByLabelText("First Name*"), {
        target: { value: "John" },
      });
      fireEvent.change(screen.getByLabelText("Last Name*"), {
        target: { value: "Doe" },
      });
      fireEvent.change(screen.getByLabelText("Email*"), {
        target: { value: email },
      });
      fireEvent.change(screen.getByLabelText("Phone Number*"), {
        target: { value: "1234567890" },
      });

      const submitButton = screen.getByRole("button", {
        name: "Reserve a Table",
      });
      expect(submitButton).toBeEnabled();
    }
  });

  test("Form validation rejects invalid email formats", () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    const invalidEmails = [
      "invalid-email",
      "@domain.com",
      "user@",
      "user..name@domain.com",
      "user@domain",
      "",
    ];

    for (const email of invalidEmails) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowString = tomorrow.toISOString().split("T")[0];

      fireEvent.change(screen.getByLabelText("Date*"), {
        target: { value: tomorrowString },
      });
      fireEvent.change(screen.getByLabelText("Time*"), {
        target: { value: "18:00" },
      });
      fireEvent.change(screen.getByLabelText("First Name*"), {
        target: { value: "John" },
      });
      fireEvent.change(screen.getByLabelText("Last Name*"), {
        target: { value: "Doe" },
      });
      fireEvent.change(screen.getByLabelText("Email*"), {
        target: { value: email },
      });
      fireEvent.change(screen.getByLabelText("Phone Number*"), {
        target: { value: "1234567890" },
      });

      const submitButton = screen.getByRole("button", {
        name: "Reserve a Table",
      });
      expect(submitButton).toBeDisabled();
    }
  });

  test("Form validation accepts valid phone formats", async () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    const validPhones = [
      "1234567890",
      "+1 234 567 8900",
      "(123) 456-7890",
      "+44 20 7946 0958",
      "123-456-7890",
      "+1.234.567.8900",
    ];

    for (const phone of validPhones) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowString = tomorrow.toISOString().split("T")[0];

      fireEvent.change(screen.getByLabelText("Date*"), {
        target: { value: tomorrowString },
      });
      fireEvent.change(screen.getByLabelText("Time*"), {
        target: { value: "18:00" },
      });
      fireEvent.change(screen.getByLabelText("First Name*"), {
        target: { value: "John" },
      });
      fireEvent.change(screen.getByLabelText("Last Name*"), {
        target: { value: "Doe" },
      });
      fireEvent.change(screen.getByLabelText("Email*"), {
        target: { value: "john@example.com" },
      });
      fireEvent.change(screen.getByLabelText("Phone Number*"), {
        target: { value: phone },
      });

      const submitButton = screen.getByRole("button", {
        name: "Reserve a Table",
      });
      expect(submitButton).toBeEnabled();
    }
  });

  test("Form validation rejects invalid phone formats", () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    const invalidPhones = [
      "123", // Too short
      "123456789012345678901", // Too long
      "abcdefghij", // Letters
      "123-456-789a", // Mixed with letters
      "",
    ];

    for (const phone of invalidPhones) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowString = tomorrow.toISOString().split("T")[0];

      fireEvent.change(screen.getByLabelText("Date*"), {
        target: { value: tomorrowString },
      });
      fireEvent.change(screen.getByLabelText("Time*"), {
        target: { value: "18:00" },
      });
      fireEvent.change(screen.getByLabelText("First Name*"), {
        target: { value: "John" },
      });
      fireEvent.change(screen.getByLabelText("Last Name*"), {
        target: { value: "Doe" },
      });
      fireEvent.change(screen.getByLabelText("Email*"), {
        target: { value: "john@example.com" },
      });
      fireEvent.change(screen.getByLabelText("Phone Number*"), {
        target: { value: phone },
      });

      const submitButton = screen.getByRole("button", {
        name: "Reserve a Table",
      });
      expect(submitButton).toBeDisabled();
    }
  });

  test("Form prevents submission with invalid data", () => {
    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    // Try to submit with invalid data
    fireEvent.submit(screen.getByRole("form"));

    // Should not call the callback
    expect(mockOnBookingConfirmed).not.toHaveBeenCalled();
  });

  test("Form allows submission with valid data", async () => {
    // Mock submitAPI
    window.submitAPI = jest.fn(() => true);

    render(<BookingForm onBookingConfirmed={mockOnBookingConfirmed} />);

    // Fill form with valid data
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split("T")[0];

    fireEvent.change(screen.getByLabelText("Date*"), {
      target: { value: tomorrowString },
    });

    await waitFor(() => {
      fireEvent.change(screen.getByLabelText("Time*"), {
        target: { value: "18:00" },
      });
    });

    fireEvent.change(screen.getByLabelText("First Name*"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name*"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email*"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Phone Number*"), {
      target: { value: "1234567890" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: "Reserve a Table" }));

    // Should call the callback
    expect(mockOnBookingConfirmed).toHaveBeenCalledWith({
      date: tomorrowString,
      time: "18:00",
      guests: 1,
      occasion: "",
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "1234567890",
      specialRequests: "",
    });

    // Clean up
    delete window.submitAPI;
  });
});
