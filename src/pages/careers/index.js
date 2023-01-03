import React from 'react'
import Navbar from "../../components/Navbar-full-menu/navbar.full-menu";
import DarkTheme from "../../layouts/Dark";
import Head from "next/head";
import Intro from "../../components/Career/intro";
import Content1 from "../../components/Career/content1.js";
import Content2 from "../../components/Career/content2.js";
import Footer from "../../components/Footer/footer";

const CaseStudy = (props) => {
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
      if (window.pageYOffset >!0) {
        navbar?.classList.add("nav-scroll");
      } else {
        navbar?.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Want to work in an environment where you are involved in every aspect of software development? Apply today because we're looking for passionate like you! "
        />
        <title>Build Your Career With Us | Kodexo Labs</title>
        <link rel="canonical" href="https://kodexolabs.com/careers" />
      </Head>
      <DarkTheme>
        <Navbar nr={navbarRef} lr={logoRef} from="about-dark" />
        <Intro />
        <Content1 />
        <Content2 />
        <Footer />
      </DarkTheme>
    </>
  );
};

export default CaseStudy;