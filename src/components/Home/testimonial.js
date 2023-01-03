/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FullTestimonials extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div className="container">
          <div
            onClick={() => this.slider.slickNext()}
            className="next cursor-pointer"
          >
            <span className="pe-7s-angle-right"></span>
          </div>
          <div
            onClick={() => this.slider.slickPrev()}
            className="prev cursor-pointer"
          >
            <span className="pe-7s-angle-left"></span>
          </div>
        </div>
      </div>
    );
  };
  render() {
    console.log(this.props?.data?.data);
    return (
      <section
        className={`testimonials main-content  ${
          this.props.withIMG
            ? "section-padding bg-img"
            : this.props.withCOLOR
            ? "section-padding back-color"
            : this.props.noPadding
            ? ""
            : "section-padding"
        } ${this.props.classText ? this.props.classText : ""}`}
        style={{
          backgroundImage: `${
            this.props.withIMG ? "url(/img/testim-img.jpg)" : "none"
          }`,
        }}
      >
        {this.props.showHead && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head  text-center">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Testimonials
                  </h6>
                  <h3 className="wow color-font">
                    We love our clients from all over the world.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container-fluid position-re">
          <div
            className="container"
            style={{ marginTop: "20px", marginBottom: "100px" }}
          >
            <h2 style={{ textAlign: "center" }}>Client Says</h2>
          </div>
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-lg-12">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: true,
                  centerMode: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 3,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                  ],
                }}
              >
                {this.props?.data?.data.map((currElem) => {
                  return (
                    <div className="item" key={currElem?.id}>
                      <p>
                        <div
                          className="overflow-text"
                          style={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            fontSize:"16px",

                          }}
                        >
                          {currElem?.attributes?.comment}
                        </div>
                        <br />
                        <br />
                        <h2 style={{ fontSize: "21px" }} className="color-font">
                          {currElem?.attributes?.name},
                        </h2>
                        <h2 style={{ fontSize: "21px" }} className="color-font">
                          {currElem?.attributes?.country}
                        </h2>
                      </p>
                    </div>
                  );
                })}
                {this.props?.data?.data.map((currElem) => {
                  return (
                    <div className="item" key={currElem?.id}>
                      <p>
                        <div
                          className="overflow-text"
                          style={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            fontSize:"16px",

                          }}
                        >
                          {currElem?.attributes?.comment}
                        </div>
                        <br />
                        <br />
                        <h2 style={{ fontSize: "21px" }} className="color-font">
                          {currElem?.attributes?.name},
                        </h2>
                        <h2 style={{ fontSize: "21px" }} className="color-font">
                          {currElem?.attributes?.country}
                        </h2>
                      </p>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default FullTestimonials;
