/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import Loader from "../../components/Loader";
import Image from "next/image";
import image1 from "../../../public/img/about3.webp"

const CallToAction = ({ img, IntroData }) => {
  return (
    <>
      <section
        className="sub-bg bg-img "
        style={{
          padding: "70px 0px 0px 0px",
          background: "black",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            className="card-image col-lg-5"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div data-wow-delay=".5" className="container wow fadeInLeft">
              <Image
                alt="Cover Image"
                priority
                loading="eager"
                height="400px"
                width="470px"
                src={image1}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          padding: "30px 0px 30px 0px",
          background: "black",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "70px 0 40px 0",
          }}
        >
          <h2
            style={{ fontSize: "29px" }}
            data-wow-delay=".5s"
            className="underline color-font wow fadeInLeft"
          >
            Who Are We?
          </h2>
        </div>
        <p
          data-wow-delay=".5s"
          className="wow fadeInLeft"
          style={{ alignItem: "center", padding: "0px 50px" }}
        >
          In May 2021, Kodexo Labs started as a simple community-building
          software development agency Pakistan and has transformed into a
          fully-fledged IT company with hundreds of clients around the world. To
          help you expand your business, operate more effectively, and ensure
          your success both now and in the future, we want to transform our love
          of technology into enlightening software and analysis, helpful client
          guides, and useful resources
        </p>
      </section>
    </>
  );
};

export default CallToAction;
