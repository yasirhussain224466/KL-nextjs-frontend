import React from "react";
import moment from "moment";
import ContactForm from "../blogs-contact-form";
import Link from "next/link";
import { server } from "../../config/server";
import Image from "next/image";
const Index = ({ BlogsDetailData, img }) => {
  return (
    <>
      <div style={{ paddingTop: "75px" }} className="container">
        <h1 className="color-font cardHeading">
          {BlogsDetailData?.cardHeading}
        </h1>
        <p style={{ color: "white" }}>{BlogsDetailData?.author}</p>
        <div style={{ fontSize: "10px", color: "grey" }}>
          {moment(BlogsDetailData?.createdAt).format("LL")}
        </div>
        <div data-wow-delay=".5s" className="card-flex wow fadeInUp">
          <div className="card-flex-inner">
            <div className="adjust-card-inner">
            <Image
              layout="fill"
              priority
              loading="eager"
              objectFit="contain"
              alt={BlogsDetailData?.cardImg?.data?.attributes?.alternativeText}
              src={`${process.env.URL}${BlogsDetailData?.cardImg?.data?.attributes?.url}`}
            />
            </div>
          </div>
        </div>
        <div data-wow-delay=".6s" className="card-flex-space wow fadeIn">
          <div className="card-flex-space-inner col-lg-8">
            <div style={{ width: "10%" }}>
              <a
                style={{ padding: "10px" }}
                target="_blank"
                href="https://www.facebook.com/kodexolabs"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <br />
              <a
                style={{ padding: "10px" }}
                target="_blank"
                href="https://www.linkedin.com/company/kodexolabs/"
                className="icon"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <br />
              <a
                style={{ padding: "10px" }}
                target="_blank"
                href="https://instagram.com/kodexolabs"
                className="icon"
                rel="noreferrer"
              >
                <i className="fab fa-brands fa-instagram"></i>
              </a>
            </div>
            <p style={{ width: "90%", paddingBottom: "20px" }}>
              {BlogsDetailData?.blogIntro}
            </p>
          </div>
          <div className="col-lg-4">
            <ContactForm />
          </div>
        </div>
        <div
          data-wow-deplay=".5s"
          className="wow fadeIn"
          dangerouslySetInnerHTML={{
            __html: BlogsDetailData?.blogBody,
          }}
        ></div>
        <div
          className="wow fadeIn"
          data-wow-deplay=".5s"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span style={{ padding: "5px" }}>Tags:</span>
          {BlogsDetailData?.tags?.data.map((currElem, index) => {
            return (
              <>
                <span
                  style={{
                    border: "1px solid #1dcdfe",
                    margin: "10px",
                    borderRadius: "6px",
                    padding: "8px",
                  }}
                  className="color-font"
                >
                  <Link
                    href={{
                      pathname: "/blogs",
                      query: {
                        tag: currElem?.attributes?.tag_id,
                      },
                    }}
                  >
                    {currElem?.attributes?.name}
                  </Link>
                </span>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Index;
