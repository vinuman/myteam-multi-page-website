import bgpattern1 from "./assets/bg-pattern-home-1.svg";
import bgpattern2 from "./assets/bg-pattern-home-2.svg";
import bgpatter3 from "./assets/bg-pattern-home-3.svg";
import personIcon from "./assets/icon-person.svg";
import cogIcon from "./assets/icon-cog.svg";
import chartIcon from "./assets/icon-chart.svg";
import hamburger from "./assets/icon-hamburger.svg";

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
    </>
  );
};

export default Home;
