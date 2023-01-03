import Image from "next/image";
import React from "react";

const CallToAction = ({ content6 }) => {
  console.log(content6?.technologyStackPara?.data);
  return (
    <>
      <section className="padding" style={{ backgroundColor: "#000000" }}>
        <h3 className="color-font justify-content-center">Technology Stack</h3>
        <br />
        <br />
        <p className="justify-content-center">
          In the journey of this project development, we utilized several
          cutting-edge tools and technologies. A few of these tools and
          technologies are mentioned below:
        </p>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {content6?.technologyStackPara?.data?.map((currElem) => {
            console.log(currElem);
            return (
              <div
                key={currElem?.id}
                style={{ paddingRight: "30px" }}
                className="wow fadeInUp"
                data-wow-delay=".10s"
              >
                <div className="m-logo">
                  <Image
                    layout="fill"
                    priority
                    loading="eager"
                    alt={currElem?.attributes?.alternativeText}
                    src={`${process.env.URL}${currElem?.attributes?.url}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CallToAction;
