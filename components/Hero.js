import Link from "next/link";
import Counter from "./Counter";

const counterData = [
  { id: 1, text: "Years Of Experience", value: "4", valueType: "plus" },
  { id: 2, text: "Project Collaborations", value: "8", valueType: "plus" },
];

const Hero = () => {
  return (
    <section id="home" className="main-hero-area pt-150 pb-80 rel z-1">
      <div className="container container-1620">
        <div className="row align-items-center">
          <div className="col-lg-6 col-xxl-6 col-sm-12">
            <div className="hero-content rmb-55 wow fadeInUp delay-0-2s">
              <span className="h2">Hello, I’m </span>
              <h1>
                <b>Rodrigo Alvarenga</b>
                <br></br>
                Web Designer
                <br></br>
                <div className="display-6">
                  & Software Developer
                </div>
              </h1>
              <p>
                Embark on a journey where dreams materialize into digital wonders. Let's shape the future together and turn your ideas into pixels.
              </p>
              <div className="hero-btns">
                <Link legacyBehavior href="/contact">
                  <a className="theme-btn">
                    Hire Me <i className="far fa-angle-right" />
                  </a>
                </Link>
                <Link legacyBehavior href="/contact">
                  <a className="read-more">
                    Download Resume <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-sm-5">
            {/* <div className="hero-counter-wrap ms-lg-auto rmb-55 wow fadeInUp delay-0-4s">
              {counterData.map((count) => (
                <div className="counter-item counter-text-wrap" key={count.id}>
                  <Counter end={count.value} extraClass={count.valueType} />
                  <span className="counter-title">{count.text}</span>
                </div>
              ))}
            </div> */}
          </div>
          <div className="col-lg-5">
            <div className="author-image-part wow fadeIn delay-0-3s">
              <div className="bg-circle" />
              <img className="me-portrait" src="assets/images/hero/me.webp" alt="Author" />
              <div className="progress-shape">
                <img
                  src="assets/images/hero/progress-shape-2.png"
                  alt="Progress"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

export const Hero2 = () => {
  return (
    <div id="home" className="hero-area-two pt-150 rel z-2">
      <div className="container rel z-3">
        <div className="hero-two-content">
          <span className="title wow fadeInLeft delay-0-2s">
            Welcome 
          </span>
          <div className="name-wrapper wow fadeInRight delay-0-4s">
            <span className="intro">I'm</span> &nbsp; 
            <span className="name">Rodrigo Alvarenga</span>
          </div>
          
          <span className="designations wow fadeInLeft delay-0-6s">
            <span>Software</span> Developer
          </span>
        </div>
      </div>
      <a href="#about" className="scroll-down wow fadeIn delay-0-7s">
        <img src="assets/images/hero/scroll-down.png" alt="" />
      </a>
    </div>
  );
};
