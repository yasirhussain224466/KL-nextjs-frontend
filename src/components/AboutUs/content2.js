// import React from "react";
import Split from "../Split";
import Link from "next/link";
import Loader from "../../components/Loader";
import Image from "next/image";
import image1 from "../../../public/img/about4.webp";

const CallToAction = () => {
  return (
    <>
      <section
        style={{
          padding: "10px 0px 30px 0px",
          background: "black",
        }}
      >
        <div className="ad">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="col-lg-5"
          >
            <div style={{ width: "400px" }}>
              <Image alt="Cover Image" priority loading="eager" src={image1} />
            </div>
          </div>
          <div className="col-lg-7" style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  data-wow-delay=".5s"
                  className="wow fadeInLeft"
                  style={{ padding: "70px 70px 20px 70px" }}
                >
                  <h2 style={{ fontSize: "28px" }} className="color-font">
                    Vision
                  </h2>
                  <p>
                    To use information technology to create a better society.
                  </p>
                </div>
                <div
                  data-wow-delay=".5s"
                  className="wow fadeInLeft"
                  style={{ padding: "20px 70px" }}
                >
                  <h2 style={{ fontSize: "28px" }} className="color-font">
                    Mission
                  </h2>
                  <p>
                    <span
                      style={{
                        height: "20px",
                        width: "20px",
                        color: "grey",
                        fontSize: "50px",
                      }}
                    >
                      .
                    </span>{" "}
                    Provide best-of-breed services for web design to enable
                    organizations to run their businesses and operations better.
                  </p>
                  <p>
                    <span
                      style={{
                        height: "20px",
                        width: "20px",
                        color: "grey",
                        fontSize: "50px",
                      }}
                    >
                      .
                    </span>{" "}
                    Deliver effective IT solutions and quality services to
                    enhance the competitive advantages of our clients.
                  </p>
                  <p>
                    <span
                      style={{
                        height: "20px",
                        width: "20px",
                        color: "grey",
                        fontSize: "50px",
                      }}
                    >
                      .
                    </span>{" "}
                    Maintain a sustainable social environment and be a socially
                    responsible corporate citizen.
                  </p>
                </div>
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
