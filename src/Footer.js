import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";
import facebook from "./assets/icon-facebook.svg";
import pinterest from "./assets/icon-pinterest.svg";
import twitter from "./assets/icon-twitter.svg";

const Footer = () => {
  return (
    <footer>
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
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/about">
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <address>
        <p className="body2">987 Hillcrest Lane</p>
        <p className="body2">Irvine, CA</p>
        <p className="body2">California 92714</p>
        <p className="body2">Call Us : 949-833-7432</p>
      </address>
      <div className="footer-right">
        <div className="social-media">
          <img src={facebook} alt="facebook logo"></img>
          <img src={pinterest} alt="pinterest logo"></img>
          <img src={twitter} alt="twitter logo"></img>
        </div>
        <p className="body2">Copyright 2020. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
