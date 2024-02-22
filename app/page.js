import About from "@/components/About";
import Contact from "@/components/Contact";
import { Hero2 } from "@/components/Hero";
import Projects from "@/components/Projects";
import { Resume2 } from "@/components/Resume";
import Skill from "@/components/Skill";
import Layout from "@/layout/Layout";
import ScrollTop from "@/components/ScrollTop";
import Headline from "@/components/Headline";

export default function Home() {
  return (
    <Layout footer={2}>
      {/* Hero Section Start */}
      {/* <Hero /> */}
      <Hero2 />
      {/* Hero Section End */}
      {/* About Area start */}
      <About />
      {/* About Area end */}
      {/* Resume Area start */}
      <Resume2 />
      <Headline />
      {/* Resume Area end */}
      {/* Skill Area start */}
      <Skill />
      {/* Skill Area end */}
      {/* Projects Area start */}
      <Projects />
      {/* Projects Area end */}
      {/* Contact Area start */}
      <Contact />
      {/* Contact Area end */}
      <ScrollTop />
    </Layout>
  );
}
