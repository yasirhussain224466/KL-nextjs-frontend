import React from "react";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";
import ContentHeaderDate from "../../data/sections/contact-header.json";

const ContactHeader = ({ sliderRef, blackStar , firstTitle, secondTitle, content }) => {
  return (
    <header data-wow-delay=".5s" className="wow fadeInleft">
      <div style={{display:"flex",margin:"30vh 0px 30vh 0px ", justifyContent:"center", alginItem:"center"}} className="">
        <div style={{textAlign:"center"}} className="text-center">
            <h1 style={{fontSize:"42px"}} className="color-font mb-10 fw-700">
                {firstTitle} <br />
                {secondTitle}
            </h1>
            <p>{content}</p>
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
