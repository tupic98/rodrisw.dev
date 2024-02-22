import Link from "next/link";

const Resume = () => {
  return (
    <section id="resume" className="resume-area pt-130 rpt-100 rel z-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="big-icon mt-85 rmt-0 rmb-55 wow fadeInUp delay-0-2s">
              <i className="flaticon-asterisk-1" />
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-xl-8 col-lg-9">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <h2>
                    Experience
                  </h2>
                </div>
              </div>
            </div>
            <div className="resume-items-wrap">
              <div className="row justify-content-between">
                <div className="col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-3s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">2023 - Present</span>
                      <h4>Web Designer & Developer</h4>
                      <span className="company">The Outdoor Plus</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">2022 - 2022</span>
                      <h4>Software Developer</h4>
                      <span className="company">TRIBUS</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">2021 - 2022</span>
                      <h4>Temporary Data Analyst</h4>
                      <span className="company">Amazon Warehouse</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">2021 - 2021</span>
                      <h4>Frontend Developer</h4>
                      <span className="company">Fitune (Contract)</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">2019 - 2021</span>
                      <h4>Frontend Developer</h4>
                      <span className="company">Elaniin Tech Company</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">2018 - 2019</span>
                      <h4>Jr. Web Developer</h4>
                      <span className="company">Red 5G S.A de C.V</span>
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
export default Resume;

export const Resume2 = () => {
  return (
    <section
      id="resume"
      className="resume-area-two rel z-1 pt-185 rpt-145 pb-140 rpb-100"
    >
      <div className="container">
        <div className="row align-items-center pb-20">
          <div className="col-lg-8">
            <div className="section-title mb-35 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                My Experience
              </span>
              <h2>Work &amp; Education</h2>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end">
            <Link legacyBehavior href="/contact">
              <a className="theme-btn mb-35">Contact Me</a>
            </Link>
          </div>
        </div>
        <div className="row no-gap">
          <div className="col-xl-7">
            <div className="resume-box-wrap design-two">
              <div className="timeline-heading wow fadeInUp delay-0-4s">
                <span className="title">work</span>
                <div className="arrow">
                  <i className="far fa-arrow-down" />
                </div>
              </div>
              <div className="resume-box wow fadeInLeft delay-0-2s">
                <div className="resume-column">
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2023 - Present{" "}
                      </span>
                      <h5 className="title">Web Developer</h5>
                      <h6>The Outdoor Plus</h6>
                      <h6>Ontario, CA.</h6>
                      <p>
                        Manage company e-commerce platforms, driving enhancements and SEO strategies for increased traffic within WooCommerce and Shopify systems.
                        Lead development of software solutions using Vue.js, TailwindCSS and Supabase, improving dealer workflows and real-time pricing. Pioneered data collection and analysis, boosting sales efficiency through Python scripting.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2022 - 2022{" "}
                      </span>
                      <h5 className="title">Software Developer</h5>
                      <h6>TRIBUS</h6>
                      <h6>Remote - US</h6>
                      <p>
                        Primarily focused on front-end development for the company's software/CRM, tailoring custom websites for clients, brokers, and agents using Vue.js, Adonis.js, and Nuxt.js. Collaborated with the development team to address tickets, features, and bugs in alignment with client and business requirements. Reviewed and approved pull requests from fellow developers for new features and bug fixes.
                      </p>
                    </div>
                  </div> 
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2021 - 2022{" "}
                      </span>
                      <h5 className="title">Temp. Data Analyst</h5>
                      <h6>Amazon ONT8</h6>
                      <h6>Moreno Valley, CA</h6>
                      <p>
Developed and maintained tools for ONT8 Warehouse and IXD Regional Network, collaborating with operations teams. Collected and analyzed data from various sources to generate operational reports. Designed queries and provided analytical insights to improve data management efficiency and tool performance.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2021 - 2021{" "}
                      </span>
                      <h5 className="title">Frontend Engineer</h5>
                      <h6>Fitune - Fitu Technologies (Contract)</h6>
                      <h6>Remote - El Salvador</h6>
                      <p>
                        Transitioned from frontend developer to lead frontend developer, responsible for reviewing Pull Requests and ensuring ticket accuracy. Led estimation for projects, including implementing a custom landing builder and migrating from Vue to Nuxt/Tailwind for SSR, SEO, and faster prototyping. Utilized a tech stack of Ruby, Vue, SASS, and HAML. Oversaw code reviews, estimations, and collaborated with the development team to develop, deploy, and maintain admin and web applications.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2019 - 2021{" "}
                      </span>
                      <h5 className="title">Frontend Developer</h5>
                      <h6>Elaniin Tech Company</h6>
                      <h6>El Salvador</h6>
                      <p>
                        Led development of various WebApps and Landing pages using Vue.js and TailwindCSS, later transitioning to Nuxt.js for improved SEO. Collaborated on projects with both JavaScript and TypeScript. Managed end-to-end processes from planning and development to deployment and maintenance. Provided adept troubleshooting and translated client requirements into application designs. Demonstrated proficiency in a wide range of frameworks and technologies including Vue, Nuxt, TailwindCSS, SCSS, Vuetify, Buefy, Antlers, and Statamic.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2018 - 2019{" "}
                      </span>
                      <h5 className="title">Jr. Web Developer</h5>
                      <h6>Red 4G S.A de C.V (Red 5G)</h6>
                      <h6>El Salvador</h6>
                      <p>
                        Responsible for developing the Front-End of a custom CRM system using Vue.js, Vuetify, Vuex, and TypeScript. Collaborated closely with the development team and managers to align with project requirements and business specifications. Implemented efficient CI/CD workflows using GitLab for team projects.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="resume-line">
                  <span className="resume-dots" />
                  <span className="resume-dots" />
                  <span className="resume-dots" />
                  <span className="resume-dots" />
                  <span className="resume-dots" />
                  <span className="resume-dots" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="resume-box-wrap mt-110 rmt-75">
              <div className="timeline-heading wow fadeInDown delay-0-4s">
                <span className="title">study</span>
                <div className="arrow">
                  <i className="far fa-arrow-down" />
                </div>
              </div>
              <div className="resume-box wow fadeInRight delay-0-2s">
                <div className="resume-column">
                  <div className="timeline-item">
                    <div className="resume-content">
                      <span className="duration">
                        <i className="far fa-calendar-alt" /> 2016 - 2021
                      </span>
                      <h5 className="title">Computer Science</h5>
                      <h6>Central American University</h6>
                      <h6>El Salvador</h6>
                    </div>
                    {/* <a href="#" className="details-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a> */}
                  </div>
                </div>
                <div className="resume-line">
                  <span className="resume-dots" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
