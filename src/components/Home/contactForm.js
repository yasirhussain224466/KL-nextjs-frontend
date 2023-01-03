import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Loader from "../Loader/index.js";
import FormSubmittionMessage from "../SubmittionSuccessfull/index.js";

const SContactForm = ({ noLine }) => {
  const [phoneinput, setPhoneInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [isSubmit, setIsSubmit] = React.useState(true);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const fname = document.getElementById("form_fname").value;
    const lname = document.getElementById("form_lname").value;
    const email = document.getElementById("form_email").value;
    const phoneNo = phoneinput;
    const message = document.getElementById("form_message").value;

    const obj = {
      fname,
      lname,
      email,
      phoneNo,
      message,
    };

    if (fname && lname && email) {
      fetch(`${process.env.URL}/v1/home-page-contact-us-forms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: obj }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setLoading(false);
          setIsSubmit(false);
          document.getElementById("form_fname").value = "";
          document.getElementById("form_lname").value = "";
          document.getElementById("form_email").value = "";
          setPhoneInput("");
          document.getElementById("form_message").value = "";
          document.querySelector(".messages").innerText =
            "Your response has been recorded!.";
          setTimeout(() => {
            document.querySelector(".messages").innerText = "";
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLoading(false);
      document.querySelector(".messages").innerText =
        "Please provide your details.";
      setTimeout(() => {
        document.querySelector(".messages").innerText = "";
      }, 2000);
    }
  };
  return (
    <section className="contact-sec section-padding position-re main-content tabs-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h3 style={{ fontSize: "39px" }} className="wow">
                Want To Turn Your Idea Into a Solution
              </h3>
              <h5
                style={{ fontSize: "25px" }}
                className="wow fadeIn color-font"
                data-wow-delay=".5s"
              >
                Its not about providing software service only But as well as the
                execution of ideas in the form of solutions
              </h5>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="form wow fadeInUp" data-wow-delay=".5s">
              {isSubmit ? (
                <form id="contact-form" method="post" action="contact.php">
                  <div className="controls">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            id="form_fname"
                            type="text"
                            name="firstName"
                            placeholder="*First Name"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            id="form_lname"
                            type="text"
                            name="lastName"
                            placeholder="*Last Name"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div
                          className="form-group2"
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            width: "100%",
                            alignItems: "center",
                            backgroundColor: "black",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <span style={{ width: "20%", color: "grey" }}>
                            Phone
                          </span>

                          <PhoneInput
                            style={{ backgroundColor: "black", width: "80%" }}
                            id="form_phone_no"
                            country={"us"}
                            required
                            value={phoneinput}
                            placeholder={"+1"}
                            onChange={(e) => setPhoneInput(e)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="*Email"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            id="form_message"
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required="required"
                          ></textarea>
                        </div>
                      </div>
                      <div
                        style={{ textAlign: "center" }}
                        className="messages"
                      ></div>
                      <div className="col-12">
                        <div
                          onClick={handleSubmit}
                          type="submit"
                          className="text-center"
                        >
                          <a href="#0" className="butn bord  mt-30">
                            <span>Send Massege</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              ) : (
                <FormSubmittionMessage remove={true}/>
              )}
            </div>
          </div>
        </div>
      </div>
      {!noLine ? <div className="line bottom left"></div> : ""}
    </section>
  );
};

export default SContactForm;
