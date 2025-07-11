function Nav() {
  return (
    <nav>
      <img src="/LogoLL.svg" alt="Little Lemon Logo" />
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
          <a href="#login" className="nav-link">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
