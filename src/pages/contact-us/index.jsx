/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar-full-menu/navbar.full-menu";
import DarkTheme from "../../layouts/Dark";
const Footer = dynamic(() => import("../../components/Footer/footer"));
const ContactForm = dynamic(() =>
  import("../../components/Contact-form/contact-form")
);
const ContactHeader = dynamic(() =>
  import("../../components/contactFormHeader/index")
);
const Map = dynamic(() => import("../../components/Map/index.js"));

const Contact = (props) => {
  const firstTitle = "Let's talk";
  const secondTitle = "about your project.";
  const content =
    "Feel free to ask me any question or let’s do to talk about our future collaboration.";
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const arrayOfServices = props?.data?.data;

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
    document.querySelector("body").classList.add("contact-page");
    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
  }, [navbarRef]);
  React.useEffect(() => {
    setTimeout(() => {
      if (document.querySelector("#ieatmaps")) initMap();
    }, 1000);
  }, []);
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Are you looking for expert software development services? Kodexo Labs is excited to envision your dream products. Contact us to discuss your idea, our solution!"
        />
        <title>Let&apos;s Contact Our Experts | Kodexo Labs</title>
        <link rel="canonical" href="https://kodexolabs.com/contact-us" />
      </Head>
      <DarkTheme style={{ backgroundColor: "black" }}>
        <Navbar nr={navbarRef} lr={logoRef} from="about-dark" />
        <div style={{ backgroundColor: "black" }} className="container">
          <ContactHeader
            firstTitle={firstTitle}
            secondTitle={secondTitle}
            content={content}
          />
        </div>
        <div className="main-content">
          <ContactForm arrayOfServices={arrayOfServices} />
          <Map />
          <Footer hideBGCOLOR />
        </div>
      </DarkTheme>
      <Script id="map" strategy="afterInteractive" src="/js/map.js"></Script>
    </>
  );
};

export default Contact;

export async function getServerSideProps() {
  const jsonData = await fetch(
    `${process.env.URL}/v1/services?sort=createdAt&populate=%2A`
  );
  const data = await jsonData.json();
  return { props: { data } };
}
