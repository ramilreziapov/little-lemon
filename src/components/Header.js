function Header() {
  return (
    <header>
      <section className="header-container">
        <box className="item1">
          <h1>Little Lemon</h1>
          <p>Chicago</p>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </box>
        <box className="item2">
          <img src="/restaurantfood.jpg" alt="Little Lemon Logo" />
        </box>
      </section>
    </header>
  );
}

export default Header;
