"use client";

import Isotope from "isotope-layout";
import Link from "next/link";
import ImageFallback from "./ImageWithFallback";
import { Fragment, useEffect, useRef, useState } from "react";
const ProjectGridIsotop = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".project-masonry-active", {
        itemSelector: ".item",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");
  return (
    <Fragment>
      <div className="row project-masonry-active">
        <div className="col-lg-6 item branding development">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <ImageFallback src={"/assets/images/projects/GrupoAutofacil.webp"} fallbackSrc={"/assets/images/projects/GrupoAutofacil.jpg"} width="2000" height="500" alt="Grupo Autofacil" />
              <Link legacyBehavior href="https://www.grupoautofacil.com/" rel="noopener noreferrer" target="_blank">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Website Development - Nuxt.js</span>
              <h3>
                <Link legacyBehavior href="https://www.grupoautofacil.com/el-salvador" rel="noopener noreferrer" target="_blank">
                  Grupo Autofácil CentralAmerica Website
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item design marketing graphics">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <ImageFallback src={"/assets/images/projects/outdoorplus.webp"} fallbackSrc={"/assets/images/projects/outdoorplus.jpg"} width="2000" height="500" alt="The Outdoor Plus" />
              <Link legacyBehavior href="https://theoutdoorplus.com/" rel="noopener noreferrer" target="_blank">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Website Development - Wordpress</span>
              <h3>
              <Link legacyBehavior href="https://theoutdoorplus.com/" rel="noopener noreferrer" target="_blank">
                The Outdoor Plus Website
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item development graphics">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <ImageFallback src={"/assets/images/projects/Mercandu.webp"} fallbackSrc={"/assets/images/projects/Mercandu.jpg"} width="2000" height="500" alt="Mercandu" />
              <Link legacyBehavior href="https://mercandu.com/" rel="noopener noreferrer" target="_blank">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Website Development - Nuxt.js</span>
              <h3>
                <Link legacyBehavior href="https://mercandu.com/" rel="noopener noreferrer" target="_blank">
                  Mercandu E-Commerce
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item design development apps">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <ImageFallback src={"/assets/images/projects/Transexpress_sv.webp"} fallbackSrc={"/assets/images/projects/Transexpress_sv.jpg"} width="2000" height="500" alt="Transexpress" />
              <Link legacyBehavior href="https://www.transexpress.com.sv/" rel="noopener noreferrer" target="_blank">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Website Development - Statamic</span>
              <h3>
                <Link legacyBehavior href="https://www.transexpress.com.sv/" rel="noopener noreferrer" target="_blank">
                  Transexpress El Salvador Website
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProjectGridIsotop;
