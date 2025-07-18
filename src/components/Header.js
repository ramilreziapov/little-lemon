import React from "react";

function Header({ onReserveClick }) {
  return (
    <header>
      <section className="header-container1">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button onClick={onReserveClick}>Reserve a table</button>
      </section>
      <section className="header-container2">
        <div className="img-box">
          <img src="/restaurantfood.jpg" alt="Restaurant food" />
        </div>
      </section>
    </header>
  );
}

export default Header;
