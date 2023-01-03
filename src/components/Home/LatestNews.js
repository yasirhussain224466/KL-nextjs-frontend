/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import worksData from "../../data/sections/works.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Works3 = ({ data }) => {
  console.log(data);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/ionicons.min.css" />
      </Head>
      <section className=" metro section-padding main-content">
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-lg-8 col-md-10">
              <div className="sec-head">
                <h3 style={{ textAlign: "center" }} className="wow">
                  Latest News & Insights
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 no-padding">
              <div className="swiper-container">
                <Swiper
                  className="swiper-wrapper"
                  slidesPerView={2}
                  centeredSlides={true}
                  autoPlay={true}
                  loop={true}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                  }}
                  onSwiper={(swiper) => {
                    setTimeout(() => {
                      swiper.params.navigation.prevEl =
                        navigationPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNextRef.current;

                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();
                    });
                  }}
                  autoplay={{
                    delay: 4100,
                    disableOnInteraction: true,
                  }}
                  speed={1000}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 0,
                    },
                    767: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                      centeredSlides: false,
                    },
                    721: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                      centeredSlides: false,
                    },
                    991: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {data?.data.map((currElem) => {
                    return (
                      <SwiperSlide
                        key={currElem?.id}
                        style={{ padding: "30px" }}
                        className="swiper-slide"
                      >
                        <a href={`/blogs/${currElem?.attributes?.slug}`}>
                          <div className="content">
                            <div className="img">
                              <span style={{ width: "100%" }} className="imgio">
                                {/* <div
                                  className="wow cimgio"
                                  data-delay="500"
                                ></div> */}
                                <div style={{width:"100%", position:"relative", height:"250px"}}>
                                  <Image
                                    layout="fill"
                                    priority
                                    loading="eager"
                                    objectFit="contain"
                                    src={`${process.env.URL}${currElem?.attributes?.cardImg?.data?.attributes?.url}`}
                                    alt=""
                                  />
                                </div>
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <h4
                                style={{
                                  alignItems: "center",
                                  fontSize: "24px",
                                }}
                              >
                                <a
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                  href={`/blogs/${currElem?.attributes?.slug}`}
                                >
                                  <span style={{ fontSize: "19px" }}>
                                    {currElem?.attributes?.cardHeading}
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </a>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>

                <div
                  ref={navigationNextRef}
                  className="swap-arrow-next swiper-button-next swiper-nav-ctrl simp-next cursor-pointer"
                ></div>
                <div
                  ref={navigationPrevRef}
                  className="swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer swap-arrow-prev"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works3;
