/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import Loader from "../../components/Loader";

const CallToAction = ({ img, IntroData }) => {
  return (
    <>
      <section
        className="call-action  sub-bg bg-img content1wh"
        style={{
          padding: "0px 0px 0px 0px",
          background: "url(/img/blog-img-1.svg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment:"fixed",
          // boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.7)",
          height:"50vh"
        }}
      >
        <div
          className="content1"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div className="col-lg-9" style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ padding: "20px 70px" }}>
                  <h1 style={{ fontSize: "42px" }} className="">
                    Blog
                  </h1>
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
