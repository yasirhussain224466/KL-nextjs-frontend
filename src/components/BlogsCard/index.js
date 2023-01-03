import React from "react";
import Link from "next/link";
import { server } from "../../config/server";
import Image from "next/image";

const Index = ({ blogsData }) => {
  return (
    <>
      {blogsData?.data.map((currElem, key) => {
        return (
          <div
            style={{ marginBottom: "50px" }}
            data-wow-deplay=".10s"
            key={key}
            className="blog-flex wow fadeIn"
          >
            <div style={{width:"100%"}}>
              <div className="blog-box-1">
                <Image
                  layout="fill"
                  priority
                  loading="eager"
                  objectFit="contain"
                  src={`${process.env.URL}${currElem?.attributes?.cardImg?.data?.attributes?.url}`}
                  alt={
                    currElem?.attributes?.cardImg?.data?.attributes
                      ?.alternativeText
                  }
                />
              </div>
            </div>
            <div className="blog-box-2">
              <div className="blog-card-title">
                {currElem?.attributes?.cardTitle}
              </div>
              <h2 className="blog-card-heading color-font">
                {currElem?.attributes?.cardHeading}
              </h2>
              <div className="blog-card-author">
                {currElem?.attributes?.author}
              </div>
              <div>
                <Link href={`/blogs/${currElem?.attributes?.slug}`}>
                  <button
                    style={{
                      borderRadius: "10px",
                      padding: "4px",
                      width: "120px",
                      textAlign: "center",
                      fontSize: "19px",
                    }}
                    className="blog-card-button card-button color-font "
                  >
                    Read Blog
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Index;
