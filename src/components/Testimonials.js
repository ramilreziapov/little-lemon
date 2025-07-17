function Testimonials() {
  return (
    <>
      <main className="testimonials">
        <section className="testimonials-container">
          <div className="testimonials-container1">
            <h2>Testimonials</h2>
          </div>
          <div className="testimonials-container2">
            <div className="item1">
              <span className="star-icon">
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star filled"></span>
              </span>
              <img className="main-img" src="/EmilyR.png" alt="EmilyR" />
              <h4>- Emily R. Student</h4>
            </div>
            <div className="item1">
              <span className="star-icon">
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star"></span>
              </span>
              <img className="main-img" src="/MichaelS.png" alt="Greek Salad" />
              <h4>- Michael S. Teacher</h4>
            </div>
            <div className="item1">
              <span className="star-icon">
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star filled"></span>
              </span>
              <img className="main-img" src="/BennyT.png" alt="BennyT" />
              <h4>- Benny T. Engineer</h4>
            </div>

            <div className="item1">
              <span className="star-icon">
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star filled"></span>
                <span className="star "></span>
              </span>
              <img className="main-img" src="/SarahL.png" alt="SarahL" />
              <h4>- Sarah L. Designer</h4>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Testimonials;
