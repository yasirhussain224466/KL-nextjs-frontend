/* eslint-disable @next/next/no-img-element */
import React from "react";

const CallToAction = () => {
  return (
    <>
      <section
        className="call-action  sub-bg bg-img background-image-cover-2"
        style={{
          background: "url(/img/about-section-background.png)",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <br />
        <div className="container content1 flex-center-start">
          <div className="col-lg-12">
            <div className="flex-center">
              <div>
                <div>
                  <h1
                    data-wow-delay=".5s"
                    className="fadeInUp wow"
                    style={{ fontSize: "35px" }}
                  >
                    Our Passionate Creatives Experienced In Software Development
                    Services.
                  </h1>
                </div>
                <p data-wow-delay=".6s" className="fadeInUp wow">
                  We have faith that everything is conceivable. The goal of our
                  team of skilled software engineers, developers, UX architects,
                  designers, and QA engineers is to create software that has an
                  impact. We support customization that meets your company's
                  demands. We maximize the utilization of technology combined
                  with human potential with the main objective of serving the
                  world.
                </p>
                <p data-wow-delay=".7s" className="fadeInUp wow">
                  Our experts and advisors carefully choose those solutions that
                  support a cunning policy strategy and guarantee a long-term
                  competitive edge. Our primary areas of expertise include
                  custom site design, software development for web-based
                  solutions, and the creation of mobile applications. We have a
                  track record of beating impossible deadlines, and our mission
                  is to produce top-notch work quickly and within budget. From
                  product development services to mobile app development
                  services, we work with clients on difficult projects and are
                  considered among Pakistan's best software development
                  agencies.
                </p>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
