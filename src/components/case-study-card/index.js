/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Split from "../Split";
import { server } from "../../config/server";

const Index = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <div>
        {data?.data.map((currElem, index) => {
          const setStateURL = () => {
            router.push(
              {
                pathname: `/case-studies/${currElem?.attributes?.caseStudyUrl}`,
              },
              `/case-studies/${currElem?.attributes?.caseStudyUrl}`
            );
          };
          return (
            <div
              key={index}
              className={`case-study-card flex-wrap-card ${
                index % 2 ? "rowReverse" : ""
              }`}
            >
              <div className="inner-card cmd-padding valign">
                <div className="img1 wow imago " data-wow-delay=".4s">
                  <div className="cardImageSize">
                    
                    <Image
                      alt={
                        currElem?.attributes?.cardImage?.data?.attributes
                          ?.alternativeText
                      }
                      layout="fill"
                      priority
                      loading="eager"
                      src={`${process.env.URL}${currElem?.attributes?.cardImage?.data?.attributes?.url}`}
                    />
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div>
                  <h2 className="color-font fontSize">
                    <div style={{ textAlign: `${index % 2 ? "" : "end"}` }}>
                      <b>{currElem?.attributes?.caseStudyName}</b>
                    </div>
                    <div style={{ textAlign: `${index % 2 ? "" : "end"}` }}>
                      <b> {currElem?.attributes?.appType} </b>
                    </div>
                  </h2>
                  <p
                    style={{ textAlign: `${index % 2 ? "" : "end"}` }}
                    className="card-text"
                  >
                    {currElem?.attributes?.title}
                  </p>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: `${index % 2 ? "" : "flex-end"}`,
                    }}
                  >
                    <Link href={`/case-studies/${currElem?.attributes?.slug}`}>
                      <button
                        onClick={() => setStateURL}
                        className="card-button color-font"
                      >
                        View Case Study
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Index;
