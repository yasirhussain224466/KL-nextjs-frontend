/* eslint-disable @next/next/no-img-element */
import React from "react";

const Intro2 = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className="slider-st valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 valign">
            <div className="cont md-mb50">
              <div className="sub-title mb-2">
                <h6 style={{fontSize:"14px", color: "black" }}>Create. Inspire. Deliver.</h6>
              </div>
              <h1 style={{fontSize:"43px"}} className="textSize subTitle mb-10 fw-600">
                Business Consulting & Software Development Agency
              </h1>
              <p>
                It is what defines us. Kodexo Labs pursue technological
                advancements and innovative new solutions to help your business
                become more successful.
              </p>
              {/* <Link href="/about/about-dark">
                <a className="butn bord curve mt-30">
                  <span>About Us</span>
                </a>
              </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            {/* <div className="img">
                <img src="/img/slid/001.jpg" alt="" />
              </div> */}
          </div>
        </div>
        <div className="line bottom left"></div>
      
      </header>
  );
};

export default Intro2;
