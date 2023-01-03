import React, { useEffect, useState } from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import country_list from "./constant.js";
import Budget from "./EstimateBudget.js";
import FormSubmittionMessage from "../SubmittionSuccessfull/index.js";
import Loader from "../Loader/index.js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import NumericInput from "react-numeric-input";

const ContactForm = ({ arrayOfServices }) => {
  const [isSubmit, setIsSubmit] = useState(true);
  const [loading, setLoading] = useState(false);
  const [phoneinput, setPhoneInput] = useState("");
  const [inpuValue, setInputValue] = useState("");
  class CustomSelect {
    constructor(originalSelect) {
      this.originalSelect = originalSelect;
      this.customSelect = document.createElement("div");
      this.customSelect.classList.add("select");

      this.originalSelect
        .querySelectorAll("option")
        .forEach((optionElement) => {
          const itemElement = document.createElement("div");

          itemElement.classList.add("select__item");
          itemElement.textContent = optionElement.textContent;
          this.customSelect.appendChild(itemElement);

          if (optionElement.selected) {
            this._select(itemElement);
          }

          itemElement.addEventListener("click", () => {
            if (
              this.originalSelect.multiple &&
              itemElement.classList.contains("select__item--selected")
            ) {
              this._deselect(itemElement);
            } else {
              this._select(itemElement);
            }
          });
        });

      this.originalSelect.insertAdjacentElement("afterend", this.customSelect);
      this.originalSelect.style.display = "none";
    }

    _select(itemElement) {
      const index = Array.from(this.customSelect.children).indexOf(itemElement);

      if (!this.originalSelect.multiple) {
        this.customSelect.querySelectorAll(".select__item").forEach((el) => {
          el.classList.remove("select__item--selected");
        });
      }

      this.originalSelect.querySelectorAll("option")[index].selected = true;
      itemElement.classList.add("select__item--selected");
    }

    _deselect(itemElement) {
      const index = Array.from(this.customSelect.children).indexOf(itemElement);

      this.originalSelect.querySelectorAll("option")[index].selected = false;
      itemElement.classList.remove("select__item--selected");
    }
  }

  useEffect(() => {
    document.querySelectorAll(".custom-select").forEach((selectElement) => {
      new CustomSelect(selectElement);
    });
  }, []);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const firstName = document.getElementById("form_fname").value;
    const lastName = document.getElementById("form_lname").value;
    const email = document.getElementById("form_email").value;
    const phoneNo = phoneinput;
    const company = document.getElementById("form_company").value;
    const country = document.getElementById("form_country").value;
    const servicesDiv = document.querySelectorAll("#services option:checked");
    const services = Array.from(servicesDiv).map((el) => Number(el.value));
    const message = document.getElementById("form_message").value;
    const estimatedBudget = document.getElementById("form_budget").value;

    const obj = {
      firstName,
      lastName,
      email,
      phoneNo,
      company,
      country,
      services,
      estimatedBudget,
      message,
    };

    console.log(obj);

    if (firstName && lastName && email && country && phoneNo && services) {
      fetch(`${process.env.URL}/v1/contact-us-forms`, {
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
          document.getElementById("form_company").value = "";
          document.getElementById("form_country").value = "*Your Country";
          document.getElementById("form_message").value = "";
          let checks = document.querySelector("#services").options;
          Array.from(checks).map((e) => {
            if (e.selected) {
              e.selected = false;
            }
          });
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

  function numberFormate(num) {
    return num + `$`;
  }

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4
                data-wow-delay=".5s"
                className="fw-700 color-font mb-50 wow fadeInLeft"
              >
                Get In Touch.
              </h4>

              {isSubmit ? (
                <form id="contact-form" method="post" action="contact.php">
                  <div className="messages"></div>
                  <div className="container">
                    <div className="controls">
                      <div className="row">
                        <div
                          data-wow-delay=".5s"
                          className="form-group col-lg-6 wow fadeInLeft"
                        >
                          <input
                            id="form_fname"
                            type="text"
                            name="firstName"
                            placeholder="*First Name"
                            required="required"
                          />
                        </div>
                        <div
                          data-wow-delay=".5s"
                          className="form-group col-lg-6 wow fadeInLeft"
                        >
                          <input
                            id="form_lname"
                            type="text"
                            name="lastName"
                            placeholder="*Last Name"
                            required="required"
                          />
                        </div>

                        <div
                          data-wow-delay=".5s"
                          className="form-group col-lg-6 wow fadeInLeft"
                        >
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="*Email"
                            required="required"
                          />
                        </div>
                        {/* <div
                          data-wow-delay=".5s"
                          className="form-group col-lg-6 wow fadeInleft"
                        >
                          <PhoneInput
                            style={{ backgroundColor: "black" }}
                            id="form_phone_no"
                            country={"us"}
                            required
                            onChange={e => setPhoneInput(`+${e}`)}
                          />
                        </div> */}
                        {/* <div className="col-lg-6"></div> */}

                        <div
                          data-wow-delay=".5s"
                          className="form-group col-lg-6 wow fadeInLeft"
                        >
                          <input
                            id="form_company"
                            type="text"
                            name="company"
                            placeholder="Company"
                          />
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
                              borderBottom:
                                "1px solid rgba(255, 255, 255, 0.1)",
                            }}
                          >
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

                        <div
                          data-wow-delay=".5s"
                          className="form-group col-lg-6 wow fadeInLeft"
                        >
                          <input
                            id="form_budget"
                            type="number"
                            name="email"
                            placeholder="Budget"
                            required="required"
                          />
                        </div>

                        <div
                          data-wow-delay=".5s"
                          className="form-group col-lg-6 wow fadeInLeft"
                        >
                          <select
                            required="required"
                            id="form_country"
                            style={{
                              width: "250px",
                              height: "50px",
                              backgroundColor: "black",
                              border: "0px solid #111215",
                              color: "rgb(133, 133, 133)",
                              borderBottom: "1px solid rgb(133, 133, 133)",
                              marginTop: "5px",
                            }}
                          >
                            <option selected>*Your Country</option>
                            {country_list?.map((currElem, key) => {
                              return (
                                <option key={key} value={`${currElem}`}>
                                  {currElem}
                                </option>
                              );
                            })}
                          </select>
                        </div>

                        <br />
                        <br />
                        <div className="col-lg-12">
                          <h2
                            style={{
                              color: "rgb(133, 133, 133)",
                              fontSize: "30px",
                              paddingLeft: "10px",
                              marginTop: "30px",
                              marginBottom: "20px",
                              testAlign: "left",
                            }}
                          >
                            Services Required
                          </h2>
                        </div>
                        <br />
                        <br />

                        <div data-wow-delay=".12s" className="wow fadeInLeft">
                          <select
                            id="services"
                            required="required"
                            name="language"
                            className="custom-select"
                            multiple
                          >
                            {arrayOfServices?.map((currElem, index) => {
                              return (
                                <>
                                  {/* <div style={{border:"1px solid white",display:"none"}}> */}
                                  <option value={`${currElem?.id}`}>
                                    {currElem?.attributes?.services}
                                  </option>
                                  {/* </div>  */}
                                </>
                              );
                            })}
                          </select>
                        </div>
                        <div
                          data-wow-delay=".13s"
                          className="form-group col-lg-12 wow fadeInLeft"
                        >
                          <textarea
                            id="form_message"
                            name="message"
                            placeholder="Message"
                            rows="6"
                            column="6"
                          ></textarea>
                        </div>
                        <div
                          data-wow-delay=".14s"
                          className="wow fadeInLeft"
                          style={{ paddingLeft: "20px", paddingTop: "20px" }}
                        >
                          <button
                            onClick={handleSubmit}
                            type="submit"
                            className="contact-us-button"
                          >
                            <span style={{ marginRight: "20px" }}>
                              Send Message
                            </span>
                            {loading ? <Loader /> : ""}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              ) : (
                <FormSubmittionMessage />
              )}
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4
                data-wow-delay=".5s"
                className="fw-700 color-font mb-50 wow fadeinLeft"
              >
                Contact Info.
              </h4>
              <h3
                data-wow-delay=".6s"
                className="wow fadeinLeft"
                data-splitting
              >
                {ContactFromDate.title}
              </h3>
              <div data-wow-delay=".7s" className="item mb-40 wow fadeinLeft">
                <h5>
                  <a href="#0">{ContactFromDate.email}</a>
                </h5>
                <h5>021 36720047</h5>
              </div>
              <h3
                data-wow-delay=".8s"
                className="wow fadeInLeft"
                data-splitting
              >
                Visit Us.
              </h3>
              <div data-wow-delay=".9s" className="item wow fadeInLeft">
                <h6>
                  {ContactFromDate.location.first}
                  <br />
                  {ContactFromDate.location.second}
                </h6>
              </div>
              <div data-wow-delay=".7s" className="social mt-50 wow fadeInLeft">
                <a
                  target="_blank"
                  href="https://www.facebook.com/kodexolabs"
                  className="icon"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/kodexolabs/"
                  className="icon"
                  rel="noreferrer"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
