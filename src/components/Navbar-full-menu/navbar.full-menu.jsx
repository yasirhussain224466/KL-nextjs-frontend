/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";

const NavbarFullMenu = ({ nr, lr, theme }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        id="navi"
        ref={nr}
        className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""}`}
      >
        <div className="container-fluid">
          <Link href="/">
            <div className="logo">
              <a href="#">
                <img
                  ref={lr}
                  src="/img/kodexo.png"
                  style={{ width: "150px" }}
                  alt="logo"
                />
              </a>
            </div>
          </Link>
          <div
            onClick={() => setToggle(!toggle)}
            style={{ paddingTop: "15px" }}
            className="menu-icon logo nav-bar-responsive"
          >
            {toggle == false ? (
              <>
                <span className="icon">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span className="text" data-splitting>
                  <span className="menu-text class-hide-mob">Menu</span>
                </span>
              </>
            ) : (
              <div style={{ display: "flex" }}>
                <span style={{ fontSize: "15px" }}>
                  <i className="fa fa-times" aria-hidden="true"></i>
                </span>
                <span className="text" data-splitting>
                  <span
                    style={{ fontSize: "14px" }}
                    className="menu-text class-hide-mob"
                  >
                    Close
                  </span>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                    <div
                      onClick={() => setToggle(!toggle)}
                      className="o-hidden"
                    >
                      <Link href="/">
                        <a className="link">
                          <span className="nm">01.</span>Home
                        </a>
                      </Link>
                    </div>
                  </li>
                  {/* <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">01.</span>Home
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div> */}
                  {/* <div className="sub-menu">
                      <ul> */}
                  {/* <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/">
                              <a className="sub-link">
                                <span className="nm">01.</span>Main Home
                              </a>
                            </Link>
                          </div>
                        </li> */}
                  {/* <li>
                          <div className="o-hidden">
                            <Link href="/homepage/home2-dark">
                              <a className="sub-link">
                                <span className="nm">02.</span>Creative Agency
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/homepage/home5-dark">
                              <a className="sub-link">
                                <span className="nm">03.</span>Digital Agency
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/homepage/home5-dark">
                              <a className="sub-link">
                                <span className="nm">04.</span>Business One Page
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/homepage/home3-dark">
                              <a className="sub-link">
                                <span className="nm">05.</span>Corporate
                                Business
                              </a>
                            </Link>
                          </div>
                        </li>

                        <li>
                          <div className="o-hidden">
                            <Link href="/homepage/home6-dark">
                              <a className="sub-link">
                                <span className="nm">06.</span>Modern Agency
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/homepage/home7-dark">
                              <a className="sub-link">
                                <span className="nm">07.</span>Freelancer
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/homepage/home8-dark">
                              <a className="sub-link">
                                <span className="nm">08.</span>Architecture
                              </a>
                            </Link>
                          </div>
                        </li> */}
                  {/* </ul>
                    </div> */}
                  {/* </li> */}
                  <li>
                    <div
                      onClick={() => setToggle(!toggle)}
                      className="o-hidden"
                    >
                      <Link href="/about/">
                        <a className="link">
                          <span className="nm">02.</span>About Us
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => setToggle(!toggle)}
                      className="o-hidden"
                    >
                      <Link href="/case-studies">
                        <a className="link">
                          <span className="nm">03.</span>Case Studies
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => setToggle(!toggle)}
                      className="o-hidden"
                    >
                      <Link href="/blogs">
                        <a className="link">
                          <span className="nm">04.</span>Blogs
                        </a>
                      </Link>
                    </div>
                  </li>
                  {/* <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">04.</span>Blogs
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/blog/blog-dark">
                              <a className="sub-link">
                                <span className="nm">01.</span>Blog Standerd
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/blog-list/blog-list-dark">
                              <a className="sub-link">
                                <span className="nm">02.</span>Blog List
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/blog-grid/blog-grid-dark">
                              <a className="sub-link">
                                <span className="nm">03.</span>Blog Grid
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/blog-details/blog-details-dark">
                              <a className="sub-link">
                                <span className="nm">04.</span>Blog Details
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li> */}
                  <li>
                    <div
                      onClick={() => setToggle(!toggle)}
                      className="o-hidden"
                    >
                      <Link href="/contact-us">
                        <a className="link">
                          <span className="nm">05.</span>Contact
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => setToggle(!toggle)}
                      className="o-hidden"
                    >
                      <Link href="/careers">
                        <a className="link">
                          <span className="nm">06.</span>Careers
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <h6>Phone :</h6>
                  <p>021 36720047</p>
                </div>
                <div className="item">
                  <h6>Address :</h6>
                  <p>
                    Bangalow 8/12, 1st Floor, 4F Nazimabad, Karachi, Pakistan
                  </p>
                </div>
                <div className="item">
                  <h6>Email :</h6>
                  <p>contact@kodexolabs.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;
