import Image from "next/image";
import image1 from "../../../public/img/gifSubmit.gif";
import React from "react";
const Index = ({ remove }) => {
  console.log(remove);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image height="340" width="460" src={image1} alt="done" />
      </div>
      <h3 style={{ textAlign: "center", fontSize:"24px" }}>
        Thank you for filling out your information!
      </h3>
      {remove ? (
        ""
      ) : (
        <>
          <p style={{ textAlign: "center" }}>
            We have received your message and sent you an email with the{" "}
            <b> Company Profile Link </b> at the email address you provided.
          </p>
          <p style={{ textAlign: "center" }}>
            If your inquiry is urgent, please use the whatsapp number listed
            below to talk to one of our staff members.
          </p>
          <p style={{ textAlign: "center", color: "#1dcdfe" }}>021 36720047</p>
        </>
      )}
    </>
  );
};
export default Index;
