/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";
import Split from "../Split";

const Footer = ({ hideBGCOLOR }) => {
const [inputEmail, setInputEmail] = useState("");

  const handleSubmit = (e) => {
    console.log("kuch tw chala");
    e.preventDefault();
    console.log(inputEmail);

    if (inputEmail) {
      fetch(`${process.env.URL}/strapi-newsletter/newsletter/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: inputEmail }),
      })
        .then((res) => {
          setInputEmail("")
          return res.json();
        })
        .then((data) => {
          setInputEmail("")
        })
        .catch((err) => {
          setInputEmail("")
          console.log(err);
        });
    } else {
    }
  };
  return (
    <footer
      style={{ backgroundColor: "black" }}
      className={`main-content ${!hideBGCOLOR ? "sub-bg" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>
                      Bangalow 8/12, 1st Floor, 4F Nazimabad, Karachi, Pakistan
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>contact@kodexolabs.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>021 36720047</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item">
              <div className="logo">
                <img src="/img/kodexo.png" style={{ width: "200px" }} alt="" />
              </div>
              <div>
                <form id="contact-form" method="post" action="contact.php">
                  <div>
                    <h1
                      style={{ fontSize: "23px", marginBottom: "0px" }}
                      className="color-font"
                    >
                      <span>Newsletter </span> <br />
                    </h1>
                    <p style={{ marginBottom: "8px" }}>
                      Stay up to date our latest news
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        borderTop: "1px solid #1dcdfe",
                        borderBottom: "1px solid #1dcdfe",
                        borderLeft: "1px solid #1dcdfe",
                      }}
                    >
                      <input
                        style={{
                          padding: "7.8px",
                          backgroundColor: "black",
                          border: "none",
                          color: "white",
                        }}
                        className="color-font"
                        id="form_email"
                        placeholder="Enter Your Email"
                        type="email"
                        onChange={(e)=>setInputEmail(e.target.value)}
                      />
                    </div>
                    <button
                      onClick={handleSubmit}
                      style={{
                        borderTop: "1px solid #1dcdfe",
                        borderBottom: "1px solid #1dcdfe",
                        borderRight: "1px solid #1dcdfe",
                      }}
                      type="submit"
                      className="text-center"
                    >
                      <a href="#0" className="butn1 bord ">
                        <span>Subscribe</span>
                      </a>
                    </button>
                  </div>
                </form>
              </div>
              <div className="social">
                <a href="https://www.facebook.com/kodexolabs">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/kodexolabs/"
                  className="icon"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  target="_blank"
                  href="https://instagram.com/kodexolabs"
                  className="icon"
                  rel="noreferrer"
                >
                  <i className="fab fa-brands fa-instagram"></i>
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/KodexoLabs"
                  className="icon"
                  rel="noreferrer"
                >
                  <i className="fab fa-brands fa-twitter"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>© 2022, Kodexo Labs. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
