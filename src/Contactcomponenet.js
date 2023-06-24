import bgpattern from "./assets/bg-pattern-home-6-about-5.svg";
import { Link } from "react-router-dom";

const Contactcomponent = () => {
  return (
    <div className="ready">
      <img src={bgpattern} alt="bg pattern"></img>
      <div>
        <h2>Ready to get started?</h2>
      </div>
      <div>
        <button className="btn2">Contact Us</button>
      </div>
    </div>
  );
};

export default Contactcomponent;
