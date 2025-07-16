function Nav() {
  return (
    <nav>
      {/* Hamburger menu - hidden by default, shown in mobile */}
      <div className="hamburger-menu">
        <img src="/hamburger menu.svg" alt="Menu" />
      </div>
      <section className="logo">
        <img src="/LogoLL.svg" alt="Little Lemon Logo" />
      </section>

      <ul className="nav-list">
        <li className="nav-item">
          <a href="#home" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#menu" className="nav-link">
            Menu
          </a>
        </li>
        <li className="nav-item">
          <a href="#reservations" className="nav-link">
            Reservations
          </a>
        </li>
        <li className="nav-item">
          <a href="#order-online" className="nav-link">
            Order Online
          </a>
        </li>
        <li className="nav-item">
          <a href="#login" className="nav-link-last">
            Login
          </a>
        </li>
      </ul>
      {/* basket - hidden by default, shown in mobile */}
      <div className="basket">
        <img src="/basket.svg" alt="Basket" />
      </div>
    </nav>
  );
}

export default Nav;
