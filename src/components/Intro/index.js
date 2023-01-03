import React from "react";
import Image from "next/image";

const CallToAction = ({ img, IntroData }) => {
  return (
    <>
      <section
        className="call-action  sub-bg bg-img content1wh"
        style={{
          padding: "70px 0px 60px 0px",
          backgroundImage: `url(${img ? img : "/img/patrn.svg"})`,
        }}
      >
        <div
          className="flex-wrap-intro"
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "100%",
          }}
        >
          <div className="" style={{ width: "100%" }}>
            <div
              className="color-font"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 className="caseStudyFont">{IntroData?.heading}</h1>
              <br />
              <br />
            </div>
            <div
              className="content1region"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <div>Region</div>
                <p>{IntroData?.region}</p>
              </div>
              <div style={{ paddingLeft: "80px" }}>
                <div>Industry</div>
                <p>{IntroData?.industry}</p>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="card-image">
              <Image
                alt={IntroData?.alt}
                layout="fill"
                priority
                loading="eager"
                objectFit="contain"
                src={`${process.env.URL}${IntroData?.image}`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
