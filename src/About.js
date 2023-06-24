import bgpattern1 from "./assets/bg-pattern-about-1-mobile-nav-1.svg";
import bgpattern2 from "./assets/bg-pattern-home-6-about-5.svg";
import bgpattern3 from "./assets/bg-pattern-about-2-contact-1.svg";
import bgpatter4 from "./assets/bg-pattern-home-4-about-3.svg";
import Cardcomponent from "./Cardcomponent";
import nikita from "./assets/avatar-nikita.jpg";
import cristian from "./assets/avatar-christian.jpg";
import crux from "./assets/avatar-cruz.jpg";
import drake from "./assets/avatar-drake.jpg";
import griffin from "./assets/avatar-griffin.jpg";
import aden from "./assets/avatar-aden.jpg";
import verge from "./assets/logo-the-verge.png";
import jakarta from "./assets/logo-jakarta-post.png";
import guradian from "./assets/logo-the-guardian.png";
import techradar from "./assets/logo-tech-radar.png";
import gadgets from "./assets/logo-gadgets-now.png";
import Contactcomponent from "./Contactcomponenet";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <section className="about-section-1">
        <img src={bgpattern1} alt="bg pattern"></img>
        <h1 style={{ color: "#F67E7E" }} className="small">
          About
        </h1>
        <p className="body1">
          We help companies{" "}
          <span style={{ color: "#F67E7E" }}>build dynamic</span> teams made up
          of top global talent. Using our network of passionate professionals we
          drive innovation and deliver incredible outcomes. Talented, diverse
          teams shape the best products and experiences. We’ll bring those teams
          to you.
        </p>
      </section>
      <section className="about-section-2">
        <img className="bg-ptn-5" src={bgpattern3}></img>
        <img className="bg-ptn-2" src={bgpatter4}></img>
        <h2>Meet the directors</h2>
        <div className="cards-container">
          <img src={bgpattern2}></img>
          <Cardcomponent
            imageSrc={nikita}
            name="Nikita Marks"
            designation="Founder & CEO"
            quote="“Innovation comes from embracing diverse perspectives, leading to extraordinary creations that thrive in the modern world.”"
          />
          <Cardcomponent
            imageSrc={cristian}
            name="Cristian Duncan"
            designation="Co-founder & COO"
            quote="“Embracing individuality breeds exceptional products, essential for thriving in the ever-evolving landscape.”"
          />
          <Cardcomponent
            imageSrc={crux}
            name="Cruz Hamer"
            designation="Co-founder & CTO"
            quote="“The fusion of distinct viewpoints cultivates unparalleled offerings that are vital for navigating today's challenges.”"
          />
          <Cardcomponent
            imageSrc={drake}
            name="Drake Heaton"
            designation="Development Lead"
            quote="“Unconventional outlooks breed exceptional solutions, crucial for staying relevant and resilient in today's fast-paced environment.”"
          />
          <Cardcomponent
            imageSrc={griffin}
            name="Griffin Wise"
            designation="Lead marketing"
            quote="“Unique perspectives shape unique products, which is what you need to survive these days.”"
          />
          <Cardcomponent
            imageSrc={aden}
            name="Aden Allan"
            designation="Head of talent"
            quote="“Empowered teams create truly amazing products. Set the north star and let them follow it.”"
          />
        </div>
      </section>
      <section className="about-section-3">
        <h2>Some of our clients</h2>
        <div className="client-list">
          <img src={verge} alt="logo"></img>
          <img src={jakarta} alt="logo"></img>
          <img src={guradian} alt="logo"></img>
          <img src={techradar} alt="logo"></img>
          <img src={gadgets} alt="logo"></img>
        </div>
      </section>
      <Contactcomponent />
      <Footer />
    </>
  );
};

export default About;
