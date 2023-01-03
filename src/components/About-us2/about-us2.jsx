/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import AboutUs2Date from "../../data/sections/about-us2.json";
import Image from "next/image";
import image1 from "../../../public/img/homeimage3.webp"
import image2 from "../../../public/img/homeimage5.webp"
import image3 from "../../../public/img/homeimage1.webp"


const AboutUs2 = () => {
  return (
    <div className="about section-padding">
      <div className="" style={{}}>
          <div
            className="container"
            style={{ paddingTop: "10px",paddingBottom:"40px", marginBottom: "0px" }}
          >
            <h2 style={{ textAlign: "center" }}>We Build Digital Products That Drive Success</h2>
            <p style={{ textAlign: "center", }}>
            Kodexo Labs is the leading software development company Pakistan, agitated to deliver better product development services and improve overall business efficiency. We have focused on developing intuitive mobile applications and custom web designs that cater to various needs while creating the best possible user experience.
            </p>
          </div>
        </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="img-mons sm-mb30">
              <div className="row">
                <div className="col-md-5 cmd-padding valign">
                  <div className="img1 wow imago" data-wow-delay=".5s">
                    <Image src={image1} alt="Home Image 2" />
                  </div>
                </div>
                <div className="col-md-7 cmd-padding">
                  <div className="img2 wow imago" data-wow-delay=".3s">
                    <Image src={image2} alt="Home Image 3" />
                  </div>
                  <div className="img3 wow imago" data-wow-delay=".8s">
                    <Image src={image3} alt="Home Image 4" />
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        
                      </div>
                      <div className="col-md-6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="content">
              <div className="sub-title">
                <h6>{AboutUs2Date.smallTitle}</h6>
              </div>
              <Split>
                <h3
                  className="words chars splitting main-title wow"
                  data-splitting
                >
                  We are the <br /> team of creative minds
                </h3>
              </Split>
              <Split>
                <p className="words chars splitting wow txt" data-splitting>
                We are Kodexo Labs. We create digital products tailored to your needs and make you stand out from the competition. We offer bespoke services for web design, digital solutions, and mobile app development services to many businesses. Our experience, tech expertise, and passion for excellence make us one of the most thriving software development companies today!
                </p>
              </Split>
              <div className="ftbox mt-30">
                <ul>
                  {AboutUs2Date.features.map((feature) => (
                    <li
                      key={feature.id}
                      className={`wow fadeIn ${feature.id == 2 ? "space" : ""}`}
                      data-wow-delay={feature.wowDelay}
                    >
                      <span
                        className={`icon color-font pe-7s-${feature.icon}`}
                      ></span>
                      <h6>
                        {feature.name.first} <br /> {feature.name.second}
                      </h6>
                      <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs2;
