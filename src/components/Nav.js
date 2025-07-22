import React from "react";

function Nav({ currentPage, onNavigate }) {
  // const handleClick = (anchor) => () => {
  //   const className = `${anchor}`;
  //   const element = document.querySelector(`.${className}`);
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };

  const handleClick = (anchor) => () => {
    const element = document.querySelector(`.${anchor}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav>
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
              onNavigate("home");
            }}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#order-online"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
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
              onNavigate("home");
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
              onNavigate("home");
              handleClick("about")();
            }}
          >
            About
          </a>
        </li>
        {/* <li className="nav-item">
          <a href="#menu" className="nav-link">
            Menu
          </a>
        </li> */}
        <li className="nav-item">
          <a
            href="#reservations"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("booking");
            }}
          >
            Reservations
          </a>
        </li>

        {/* <li className="nav-item">
          <a
            href="#login"
            className="nav-link"
            style={{ marginRight: "0" }}
            onClick={(e) => {
              e.preventDefault();
              handleClick("footer")();
            }}
          >
            Footer
          </a>
        </li> */}
      </ul>
      <div className="basket">
        <img src="/basket.svg" alt="Basket" />+
      </div>
    </nav>
  );
}

export default Nav;
