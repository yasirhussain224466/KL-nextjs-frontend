import React from "react";
import MobileApp from "../Services7/index";

const CallToAction = ({ img, content4 }) => {
  return (
    <>
      <section style={{ backgroundColor: "black" }}>
        <h2 className="color-font" style={{ textAlign: "center" }}>
          Key Features
        </h2>
        <br />
        <div
          data-wow-deplay=".5s"
          className="wow fadeIn"
          dangerouslySetInnerHTML={{
            __html: content4?.richText,
          }}
        ></div>
      </section>
    </>
  );
};

export default CallToAction;
