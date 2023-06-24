import bgpattern1 from "./assets/bg-pattern-home-1.svg";
import bgpattern2 from "./assets/bg-pattern-home-2.svg";
import bgpatter3 from "./assets/bg-pattern-home-3.svg";
import bgpattern4 from "./assets/bg-pattern-home-4-about-3.svg";
import bgpattern5 from "./assets/bg-pattern-home-5.svg";
import personIcon from "./assets/icon-person.svg";
import cogIcon from "./assets/icon-cog.svg";
import chartIcon from "./assets/icon-chart.svg";
import hamburger from "./assets/icon-hamburger.svg";
import kady from "./assets/avatar-kady.jpg";
import ayisha from "./assets/avatar-aiysha.jpg";
import arthur from "./assets/avatar-arthur.jpg";
import quotes from "./assets/icon-quotes.svg";
import Contactcomponent from "./Contactcomponenet";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <section className="home-section-1">
        <h1 className="large">
          Find the best <span style={{ color: "#F67E7E" }}>talent</span>
        </h1>
        <p className="body1">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
        <img src={bgpattern1} className="bg-ptn-1"></img>
        <img src={bgpattern2} className="bg-ptn-2"></img>
      </section>
      <section className="home-section-2">
        <div className="home-section-2-left">
          <h2>Build & manage distributed teams like no one else.</h2>
        </div>
        <div className="home-section-2-right">
          <div className="item">
            <div className="item-left">
              <img src={personIcon} alt="person icon"></img>
            </div>
            <div className="item-right">
              <p className="body1">Experienced Individuals</p>
              <p className="body2">
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="item-left">
              <img src={cogIcon} alt="cog icon"></img>
            </div>
            <div className="item-right">
              <p className="body1">Easy to Implement</p>
              <p className="body2">
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="item-left">
              <img src={chartIcon} alt="chart icon"></img>
            </div>
            <div className="item-right">
              <p className="body1">Enhanced Productivity</p>
              <p className="body2">
                Our customized platform with in-built analytics helps you manage
                your distributed teams.
              </p>
            </div>
          </div>
        </div>
        <img src={bgpatter3} className="bg-ptn-3"></img>
        <img src={bgpatter3} className="bg-ptn-4"></img>
      </section>
      <section className="home-section-3">
        <img
          src={bgpattern4}
          alt="background pattern"
          className="bg-ptn-5"
        ></img>
        <img
          src={bgpattern5}
          alt="background pattern"
          className="bg-ptn-6"
        ></img>
        <h2>
          Delivering real results for top companies. Some of our{" "}
          <span style={{ color: "#79C8C7" }}>success stories.</span>
        </h2>
        <div className="stories-container">
          <div className="stories">
            <img className="quotes" src={quotes} alt="icon-quotes"></img>
            <p className="body2">
              {" "}
              “The team perfectly fit the specialized skill set required. They
              focused on the most essential features helping us launch the
              platform eight months faster than planned.”
            </p>
            <h3>Kady Baker</h3>
            <p className="body2">Product Manager at Bookmark</p>
            <img src={kady} alt="profile kady"></img>
          </div>
          <div className="stories">
            <img className="quotes" src={quotes} alt="icon-quotes"></img>
            <p className="body2">
              {" "}
              “We needed to automate our entire onboarding process. The team
              came in and built out the whole journey. Since going live, user
              retention has gone through the roof!”
            </p>
            <h3>Aiysha Reese</h3>
            <p className="body2">Founder of Manage</p>
            <img src={ayisha} alt="profile ayisha"></img>
          </div>
          <div className="stories">
            <img className="quotes" src={quotes} alt="icon-quotes"></img>
            <p className="body2">
              {" "}
              “Amazing. Our team helped us build an app that delivered a new
              experience for hiring a physio. The launch was an instant success
              with 100k downloads in the first month.”
            </p>
            <h3>Arthur Clarke</h3>
            <p className="body2">Co-founder of MyPhysio</p>
            <img src={arthur} alt="profile arthur"></img>
          </div>
        </div>
      </section>
      <Contactcomponent />
      <Footer />
    </>
  );
};

export default Home;
