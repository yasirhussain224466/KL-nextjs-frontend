import React from "react";

const CallToAction = ({ img, content3 }) => {
  return (
    <>
      {content3?.challenges ? (
        <section className="padding" style={{ backgroundColor: "#000000" }}>
          <div
            style={{
              backgroundColor: "#101010",
              borderRadius: "30px",
              padding: "20px",
            }}
            className="wow fadeIn"
            data-wow-delay=".5s"
          >
            <h3 className="color-font underline ">Client&apos;s Challenges</h3>
            <p style={{ paddingTop: "9px" }}>{content3?.challenges}</p>
          </div>
        </section>
      ) : (
        ""
      )}
      {content3?.solutions ? (
        <section
          className="padding"
          style={{
            backgroundColor: "#000000",
            paddingTop: "30px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              backgroundColor: "#101010",
              borderRadius: "30px",
              padding: "20px",
            }}
            className="wow fadeIn"
            data-wow-delay=".6s"
          >
            <h3 className="color-font underline ">Our Solution</h3>
            <p style={{ paddingTop: "9px" }}>{content3?.solutions}</p>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default CallToAction;
