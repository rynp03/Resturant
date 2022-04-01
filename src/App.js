import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Menu from "./Pages/Menu";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
