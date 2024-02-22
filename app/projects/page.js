import PageBanner from "@/components/PageBanner";
import Layout from "@/layout/Layout";
import Link from "next/link";

import dynamic from "next/dynamic";
const ProjectGridIsotop = dynamic(
  () => import("@/components/ProjectGridIsotop"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Projects Grid",
};

const ProjectsPage = () => {
  return (
    <Layout>
      <PageBanner pageName={"Projects I've Contributed To"} />
      <section className="projects-area pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <ProjectGridIsotop />
        </div>
      </section>
    </Layout>
  );
};
export default ProjectsPage;
