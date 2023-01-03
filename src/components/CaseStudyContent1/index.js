import React from "react";
import Image from "next/image";

const CallToAction = ({ content1 }) => {
  return (
    <>
      <section
        className="call-action  sub-bg bg-img padding position-re"
        style={{
          backgroundColor: "black",
        }}
      >
        <div
          className="content2flex"
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "100%",
          }}
        >
          <div style={{ width: "100%" }}>
            <div
              className="color-font"
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <h1 style={{ fontSize: "32px" }}>Abstract</h1>
              <br />
              <br />
            </div>
            <div
              className="content2flex"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <div>
                <p className="wow fadeIn" data-wow-delay=".10s">
                  {content1?.abstractText}
                </p>
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
            <div className="wow fadeIn imageSizeStudies" data-wow-delay=".10s">
              <Image
                layout="fill"
                priority
                loading="eager"
                alt={content1?.alt}
                src={`${process.env.URL}${content1?.image}`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
