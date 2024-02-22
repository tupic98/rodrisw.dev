"use client";
import { utils } from "@/utility";
import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({
  children,
  header,
  footer,
  noFooter,
}) => {
  useEffect(() => {
    utils.animaiton();
  }, []);

  return (
    <div className="page-wrapper">
      <Header header={header}/>
      <SideBar />
      {children}
      {!noFooter && <Footer footer={footer} />}
    </div>
  );
};
export default Layout;
