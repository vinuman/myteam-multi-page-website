import { useState } from "react";

import cross from "./assets/icon-cross.svg";
import twitter from "./assets/icon-twitter.svg";
import linkedin from "./assets/icon-linkedin.svg";
import close from "./assets/icon-close.svg";

const Cardcomponent = ({ imageSrc, name, designation, quote }) => {
  const [isInfoVisisble, setIsInfoVisible] = useState(false);

  const toggleInfo = () => {
    setIsInfoVisible(!isInfoVisisble);
  };
  return (
    <>
      <div className="card" onClick={toggleInfo}>
        <div className="card-content">
          {!isInfoVisisble ? (
            <>
              <img src={imageSrc} alt="profile pic"></img>
              <p className="body1">{name}</p>
              <p className="body2">{designation}</p>
              <div className="card-btn">
                <img src={cross}></img>
              </div>
            </>
          ) : (
            <>
              <p style={{ paddingBottom: "2rem" }} className="body1">
                {name}
              </p>
              <p
                style={{ width: "150%", paddingBottom: "2rem" }}
                className="body2"
              >
                {quote}
              </p>
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  justifyContent: "space-around",
                }}
                className="social-media"
              >
                <img src={twitter} alt="twitter logo"></img>
                <img src={linkedin} alt="linkedin logo"></img>
              </div>
              <div style={{ backgroundColor: "#79C8C7" }} className="card-btn">
                <img src={close}></img>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cardcomponent;
