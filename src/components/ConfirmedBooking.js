import React from "react";

function ConfirmedBooking({ bookingDetails, onBackToHome }) {
  return (
    <main className="confirmed-booking-page">
      <div className="confirmed-booking-hero">
        <div className="confirmed-booking-container">
          <div className="confirmation-icon">✓</div>
          <h1>Booking Confirmed!</h1>
          <h2>Thank you for choosing Little Lemon</h2>
          <p>
            Your reservation has been successfully confirmed. We look forward to
            serving you!
          </p>
        </div>
      </div>

      <div className="booking-details-section">
        <div className="booking-details-container">
          <h3>Reservation Details</h3>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Date:</span>
              <span className="detail-value">{bookingDetails.date}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Time:</span>
              <span className="detail-value">{bookingDetails.time}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Guests:</span>
              <span className="detail-value">
                {bookingDetails.guests}{" "}
                {bookingDetails.guests === 1 ? "Guest" : "Guests"}
              </span>
            </div>
            {bookingDetails.occasion && (
              <div className="detail-item">
                <span className="detail-label">Occasion:</span>
                <span className="detail-value">{bookingDetails.occasion}</span>
              </div>
            )}
            <div className="detail-item">
              <span className="detail-label">Name:</span>
              <span className="detail-value">
                {bookingDetails.firstName} {bookingDetails.lastName}
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{bookingDetails.email}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">{bookingDetails.phone}</span>
            </div>
            {bookingDetails.specialRequests && (
              <div className="detail-item full-width">
                <span className="detail-label">Special Requests:</span>
                <span className="detail-value">
                  {bookingDetails.specialRequests}
                </span>
              </div>
            )}
          </div>

          <div className="confirmation-actions">
            <button
              className="back-to-home-btn"
              onClick={onBackToHome}
              aria-label="On Click"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ConfirmedBooking;
