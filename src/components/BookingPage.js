import React from "react";
import BookingForm from "./BookingForm";

function BookingPage({ onBackToHome, onBookingConfirmed }) {
  return (
    <main className="booking-page">
      <div className="booking-hero">
        <div className="booking-hero-container">
          <button
            className="back-btn"
            onClick={onBackToHome}
            aria-label="On Click"
          >
            ← Back to Home
          </button>
          <h1>Reserve a Table</h1>
          <h2>Little Lemon Chicago</h2>
          <p>
            Book your table at Chicago's finest Mediterranean restaurant. We
            look forward to serving you!
          </p>
        </div>
      </div>
      <BookingForm onBookingConfirmed={onBookingConfirmed} />
    </main>
  );
}

export default BookingPage;
