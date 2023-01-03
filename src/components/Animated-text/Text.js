import React from "react";
import Split from "../Split";

const CallToAction = ({ text, color }) => {
  return (
    <>
      <section>
        <Split>
          <h2
            style={{ fontSize: "40px" }}
            className="wow words chars splitting "
            data-splitting
          >
            <span style={{ color: `${color}` }}>{text ? text : ""} </span> <br />
          </h2>
        </Split>
        <div className="col-md-4 col-lg-3 valign"></div>
      </section>
    </>
  );
};

export default CallToAction;
