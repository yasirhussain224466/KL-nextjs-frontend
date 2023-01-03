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
      className={`services bords ${
        style === "4item" ? "lficon" : lines ? "" : "pt-0"
      }`}
    >
      <div className="container">
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
                  </div>
                  <div className="cont">
                    <h5 className="fontSize">Aiming for perfection</h5>
                    <p className={className1 + 1}>
                      We are committed to the project from the beginning to the end, and we constantly strive to go above and beyond. We have a desire for both internal and external progress since we are inherently curious.
                    </p>
                    <br/>
                    <br/>
                  </div>
                </div>
              </div>
              <div
                key={2}
                className="col-lg-6 wow fadeInLeft"
                data-wow-delay=".7"
              >
                <div className="item-box">
                  <div className="cont">
                    <h5 className="fontSize">
                    Approach to tackling problems
                    </h5>
                    <p className={className2 + 2}>
                    We are not frightened of issues. On the contrary, we relish challenges! We never try to assign blame; instead, we constantly search for the best option.
                    </p>
                    <br/>
                  </div>
                </div>
              </div>
              <div
                key={3}
                className="col-lg-6 wow fadeInLeft"
                data-wow-delay=".5"
              >
                <div className="item-box">
                  <div className="cont">
                    <h5 className="fontSize">Confidence and accountability</h5>
                    <p className={className3 + 3}>
                    We prioritize context over control and offer working flexibility within predetermined parameters. There is no requirement for regular supervision because we believe in one another to produce high-quality work.
                    </p>
                  </div>
                </div>
              </div>
              <div
                key={4}
                className="col-lg-6 wow fadeInLeft"
                data-wow-delay=".5"
              >
                <div className="item-box">
                  <div className="cont">
                    <h5 className="fontSize">A spirit of entrepreneurship</h5>
                    <p className={className4 + 4}>
                    We remain prudent. We can recognize unconventional approaches and undiscovered routes and are not hesitant to take them. Never accepting the default situation, we challenge the status quo.
                    </p>
                  </div>
                </div>
              </div>
              <div
                key={4}
                className="col-lg-6 wow fadeInLeft"
                data-wow-delay=".5"
              >
                <div className="item-box">
                  <div className="cont">
                    <h5 className="fontSize">Culture of communication and feedback</h5>
                    <p className={className4 + 4}>
                    We constantly take out the middlemen and steer away from corporate talk in all of our communication, keeping it simple, plain, and direct. To foster an environment conducive to development and recognition, we harness the power of feedback.
                    </p>
                  </div>
                </div>
              </div>
              <div
                key={4}
                className="col-lg-6 wow fadeInLeft"
                data-wow-delay=".5"
              >
                <div className="item-box">
                  <div className="cont">
                    <h5 className="fontSize">Each of us is a unique human being</h5>
                    <p className={className4 + 4}>
                    Although we are software professionals, we are people, not machines. We create a welcoming and cozy work environment. We value diversity and inclusiveness and always keep in mind that every one of us is a unique individual with unique needs, desires, and motivations.
                    </p>
                    <br />
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