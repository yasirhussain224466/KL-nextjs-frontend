import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Works = ({ data }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <>
      <div className="main-content">
        <div>
          <div
            className="container"
            style={{
              paddingTop: "10px",
              paddingBottom: "40px",
              marginBottom: "0px",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Our Success Stories</h2>
            <h3
              style={{ textAlign: "center", fontSize: "22px" }}
              className="color-font"
            >
              Our Powerful Software Solutions to Achieve Client's Business Goals
            </h3>
          </div>
        </div>
        <div>
          <div
            style={{ width: "100%", paddingTop: "40px" }}
            className="blog-testimonial-bg"
          >
            <Swiper
              className=""
              slidesPerView={1}
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
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;

                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              speed={1000}
            >
              {data?.data.map((currElem) => (
                <SwiperSlide key={currElem?.id} className="">
                  <div
                    style={{
                      width: "100vw",
                    }}
                  >
                    <div
                      className="container"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          flexWrap: "wrap",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div className="res-align">
                            <h2 className="color-font">
                              <b>{currElem?.attributes?.caseStudyName}</b>
                            </h2>
                            <h2 className="color-font">
                              <b>{currElem?.attributes?.appType}</b>
                            </h2>
                            <p
                              className="card-text"
                              style={{ padding: "15px 5px 20px 5px" }}
                            >
                              {currElem?.attributes?.title}
                            </p>
                            <div className="res-align1">
                              <Link 
                                href={`/case-studies/${currElem?.attributes?.slug}`}
                              >
                                <button
                                  style={{
                                    width: "300px",
                                    marginTop: "20px",
                                  }}
                                  className="button-gbl button--ujarak button--border-thin button--text-thick-gbl"
                                >
                                  View Case Study
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            padding: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div className="cardImageSize">
                            <Image
                              layout="fill"
                              loading="eager"
                              priority
                              src={`${process.env.URL}${currElem?.attributes?.cardImage?.data?.attributes?.url}`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div style={{ height: "8vh" }}>
                <div
                  ref={navigationNextRef}
                  className="swap-arrow-next swiper-button-next swiper-nav-ctrl simp-next cursor-pointer"
                >
                  {/* <span className="simple-btn right">Next</span> */}
                </div>
                <div
                  ref={navigationPrevRef}
                  className="swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer swap-arrow-prev"
                >
                  {/* <span className="simple-btn">Prev</span> */}
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
