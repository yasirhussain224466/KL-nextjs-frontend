/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Script from "next/script";
import Navbar from "../../components/Navbar-full-menu/navbar.full-menu";
import DarkTheme from "../../layouts/Dark";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("../../components/Footer/footer"));
import Intro2 from "../../components/Intro2/intro2";
const About = dynamic(() => import("../../components/About-us2/about-us2"));
const ItExpert = dynamic(() => import("../../components/Home/ItExpert"));
const CaseStudyTestimonial = dynamic(() => import("../../components/Home/caseStudy"));
const ClientSays = dynamic(() => import("../../components/Home/testimonial"));
import ContactForm from "../../components/Home/contactForm";
const LatestNews = dynamic(() => import("../../components/Home/LatestNews"));
const ContactHeader = dynamic(() => import("../../components/Contact-header/contact-header"));

const Contact = ({ data }) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 100) {
      navbar?.classList.add("nav-scroll");
    } else {
      navbar?.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > !0) {
        navbar?.classList.add("nav-scroll");
      } else {
        navbar?.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  React.useEffect(() => {
    setTimeout(() => {
      if (document.querySelector("#ieatmaps")) initMap();
    }, 1000);
  }, []);
  return (
    <>
      <DarkTheme>
        <Navbar nr={navbarRef} lr={logoRef} from="about-dark" />
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <Intro2 />
              </div>
              <div className="col-lg-5 hide-mob">
                <ContactHeader />
              </div>
            </div>
          </div>
          <About />
          <ItExpert />
          <CaseStudyTestimonial data={data?.caseStudies} />
          <ClientSays data={data?.clientSays} />
          <ContactForm />
          <LatestNews data={data?.blogs} />
          <Footer hideBGCOLOR />
      </DarkTheme>
      <Script id="map" strategy="afterInteractive" src="/js/map.js"></Script>
    </>
  );
};

export default Contact;
