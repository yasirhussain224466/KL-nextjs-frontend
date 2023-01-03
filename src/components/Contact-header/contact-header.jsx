import React from "react";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";
import ContentHeaderDate from "../../data/sections/contact-header.json";
import HomeImage from "../../../public/img/newbanner2.png"
import Image from "next/image";

const ContactHeader = ({ sliderRef, blackStar }) => {
  return (
    <header ref={sliderRef} className="pages-header  valign position-re">
      <div className="container">
        <div className="row justify-content-center">
          <Image  src={HomeImage} alt="home image" />
        </div>
      </div>
      <Particles
        id="particles-js"
        options={blackStar ? particlesBlackConfig : particlesConfig}
      />

      <div className="circle-color">
        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      </div>
    </header>
  );
};

export default ContactHeader;
