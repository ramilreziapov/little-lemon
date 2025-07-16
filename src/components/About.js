function About() {
  return (
    <section className="about">
      <section className="about-container1">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant located in
          Chicago. We focus on traditional recipes served with a modern twist.
          Our mission is to provide a warm and welcoming atmosphere where guests
          can enjoy delicious food and create lasting memories.
        </p>
        <br />
        {/* <p>
        Our chefs use only the freshest ingredients, sourced locally whenever
        possible. We take pride in our commitment to quality and sustainability,
        ensuring that every dish we serve is not only tasty but also good for
        the environment.
      </p> */}
        <p>
          At Little Lemon, we believe in the power of food to bring people
          together.{" "}
          {/*Whether you're celebrating a special occasion or simply
          enjoying a meal with friends and family, we strive to make every
          dining experience memorable. */}
        </p>
      </section>
      <section className="about-container2">
        <div className="img-box1">
          <img src="/restaurant chef B.jpg" alt="Restaurant Chef" />
        </div>
        <div className="img-box2">
          <img src="/Mario and Adrian A.jpg" alt="Restaurant Food" />
        </div>
      </section>
    </section>

    //     <header>
    //   <section className="header-container1">
    //     <h1>Little Lemon</h1>
    //     <h2>Chicago</h2>
    //     <p>
    //       We are a family-owned Mediterranean restaurant, focused on traditional
    //       recipes served with a modern twist.
    //     </p>
    //   </section>
    //   <section className="header-container2">
    //     <div className="img-box">
    //       <img src="/restaurantfood.jpg" alt="Little Lemon Logo" />
    //     </div>
    //   </section>
    // </header>
  );
}

export default About;
