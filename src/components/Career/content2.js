import React from "react";
import Link from "next/link";

const CallToAction = () => {
  const benefits = [
    "Annual Bonus",
    "Annual Picinic",
    "Annual Leaves",
    "Punctuality bonus",
    "Annual Dinner",
    "Annual Trip",
    "Performance Increment",
    "Biannual Increment",
    "Awards and Certificates",
  ];
  return (
    <>
      <section
        style={{
          backgroundColor: "#000000",
          padding: "30px",
          borderTop: "1px solid grey",
        }}
      >
        <h2
          data-wow-delay=".5s"
          className="color-font wow fadeInLeft"
          style={{ fontSize: "28px", textAlign: "center" }}
        >
          Benefits
        </h2>

        <div
          data-wow-delay=".5s"
          className="wow fadeInLeft"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {benefits?.map((currElem, index) => {
            return (
              <div
                key={index}
                className="col-lg-4"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ padding: "20px" }}>{currElem}</span>
              </div>
            );
          })}
        </div>
      </section>
      <section
        data-wow-delay=".5s"
        className="wow fadeInLeft"
        style={{
          backgroundColor: "#000000",
          padding: "50px",
          borderTop: "1px solid grey",
          borderBottom: "1px solid grey",
        }}
      >
        <h2
          className="color-font"
          style={{ fontSize: "28px", textAlign: "center" }}
        >
          Jobs
        </h2>

        <div
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <p>
            {" "}
            Browse the following job openings at Kodexo Labs and apply for the
            relevant position.
          </p>
        </div>
        <div
          style={{
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="https://www.careers-page.com/kodexo-labs"  target="_blank" rel="noreferrer" >
            <button
              className="card-button color-font"
              style={{ padding: "10px", fontSize: "12px" }}
            >
              View Jobs Opening
            </button>
            </a>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
