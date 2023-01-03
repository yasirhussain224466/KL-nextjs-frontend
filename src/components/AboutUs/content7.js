import React from "react";
import Link from "next/link";

const Content7 = () => {
  return (
    <>
      <div
        data-wow-delay=".5s"
        style={{
          backgroundColor: "#171717",
          padding: "25px 10px",
          flexWrap: "wrap",
        }}
        className="flex-around wow fadeInLeft"
      >
        <div style={{ marginBottom: "10px", marginTop: "10px" }}>
          <h2 style={{ fontSize: "20px" }}>Let’s Make it Happen</h2>
        </div>
        <div
          style={{
            marginBottom: "10px",
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            {" "}
            Send us a message so that we can put our thinking caps on, together.{" "}
          </p>
        </div>
        <div style={{ marginBottom: "10px", marginTop: "10px" }}>
          <Link href="/contact-us">
            <button
              className=" card-button color-font"
              style={{ padding: "5px", borderRadius: "6px" }}
            >
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Content7;
