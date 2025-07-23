import React, { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBookingConfirmation = (details) => {
    setBookingDetails(details);
    setCurrentPage("confirmed");
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "booking":
        return (
          <BookingPage
            onBackToHome={() => setCurrentPage("home")}
            onBookingConfirmed={handleBookingConfirmation}
          />
        );
      case "confirmed":
        return (
          <ConfirmedBooking
            bookingDetails={bookingDetails}
            onBackToHome={() => setCurrentPage("home")}
          />
        );
      case "home":
      default:
        return (
          <>
            <Header onReserveClick={() => setCurrentPage("booking")} />
            <Main />
            <Testimonials />
            <About />
          </>
        );
    }
  };

  return (
    <div className="container">
      <Nav currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
