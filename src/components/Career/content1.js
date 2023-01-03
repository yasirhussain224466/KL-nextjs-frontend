import React from "react";

const CallToAction = () => {
  return (
    <>
      <section className="c-c-1">
        <h2 data-wow-delay=".5s" className="color-font c-c-2 wow fadeInLeft">
          We help you grow your career and <br /> become one of the best in your
          field
        </h2>
        <p data-wow-delay=".5s" className="c-c-3 wow fadeInLeft">
          At our company, we believe that you should be able to work the way you
          want and grow your career at your own pace. That's why we offer a
          variety of opportunities for our employees to learn and develop their
          skills. We also believe in promoting from within, so you'll have
          plenty of chances to advance your career with us. We're proud to offer
          a supportive and collaborative environment where everyone can thrive.
        </p>
        <div className="c-c-4">
          <div className="c-c-5">
            <span data-wow-delay=".5s" className="c-c-6 wow fadeInLeft">
              <img
                alt="career-icon1"
                style={{ height: "40px", width: "50px" }}
                src="/img/Rec4.png"
              />
            </span>
            <span data-wow-delay=".5s" className="wow fadeInLeft">
              Develop robust & <br /> scalable solutions
            </span>
          </div>
          <div className="c-c-7">
            <span data-wow-delay=".5s" className="wow fadeInLeft c-c-6">
              <img
                alt="career-icon1"
                style={{ height: "40px", width: "40px" }}
                src="/img/Rec5.png"
              />
            </span>
            <span data-wow-delay=".5s" className="wow fadeInLeft">
              Full-time/flexible-time <br /> arrangements
            </span>
          </div>
          <div className="c-c-8">
            <span className="c-c-6 wow fadeInLeft" data-wow-delay=".5s">
              <img
                alt="career-icon1"
                style={{ height: "40px", width: "40px" }}
                src="/img/Rec6.png"
              />
            </span>
            <span className="wow fadeInLeft" data-wow-delay=".5s">
              Career planning & <br /> mentoring
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
