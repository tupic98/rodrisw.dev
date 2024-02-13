"use client";
import { utils } from "@/utility";
import { useEffect } from "react";

const ScrollTop = () => {
  useEffect(() => {
    utils.scrollTop();
  }, []);

  return (
    <a href="#" className="scroll-top scroll-to-target" data-target="html">
      <span className="fas fa-angle-double-up" />
    </a>
  );
};
export default ScrollTop;
