/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import Loader from "../../components/Loader";

const CallToAction = ({ img, IntroData }) => {
  return (
    <>
      <section
        className="flex-center"
        style={{
          background: "url(/img/blog4.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment:"fixed",
          marginTop: "40px",
          padding:"10vh 0 10vh 0"
        }}
      >
        <div
          className="content1 flex-center">
          <div className="content1region ">
            <div className="flex-center">
              <div>
                <p className="text-center">
                  Looking to develop custom software for your business? Learn
                  how our mobile and web experts can help.
                </p>
              </div>
            </div>
            <div className="flex-center mr-20">
              <a href="">
              <button className="contact-us-button">
                Learn More.
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
