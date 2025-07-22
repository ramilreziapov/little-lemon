import React, { useState, useEffect } from "react";

function BookingForm({ onBookingConfirmed }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const [availableTimes, setAvailableTimes] = useState([]);

  const initializeTimes = (selectedDate) => {
    if (window.fetchAPI) {
      const times = window.fetchAPI(new Date(selectedDate));
      setAvailableTimes(times);
    } else {
      // console.warn("fetchAPI is not available, using fallback times.");
      setAvailableTimes([
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
      ]);
    }
  };

  // const isFormValid = () => {
  //   const { date, time, firstName, lastName, email, phone } = formData;

  //   if (!date || !time || !firstName || !lastName || !email || !phone) {
  //     return false;
  //   }

  //   return true;
  // };

  const isFormValid = () => {
    const { date, time, firstName, lastName, email, phone } = formData;

    // Check if required fields are filled
    if (
      !date ||
      !time ||
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !phone.trim()
    ) {
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return false;
    }

    // Validate phone format (matches the pattern in the input)
    const phoneRegex = /^[+]?[\d\s\-\(\)\.]{7,20}$/;
    if (!phoneRegex.test(phone.trim())) {
      return false;
    }

    // Validate date is not in the past
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of day for comparison
    if (selectedDate < today) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    initializeTimes(today);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "date" && value) {
      initializeTimes(value);
      setFormData((prev) => ({
        ...prev,
        time: "", // Reset time when date changes
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Please fill in all required fields correctly.");
      return;
    }

    const isSubmitted = window.submitAPI ? window.submitAPI(formData) : true;
    if (isSubmitted) {
      onBookingConfirmed(formData);
    } else {
      alert("Failed to submit the reservation. Please try again.");
    }
    // console.log("Booking submitted:", formData);
    // Here you would typically send the data to your backend
    // alert("Reservation submitted successfully!");
  };

  const occasions = ["Birthday", "Anniversary", "Date", "Business", "Other"];

  return (
    <section className="booking-form-section">
      <div className="booking-form-container">
        <h2>Make a Reservation</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date*</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time*</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a time</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="guests">Number of Guests*</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                required
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleInputChange}
              >
                <option value="">Select occasion (optional)</option>
                {occasions.map((occasion) => (
                  <option key={occasion} value={occasion}>
                    {occasion}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                placeholder="Enter your first name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Please enter a valid phone number"
                pattern="^[+]?[\d\s\-\(\)\.]{7,20}$"
                title="Phone number should be between 7 to 20 digits, can include +, -, and spaces."
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="specialRequests">Special Requests</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              placeholder="Any special requests or dietary requirements?"
              rows="4"
            ></textarea>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className={`submit-btn ${!isFormValid() ? "disabled" : ""}`}
              disabled={!isFormValid()}
            >
              Reserve a Table
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;
