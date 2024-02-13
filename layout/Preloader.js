"use client";
import { utils } from "@/utility";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    utils.preloader();
  }, []);

  return <div className="preloader" />;
};
export default Preloader;
