/* eslint-disable @next/next/no-img-element */
import React from "react";

const CallToAction = () => {
  return (
    <>
      <section
        className="call-action  sub-bg bg-img background-image-cover"
        style={{
          background: "url(/img/career1.webp)",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="content1 flex-center-start">
          <div className=" col-lg-9">
            <div className="flex-center">
              <div>
                <div>
                  <h1 className="font30px">
                    Advance Your Career With Kodexo Labs
                  </h1>
                </div>
                <p className="font20px">
                  Kodexo Labs is always looking for talented and ambitious
                  individuals <br />
                  who are interested in making a difference in the world of
                  work.
                </p>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
