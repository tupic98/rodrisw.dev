import Link from "next/link";

const items = [
  {
    id: 1,
    name: "Vue.js",
    image: "assets/images/skills/vue.png",
  },
  {
    id: 2,
    name: "Nuxt.js",
    image: "assets/images/skills/nuxt.png",
  },
  {
    id: 3,
    name: "React",
    image: "assets/images/skills/react.png",
  },
  {
    id: 4,
    name: "Wordpress",
    image: "assets/images/skills/wordpress.png",
  },
  {
    id: 5,
    name: "Shopify",
    image: "assets/images/skills/shopify.png",
  },
  {
    id: 6,
    name: "TailwindCSS",
    image: "assets/images/skills/tailwind.png",
  },
  {
    id: 7,
    name: "Python",
    image: "assets/images/skills/python.png",
  },
  {
    id: 8,
    name: "Photoshop",
    image: "assets/images/skills/photoshop.png",
  },
  {
    id: 9,
    name: "Supabase",
    image: "assets/images/skills/supabase.png",
  },
  {
    id: 10,
    name: "PostgreSQL",
    image: "assets/images/skills/postgres.png",
  },
  {
    id: 11,
    name: "Docker",
    image: "assets/images/skills/docker.png",
  },
  {
    id: 12,
    name: "Node.js",
    image: "assets/images/skills/node.png",
  },
];

const Skill = () => {
  return (
    <section id="skills" className="skill-area rel z-1">
      <div className="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-5">
              <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <h2>
                    My <span>Skills </span>
                  </h2>
                  <p>
                    Just a list of some of the skills and technologies I've worked with on my professional life.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="skill-items-wrap">
                <div className="row">
                  {items.map((item) => (
                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6" key={item.name}>
                      <div className="skill-item wow fadeInUp delay-0-2s">
                        <img src={item.image} alt="Skill" />
                        <h5>{item.name}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;

export const Skill2 = () => {
  return (
    <section
      id="skills"
      className="skill-area-two rel z-1 pt-130 rpt-100 pb-105 rpb-70"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="skill-content-two rel z-2 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-60">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" /> professional skill of me
                </span>
                <h2>professional skill</h2>
              </div>
              <div className="row justify-content-between align-items-center">
                <div className="col-8">
                  <img src="assets/images/skills/skill-man.png" alt="Skill" />
                </div>
                <div className="col-4">
                  <img src="assets/images/shape/skill-arrow.png" alt="Arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="skill-wrap-two">
              <div className="row gap-40">
                {items.map(
                  (item) =>
                    item.id <= 6 && (
                      <div className="col-md-4 col-sm-4 col-6" key={item.id}>
                        <div className="skill-item-two wow fadeInUp delay-0-3s">
                          <div className="icon-percent">
                            <img src={item.image} alt="Skill" />
                            <span className="percent">{item.value}%</span>
                          </div>
                          <h5 className="title">{item.name}</h5>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
