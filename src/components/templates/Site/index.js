import React from "react";
import Footer1 from "@/components/organism/Footer1";
import Footer2 from "@/components/organism/Footer2";
import Nav1 from "@/components/organism/Nav1";
import Nav2 from "@/components/organism/Nav2";

const Site = ({ children }) => {
  return (
    <>
      <Nav1 />
      <Nav2 />
      {children}
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Site;
