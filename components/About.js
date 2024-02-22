import Counter from "./Counter";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="about-area rel z-1">
      <div className="for-bgc-black py-130 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-12">
              <div className="about-content-part rel z-2 rmb-55">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About me</span>
                  <h2>
                    FrontEnd & Software <span>Developer</span>
                  </h2>
                  <p>
                    I'm a passionate Software Developer with over 3 years experience specializing in front-end development. I have a passion
                    for creating seamless, performant, pixel-perfect and responsive websites and a firm believer in the mobile-first approach. I consider myself dedicated, results-driven and equipped
                    with a <span>diverse skill set</span> ranging from SEO, front-end development, back-end development, a little bit of networking, 
                    automation and data analysis with python.
                  </p>
                  <p>
                    My main focus lately is in building software and deliver <span>professional solutions</span>. I love working on the front-end and being
                    able to develop an excelent UI and user experience, but I started focusing not only coding but also delivering <span>value</span> to the business needs
                    and building professional solutions to real problems.
                  </p>
                  <p>
                    I recently developed a passion for photography, so when I'm not behind my screen delivering software solutions, I find myself learning about
                    photography, composition, color grading and also film photography.
                  </p> 
                </div>
                <div className="about-info-box mt-25 wow fadeInUp delay-0-2s">
                  <div className="info-box-item">
                    <a href="https://github.com/tupic98" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-github" />
                    </a>
                    <div className="content">
                      <span>Github</span>
                      <br />
                      <a href="https://github.com/tupic98" rel="noopener noreferrer" target="_blank">https://github.com/tupic98</a>
                    </div>
                  </div>
                  <div className="info-box-item">
                    <a href="https://www.linkedin.com/in/rodrigo-alvarenga-928b7a190/" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-linkedin" />
                    </a>
                    <div className="content">
                      <span>LinkedIn</span>
                      <br />
                      <a href="https://www.linkedin.com/in/rodrigo-alvarenga-928b7a190/" rel="noopener noreferrer" target="_blank">Rodrigo Alvarenga</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

export const About2 = () => {
  return (
    <section
      id="about"
      className="about-area-two rel z-1 pt-130 rpt-100 pb-130 rpb-100"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="about-content-two rel z-2 rmb-55">
              <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" />
                  Introduction of Myself
                </span>
                <h2>
                  i,m a digital <span>designer</span> studio connecting brands
                  to people through
                </h2>
              </div>
              <div className="text pb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="row">
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-2s">
                    <small>born In</small>
                    <b>New york</b>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-3s">
                    <small>experience</small>
                    <b>20+ Years</b>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-4 col-6">
                  <div className="about-info-item wow fadeInUp delay-0-4s">
                    <small>date of birth</small>
                    <b>27 June 1983</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-counter-wrap">
              <div className="row gap-40 justify-content-center">
                <div className="col-lg-5 col-6 mx-5">
                  <div className="counter-item counter-text-wrap mb-25 wow fadeInUp delay-0-2s">
                    <Counter end={8} extraClass={"k"} />
                    <span className="counter-title">project completed</span>
                  </div>
                </div>
                <div className="col-lg-5 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInDown delay-0-2s">
                    <Counter end={8} extraClass={"k"} />
                    <span className="counter-title">Awward achievmentd</span>
                  </div>
                </div>
                <div className="col-lg-5 col-6">
                  <div className="counter-item counter-text-wrap wow fadeInDown delay-0-2s">
                    <Counter end={80} extraClass={"k"} />
                    <span className="counter-title">Satisfied customers</span>
                  </div>
                </div>
              </div>
              <div className="counter-logo">
                <img
                  className="wow zoomIn delay-0-2s"
                  src="assets/images/shape/circle-logo.png"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
