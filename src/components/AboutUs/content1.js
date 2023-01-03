import Image from "next/image";
import React from "react";
import Image1 from "../../../public/img/about1.webp";

const CallToAction = ({ content1 }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <h2
          data-wow-delay=".5s"
          className="underline color-font text-balance wow fadeInLeft"
        >
          Technologies We Work With
        </h2>
      </div>
      <div Style={{ width: "100%" }}>
        <div
          // className="set-image"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "100px",
          }}
        >
          <div className="setImage">
            <Image
              alt="about-us"
              priority
              loading="eager"
              data-wow-delay=".5s"
              className="wow fadeInLeft"
              src={Image1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
