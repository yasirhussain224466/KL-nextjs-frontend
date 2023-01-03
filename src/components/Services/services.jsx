import React from "react";
import featuresData from "../../data/sections/features.json";
import Split from "../Split";
const Services = ({ style, lines }) => {
  let className1 = "featureContent";
  let className2 = "featureContent";
  let className3 = "featureContent";
  let className4 = "featureContent";

  const [state1, setState1] = React.useState(false);
  const [state2, setState2] = React.useState(false);
  const [state3, setState3] = React.useState(false);
  const [state4, setState4] = React.useState(false);

  if (state1 === true) {
    className1 = "";
  }
  if (state2 === true) {
    className2 = "";
  }
  if (state3 === true) {
    className3 = "";
  }
  if (state4 === true) {
    className4 = "";
  }
  return (
    <section
      className={`services bords section-padding ${
        style === "4item" ? "lficon" : lines ? "" : "pt-0"
      }`}
    >
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center ">
              <h2
                style={{ fontSize: "32px" }}
                className="wow fadeIn"
                data-wow-delay=".4s"
              >
                OUR Expertise
              </h2>
              <h3 style={{ fontSize: "34px" }} 
                 data-wow-delay=".5s" className="wow color-font words chars fadeIn main-title">
                We Provide An Analytics-Driven Software Development Services
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {style === "4item" ? (
            <>
              <div
                key={1}
                className="col-lg-6 wow fadeInLeft"
                data-wow-delay=".5"
              >
                <div className="item-box">
                  <div>
                    <span className="icon pe-7s-paint-bucket"></span>
                  </div>
                  <div className="cont">
                    <h5 className="fontSize">Custom Product Development</h5>
                    <p className={className1 + 1}>
                      Our proactive developers are ready to provide the
                      comprehensive array of mobile app development services to
                      our clients under the most advanced technologies
                    </p>
                  </div>
                </div>
              </div>
              <div
                key={2}
                className="col-lg-6 wow fadeInLeft"
                data-wow-delay=".7"
              >
                <div className="item-box">
                  <div>
                    <span className="icon pe-7s-phone"></span>
                  </div>
                  <div className="cont">
                    <h5 className="fontSize">
                      Website Development 
                    </h5>
                    <p className={className2 + 2}>
                       Our dedicated web designs and development solutions have
                      been proven time and time again to bring businesses the
                      financial success they need to thrive. 
                    </p>
                  </div>
                </div>
              </div>
              <div
                key={3}
                className="col-lg-6 wow fadeInLeft"
                data-wow-delay=".5"
              >
                <div className="item-box">
                  <div>
                    <span className="icon pe-7s-display1"></span>
                  </div>
                  <div className="cont">
                    <h5 className="fontSize">E-Commerce Website Development</h5>
                    <p className={className3 + 3}>
                      Our highly-skilled team offers dedicated e-commerce
                      website design with development solutions to help you grow
                      your business and dreams
                    </p>
                    <br />
                  </div>
                </div>
              </div>
              <div
                key={4}
                className="col-lg-6 wow fadeInLeft"
                data-wow-delay=".5"
              >
                <div className="item-box">
                  <div>
                    <span className="icon pe-7s-diskette"></span>
                  </div>
                  <div className="cont">
                    <h5 className="fontSize">Hybrid Mobile Application Development</h5>
                    <p className={className4 + 4}>
                     Your enterprise application needs are not an easy task.
                      Hybrid apps that work on all platforms, devices, and
                      browsers are one of our expertise.
                    </p>
                    <br />
                  </div>
                </div>
              </div>
            </>
          ) : (
            // max item 3 in Home page
            featuresData.slice(0, 3).map((feature) => (
              <div
                key={feature.id}
                className="col-lg-4 wow fadeInLeft"
                data-wow-delay=".5s"
              >
                <div className="item-box md-mb50">
                  <span className={`icon ${feature.icon}`}></span>
                  <h4>{feature.title}</h4>
                  <p className="featureContent">{feature.content}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {lines ? (
        <>
          <div className="line top left"></div>
          <div className="line bottom right"></div>
        </>
      ) : null}
    </section>
  );
};

export default Services;
