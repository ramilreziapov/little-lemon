import React from "react";

function Nav() {
  const handleClick = (anchor) => () => {
    const className = `${anchor}`;
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        // block: "start",
      });
    }
  };

  return (
    <nav className="nav-container">
      {/* Hamburger menu - hidden by default, shown in mobile */}
      <div className="hamburger-menu">
        <img src="/hamburger menu.svg" alt="Menu" />
      </div>
      <section className="logo">
        <img src="/LogoLL.svg" alt="Little Lemon Logo" />
      </section>

      <ul className="nav-list">
        <li className="nav-item">
          <a
            href="#home"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              handleClick("nav-container")();
            }}
          >
            Home
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#specials"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              handleClick("main-container")();
            }}
          >
            Specials
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#testimonials"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              handleClick("testimonials")();
            }}
          >
            Testimonials
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              handleClick("about")();
            }}
          >
            About
          </a>
        </li>
        {/* <li className="nav-item">
          <a href="#reservations" className="nav-link">
            Reservations
          </a>
        </li> */}
        {/* <li className="nav-item">
          <a href="#menu" className="nav-link">
            Menu
          </a>
        </li> */}
        {/* <li className="nav-item">
          <a href="#order-online" className="nav-link">
            Order Online
          </a>
        </li> */}
        {/* <li className="nav-item">
          <a href="#login" className="nav-link" style={{ marginRight: "0" }}>
            Login
          </a>
        </li> */}
      </ul>
      {/* basket - hidden by default, shown in mobile */}
      <div className="basket">
        <img src="/basket.svg" alt="Basket" />
      </div>
    </nav>
  );
}

export default Nav;
