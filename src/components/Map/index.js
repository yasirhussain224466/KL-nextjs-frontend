/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import image1 from "../../../public/img/Map.svg"
import image2 from "../../../public/img/pin.svg"


const Index = () => {
  const [show, setShow] = React.useState();

  return (
    <>
      <section data-wow-delay=".5s" className="setup-diagram wow fadeInLeft">
        <div style={{ width: "1000px" }}>
          <Image
            src={image1}
            alt="diagram_image"
          />
        </div>
        <button
          onClick={() => setShow(!show)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
            zIndex: "1",
            position: "absolute",
            top: "260px",
            left: "640px",
          }}
          alt="diagram_image"
        >
          <div style={{ width: "50px", height: "50px" }}>
          <Image  src={image2} />
          </div>
        </button>
        <div
          style={{
            display: `${show ? "block" : "none"}`,
            position: "absolute",
            left: "640px",
            top: "160px",
          }}
          className="bubble bubble-bottom-left"
          contentEditable
        >
          Bangalow 8/12, 1st Floor, 4F Nazimabad, Karachi, Pakistan
        </div>
      </section>
    </>
  );
};

export default Index;
