import personIcon from "./assets/icon-person.svg";
import cogIcon from "./assets/icon-cog.svg";
import chartIcon from "./assets/icon-chart.svg";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-left">
        <h1 className="small">Contact</h1>
        <h4 style={{ color: "#F67E7E", fontSize: "32px" }}>Ask us about</h4>
        <div className="contact-left-items">
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="item"
          >
            <div className="item-left">
              <img style={{ marginRight: "2rem" }} src={personIcon}></img>
            </div>
            <div className="item-right">
              <p className="body1">The quality of our talent network</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
            className="item"
          >
            <div className="item-left">
              <img style={{ marginRight: "2rem" }} src={cogIcon}></img>
            </div>
            <div className="item-right">
              <p className="body1">Usage & implementation of our software</p>
            </div>
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="item"
          >
            <div className="item-left">
              <img style={{ marginRight: "2rem" }} src={chartIcon}></img>
            </div>
            <div className="item-right">
              <p className="body1">How we help drive innovation</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-right">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
