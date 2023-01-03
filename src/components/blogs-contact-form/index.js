import React, { useState } from "react";
import FormSubmittionMessage from "../SubmittionSuccessfull/index";
import Loader from "../Loader/index.js";
import {server} from "../../config/server"

const ContactForm = () => {
  const [isSubmit, setIsSubmit] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const firstName = document.getElementById("form_fname").value;
    const lastName = document.getElementById("form_lname").value;
    const email = document.getElementById("form_email").value;
    const phoneNo = document.getElementById("form_phone_no").value;
    const message = document.getElementById("form_message").value;

    const obj = {
      firstName,
      lastName,
      email,
      phoneNo,
      message,
    };
    if (firstName && lastName && email && phoneNo && message) {
      fetch(`${process.env.URL}/v1/blogs-contact-forms`, {
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
          document.getElementById("form_phone_no").value = "";
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
    <div data-wow-delay=".10s" className="container contact wow fadeIn">
      <div className="row">
        <div className="col-lg-12">
          <div className="form md-mb50">
            {isSubmit ? (
              <form id="contact-form" method="post" action="contact.php">
                <div className="messages"></div>
                <div className="container">
                  <div className="controls">
                    <div className="row">
                      <div className="form-group col-lg-12">
                        <input
                          id="form_fname"
                          type="text"
                          name="firstName"
                          placeholder="*First Name"
                          required="required"
                        />
                      </div>
                      <div className="form-group col-lg-12">
                        <input
                          id="form_lname"
                          type="text"
                          name="lastName"
                          placeholder="*Last Name"
                          required="required"
                        />
                      </div>

                      <div className="form-group col-lg-12">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="*Business Email"
                          required="required"
                        />
                      </div>
                      <div className="form-group col-lg-12">
                        <input
                          id="form_phone_no"
                          type="text"
                          name="phone"
                          placeholder="*Phone"
                          required="required"
                        />
                      </div>
                      <div className="form-group col-lg-12">
                        <textarea
                          id="form_message"
                          name="message"
                          placeholder="Message"
                          rows="2"
                          column="6"
                        ></textarea>
                      </div>
                      <div className="flex-between" style={{ paddingLeft: "20px", paddingTop: "20px" }}>
                        <a href="">
                        <button
                          
                          onClick={handleSubmit}
                          type="submit"
                          className="contact-us-button"
                        >
                            Let's discuss your project
                        </button>
                        </a>
                        <span style={{margin:"14px 5px 5px 5px"}}> {loading ? <Loader /> : ""}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <FormSubmittionMessage remove="remove" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
