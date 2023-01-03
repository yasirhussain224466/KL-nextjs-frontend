import React from "react";
import Split from "../Split";
import Link from "next/link";
import Loader from "../../components/Loader";
import Content5 from "./content5.js";

const CallToAction = () => {
  return (
    <>
      <section
        data-wow-delay=".5s"
        className="call-action  sub-bg bg-img content1wh wow fadeInLeft"
        style={{
          padding: "10px 0px 10px 0px",
          background: "black",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px 0 10px 0",
          }}
        >
          <h2 style={{ fontSize: "29px" }} className="underline color-font">
            Values
          </h2>
        </div>
      </section>
      <Content5 style="4item" />
    </>
  );
};

export default CallToAction;
