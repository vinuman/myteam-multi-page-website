import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from "./assets/logo.svg";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <nav>
        <div className="nav-start">
          <Link to="/">
            {" "}
            <img src={logo}></img>
          </Link>

          <ul>
            <li>
              <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/about"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <Link to="/contact" style={{ textDecoration: "none", color: "#fff" }}>
          <button className="btn1">Contact Us</button>
        </Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
