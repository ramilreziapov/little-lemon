function Main() {
  return (
    <>
      <main>
        <section className="main-container">
          <box className="main-container1">
            <h2>Specials</h2>
            <button>Online Menu</button>
          </box>
          <box className="main-container2">
            <div className="item1">
              <img
                className="main-img"
                src="/greek salad.jpg"
                alt="Greek Salad"
              />
              <h3>
                Greek Salad <span>$12.99</span>
              </h3>
              <p>
                A delicious mix of fresh vegetables, feta cheese, and olives,
                drizzled with olive oil.
              </p>
              <h4>
                Order a delivery
                <span className="delivery-icon">
                  <img src="/delivery.png" alt="Delivery" />
                </span>
              </h4>
            </div>
            <div className="item1">
              <img
                className="main-img"
                src="/bruschetta.svg"
                alt="Bruschetta"
              />
              <h3>
                Bruschetta <span>$8.99</span>
              </h3>
              <p>
                Toasted bread topped with a mix of tomatoes, basil, and garlic,
                served with balsamic glaze.
              </p>
              <h4>
                Order a delivery
                <span className="delivery-icon">
                  <img src="/delivery.png" alt="Delivery" />
                </span>
              </h4>
            </div>
            <div className="item1">
              <img
                className="main-img"
                src="/lemon dessert.jpg"
                alt="Lemon Dessert"
              />
              <h3>
                Lemon Dessert <span>$6.99</span>
              </h3>
              <p>
                A refreshing lemon tart with buttery crust, it would be perfect
                for ending your meal.
              </p>
              <h4>
                Order a delivery
                <span className="delivery-icon">
                  <img src="/delivery.png" alt="Delivery" />
                </span>
              </h4>
            </div>
          </box>
        </section>
      </main>
    </>
  );
}

export default Main;
