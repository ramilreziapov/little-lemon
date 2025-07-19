import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="container">
      <Nav />
      <Header />
      <Main />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;
