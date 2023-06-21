import bgpattern1 from "./assets/bg-pattern-home-1.svg";
import bgpattern2 from "./assets/bg-pattern-home-2.svg";

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
    </>
  );
};

export default Home;
