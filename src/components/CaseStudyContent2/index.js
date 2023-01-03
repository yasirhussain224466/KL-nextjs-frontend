import Image from "next/image";
import React from "react";
import Loader from "../../components/Loader";
import { server } from "../../config/server";

const CallToAction = ({ img, content2 }) => {
  return (
    <>
      <section
        className="call-action"
        style={{
          backgroundImage: `url("/img/patrn.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
          className="wow fadeIn"
          data-wow-delay=".6s"
        >
          <div className="bhootni-wala">
            <Image
              layout="fill"
              priority
              loading="eager"
              objectFit="contain"
              alt={content2?.alt}
              src={`${process.env.URL}${content2?.image}`}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
