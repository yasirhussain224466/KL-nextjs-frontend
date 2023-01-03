import Image from "next/image";
import React from "react";
import image1 from "../../../public/img/about2.webp"

const Index = () => {
  return (
    <>
      <div
        data-wow-delay=".5s"
        style={{ marginTop: "5vh" }}
        className="center-content wow fadeInLeft"
      >
        <h2 className="color-font underline">Our Development Process</h2>
      </div>
      <div data-wow-delay=".6s" className="center-content wow fadeInLeft">
        <div className="custom-img">
          <Image loading="eager" priority alt="aboutus"  src={image1} />
        </div>
      </div>
    </>
  );
};

export default Index;
