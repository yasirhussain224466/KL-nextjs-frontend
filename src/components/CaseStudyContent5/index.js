import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CallToAction = ({ img, content5 }) => {
  const SepCharAndNum = (input) => {
    const letters = input.match(/[a-zA-Z!@#$%^&*+]/g);
    const digits = input.match(/[0-9]/g);
    const obj = {
      chars: letters?.join(""),
      number: Number(digits?.join("")),
    };
    return obj;
  };

  return (
    <>
      <section
        style={{ backgroundColor: "#000000", padding: "60px 0px 60px 0px" }}
      >
        <h3 style={{ textAlign: "center" }} className="color-font">
          Result & Benefits
        </h3>
        {content5?.boxvalue1 ? (
          <>
            <br />
            <div
              className="content5benefits"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div
                className="content5benefits heightcontent5"
                style={{
                  width: "190px",
                  backgroundColor: "#101010",
                  borderRadius: "20px",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <h5
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px",
                    }}
                    className="color-font underline underline--blue wow fadeIn"
                    data-wow-delay=".5s"
                  >
                    <CountUp
                      redraw={true}
                      end={SepCharAndNum(content5?.boxvalue1)?.number}
                      duration="1"
                    >
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="count" ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    {SepCharAndNum(content5?.boxvalue1)?.chars}
                  </h5>
                  <p
                    style={{
                      paddingTop: "9px",
                      fontSize: "17px",
                      textAlign: "center",
                    }}
                  >
                    {content5?.boxContent1}
                  </p>
                </div>
              </div>
              <div
                className="content5benefits heightcontent5 wow fadeIn"
                style={{
                  width: "185px",
                  backgroundColor: "#101010",
                  borderRadius: "20px",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                data-wow-delay=".6s"
              >
                <div>
                  <h5
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px",
                    }}
                    className="color-font underline underline--blue"
                  >
                    <CountUp
                      redraw={true}
                      end={SepCharAndNum(content5?.boxvalue2)?.number}
                      duration="3"
                    >
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="count" ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    {SepCharAndNum(content5?.boxvalue2)?.chars}
                  </h5>
                  <p style={{ paddingTop: "9px", fontSize: "15px" }}>
                    {content5?.boxContent2}
                  </p>
                </div>
              </div>
              <div
                className="content5benefits heightcontent5 wow fadeIn"
                style={{
                  width: "190px",
                  backgroundColor: "#101010",
                  borderRadius: "20px",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                data-wow-delay=".7s"
              >
                <div>
                  <h5
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px",
                    }}
                    className="color-font underline underline--blue"
                  >
                    <CountUp
                      redraw={true}
                      end={SepCharAndNum(content5?.boxvalue3)?.number}
                      duration="3"
                    >
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="count" ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    {SepCharAndNum(content5?.boxvalue3)?.chars}
                  </h5>
                  <p style={{ paddingTop: "9px", fontSize: "15px" }}>
                    {content5?.boxContent3}
                  </p>
                </div>
              </div>
              <div
                className="content5benefits heightcontent5 wow fadeIn"
                style={{
                  width: "190px",
                  backgroundColor: "#101010",
                  borderRadius: "20px",
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                data-wow-delay=".8s"
              >
                <div>
                  <h5
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px",
                    }}
                    className="color-font underline underline--blue"
                  >
                    <CountUp
                      redraw={true}
                      end={SepCharAndNum(content5?.boxvalue4)?.number}
                      duration="3"
                    >
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="count" ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    {SepCharAndNum(content5?.boxvalue4)?.chars}
                  </h5>
                  <p style={{ paddingTop: "9px", fontSize: "15px" }}>
                    {content5?.boxContent4}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          " "
        )}
      </section>
      <section
        className="container"
        style={{ backgroundColor: "#000000", padding: "10px 50px 50px 50px" }}
      >
        <ul>
          {content5?.benefits?.map((currElem, index) => {
            return (
              <li style={{ display: "flex" }} key={index}>
                <span style={{ padding: "0px 10px 0px 0px", fontSize: "24px" }}>
                  .
                </span>
                <span style={{ color: "#a4a7b1" }}>
                  {currElem?.attributes?.text}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default CallToAction;
