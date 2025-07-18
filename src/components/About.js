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
          At Little Lemon, we believe in the power of food to bring people
          together.
        </p> */}
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
  );
}

export default About;
