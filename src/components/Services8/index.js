import React from "react";
import featuresData from "../../data/sections/features.json";
const Services = ({ style, lines }) => {
  let className1 = "featureContent";
  let className2 = "featureContent";
  let className3 = "featureContent";
  let className4 = "featureContent";

  const [state1, setState1] = React.useState(false);
  const [state2, setState2] = React.useState(false);
  const [state3, setState3] = React.useState(false);
  const [state4, setState4] = React.useState(false);

  if (state1 === true) {
    className1 = "";
  }
  if (state2 === true) {
    className2 = "";
  }
  if (state3 === true) {
    className3 = "";
  }
  if (state4 === true) {
    className4 = "";
  }
  return (
    <section
      className={`services bords  ${
        style === "4item" ? "lficon" : lines ? "" : "pt-0"
      }`}
    >
      <div className="container">
        <div className="row">
          <div key={1} className="col-lg-6 wow fadeInLeft" data-wow-delay=".5">
            <div className="item-box">
              <div>
                {/* <span className="icon pe-7s-paint-bucket"></span> */}
              </div>
              <div className="cont">
                <h5 className="fontSize">User Login</h5>
                <p className={className1 + 1}>
                  To search for and book appointments at nearby barbershops,
                  users must create an account, log in, and follow a few simple
                  steps.
                </p>
              </div>
            </div>
          </div>
          <div key={2} className="col-lg-6 wow fadeInLeft" data-wow-delay=".7">
            <div className="item-box">
              <div></div>
              <div className="cont">
                <h5 className="fontSize">
                  Explore Services Using Search Filter:
                </h5>
                <p className={className2 + 2}>
                  Once logged in, users can easily filter out their desired
                  services (Haircut, styling, Shampoo, Spa, Shaving, Facial
                  makeup, and hairdryer) based on their location, distance,
                  popularity, gender, price, etc.
                </p>
              </div>
            </div>
          </div>
          <div key={3} className="col-lg-6 wow fadeInLeft" data-wow-delay=".5">
            <div className="item-box">
              <div>{/* <span className="icon pe-7s-display1"></span> */}</div>
              <div className="cont">
                <h5 style={{ fontSize: "22px" }} className="fontSize">
                  View Shops And Stylists On Map
                </h5>
                <p className={className3 + 3}>
                  We also integrated a feature that allows users to find nearby
                  businesses and stylists right on the map. This feature makes
                  it easy for users to search for services nearby within a
                  second.
                </p>
              </div>
            </div>
          </div>
          <div key={4} className="col-lg-6 wow fadeInLeft" data-wow-delay=".5">
            <div className="item-box">
              <div>{/* <span className="icon pe-7s-diskette"></span> */}</div>
              <div className="cont">
                <h5 className="fontSize">View Reviews And Ratings: </h5>
                <p className={className4 + 4}>
                  For the customer&apos;s ease of booking and satisfaction, we
                  integrated ratings and reviews so that potential customers may
                  feel secure in their choice of stylist.
                </p>
                <br />
              </div>
            </div>
          </div>
          <div key={3} className="col-lg-6 wow fadeInLeft" data-wow-delay=".5">
            <div className="item-box">
              <div>{/* <span className="icon pe-7s-display1"></span> */}</div>
              <div className="cont">
                <h5 style={{ fontSize: "22px" }} className="fontSize">
                  View Basic Info And Appointment Slots
                </h5>
                <p className={className3 + 3}>
                  WUsers who want to book appointments for a haircut, styling,
                  or else can find the necessary information about the shop,
                  such as an address, opening hours, gallery, services provided,
                  and available slots for appointments. The customers can choose
                  a date and time block that works for them and reserve one of
                  the available slots.
                </p>
              </div>
            </div>
          </div>
          <div key={3} className="col-lg-6 wow fadeInLeft" data-wow-delay=".5">
            <div className="item-box">
              <div>{/* <span className="icon pe-7s-display1"></span> */}</div>
              <div className="cont">
                <h5 style={{ fontSize: "22px" }} className="fontSize">
                  Multiple Payment Options
                </h5>
                <p className={className3 + 3}>
                  The app offers multiple payment options, including credit
                  cards, debit cards, and net banking. These allow users to make
                  payments directly with the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {lines ? (
        <>
          <div className="line top left"></div>
          <div className="line bottom right"></div>
        </>
      ) : null}
    </section>
  );
};

export default Services;
