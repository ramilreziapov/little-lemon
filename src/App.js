import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <div className="container">
        <div className="space-left"></div>
        {/* <div className="space-left-after"></div> */}
        <div className="box-left"></div>
        {/* <div className="box-left-after"></div> */}
        <Nav />
        <Header />
        <Main />
        <Testimonials />
        <About />
        <Footer />
        <div className="box-right"></div>
        {/* <div className="box-right-after"></div> */}
        <div className="space-right"></div>
        {/* <div className="space-right-after"></div> */}
      </div>
    </>
  );
}

export default App;
