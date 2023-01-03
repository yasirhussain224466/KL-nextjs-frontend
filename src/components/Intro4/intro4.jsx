import React from "react";
import Split from "../Split";
import Link from "next/link";

const CallToAction = ({ img, name }) => {
  return (
    <>
      <section
        className="section-padding "
        style={{
          backgroundImage: `url(${img ? img : "/img/patrn.svg"})`,
          backgroundSize: "100% 30vh",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <Split>
            <h1
              className="wow words chars splitting titleCard"
              data-splitting
            >
              <span>{name ? name : ""} </span> <br />
            </h1>
          </Split>

          <div className="col-md-4 col-lg-3 valign"></div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
