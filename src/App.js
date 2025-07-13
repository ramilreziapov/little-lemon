import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <div className="space-left">space-left</div>
        <div className="space-left-after">space-left-after</div>
        <div className="box-left">box-left</div>
        <div className="box-left-after">box-left-after</div>
        <Nav />
        <Header />
        <Main />
        <Footer />
        <div className="box-right">box-right</div>
        <div className="box-right-after">box-right-after</div>
        <div className="space-right">space-right</div>
        <div className="space-right-after">space-right-after</div>
      </div>
    </>
  );
}

export default App;
