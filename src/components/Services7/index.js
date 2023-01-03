import React from "react";
import featuresData from "../../data/sections/features.json";
const Services = ({ style, lines, title, para }) => {
  let Arr = [];
  if (title?.data.length === para?.data.length) {
    for (let i = 0; i < title?.data.length; i++) {
      Arr.push({
        title: title?.data[i]?.attributes?.title,
        para: para?.data[i]?.attributes?.para,
      });
    }
  }
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
      className={`services bords  ${
        style === "4item" ? "lficon" : lines ? "" : "pt-0"
      }`}
    >
      <div className="container">
        <div className="row">
          {Arr.map((currElem, index) => {
            return (
              <div
                key={index}
                className="col-lg-6 wow fadeInLeft"
                data-wow-delay=".5"
              >
                <div className="item-box">
                  <div>
                  </div>
                  <div className="cont">
                    <h5 className="fontSize">{currElem?.title}</h5>

                    <p className={className1 + 1}>{currElem?.para}</p>
                  </div>
                </div>
              </div>
            );
          })}
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


