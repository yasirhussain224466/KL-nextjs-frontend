"use strict";
import React, { useState } from "react";
import Menu from "./data";
import Link from "next/link";
import Image from "next/image";

const ItExpert = () => {
  const [listData, setListData] = React.useState(
    Menu.filter((item) => item?.category == "services")
  );
  const [selectedItem, setSelectedItem] = useState("services");
  const filterItem = (category) => {
    setSelectedItem(category);
    const updatedItems = Menu.filter((currElem, index) => {
      return currElem?.category === category;
    });
    setListData(updatedItems);
  };
  return (
    <div className="main-content">
      <section className="contact section-padding">
        <div className="container">
          <div style={{ textAlign: "center", paddingBottom: "40px" }}>
            <h2>Our IT Expertise</h2>
          </div>
          <div className="row">
            <div className="menu-tabs container padding-items-tab">
              <div
                classeName="wow fadeIn menu-tab d-flex justify-content-center"
                data-wow-delay=".5s"
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <button
                  className={` button--text-thick ${
                    selectedItem == "services"
                      ? "button-active"
                      : "button--itzel button "
                  }`}
                  onClick={() => filterItem("services")}
                >
                  <div className="res-tab">
                    {/* <span>Services</span> */}
                    <span>S</span>
                    <span>e</span>
                    <span>r</span>
                    <span>v</span>
                    <span>i</span>
                    <span>c</span>
                    <span>e</span>
                    <span>s</span>
                  </div>
                </button>
                <button
                  className={` button--text-thick ${
                    selectedItem == "technologies"
                      ? "button-active"
                      : "button--itzel button "
                  }`}
                  onClick={() => filterItem("technologies")}
                >
                  <div className="res-tab">
                    <span>Technologies</span>
                  </div>
                </button>
                <button
                  className={` button--text-thick ${
                    selectedItem == "Industries"
                      ? "button-active"
                      : "button--itzel button "
                  }`}
                  onClick={() => filterItem("Industries")}
                >
                  <div className="res-tab">
                    <span>Industries</span>
                  </div>
                </button>
              </div>
            </div>
            <div
              className="margin-tab-items"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                width: "100%",
                marginTop: "30px",
                justifyContent: "space-around",
              }}
            >
              {listData?.map((currElem, index) => {
                return (
                  <div
                    className="wow fadeInUp"
                    data-wow-delay=".5s"
                    key={index}
                    style={{
                      flexBasis: "33.33333%",
                      perspective: "1000px",
                      marginBottom: "20px",
                      marginTop: "20px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            {selectedItem === "technologies" ? (
                              <div
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <h3
                                  className="color-font"
                                  style={{ fontSize: "20px" }}
                                >
                                  {currElem?.title}
                                </h3>
                              </div>
                            ) : (
                              <>
                                <div
                                  style={{
                                    padding: "25px",
                                  }}
                                >
                                  <div
                                    style={{
                                      width: "100%",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    <div
                                      style={{
                                        width: "100px",
                                        position: "relative",
                                        height: "100px",
                                      }}
                                    >
                                      <Image
                                        layout="fill"
                                        priority
                                        loading="eager"
                                        objectFit="contain"
                                        src={currElem?.image}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div style={{ color: "white" }}>
                                  <h3 style={{ fontSize: "14px" }}>
                                    {currElem?.title}
                                  </h3>
                                </div>
                              </>
                            )}
                          </div>
                          <div className="flip-card-back">
                            {selectedItem == "technologies" ? (
                              <div style={{ padding: "10px" }}>
                                <div
                                  style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <Image
                                    layout="fill"
                                    objectFit="contain"
                                    src={currElem?.image}
                                  />
                                </div>
                              </div>
                            ) : (
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItem: "center",
                                  padding: "10px",
                                }}
                              >
                                <p style={{ fontSize: "12px" }}>
                                  {currElem?.content}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItExpert;
