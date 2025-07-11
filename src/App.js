import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <div className="box-left">box-left</div>
        <Nav />
        <Header />
        <Main />
        <Footer />
        <div className="box-right">box-right</div>
      </div>
    </>
  );
}

export default App;
