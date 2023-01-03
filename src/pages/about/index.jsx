import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar-full-menu/navbar.full-menu";
import DarkTheme from "../../layouts/Dark";
import Head from "next/head";
const Intro = dynamic(() =>
  import("../../components/AboutUs/intro")
);
const Content1 = dynamic(() =>
  import("../../components/AboutUs/content1")
);
const Content2 = dynamic(() =>
  import("../../components/AboutUs/content2")
);
const Content3 = dynamic(() =>
  import("../../components/AboutUs/content3")
);
const Content4 = dynamic(() =>
  import("../../components/AboutUs/content6")
);
const Content5 = dynamic(() =>
  import("../../components/AboutUs/content7")
);
const Footer = dynamic(() =>
  import("../../components/Footer/footer")
);
const Introduction = dynamic(() =>
  import("../../components/AboutUs/introduction")
);

const About = () => {
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
  return (
    <>
      <Head>
        <meta
          name="description"
          content="About Kodexo Labs, represents the narrative of a software development agency. Our mission, and vision behind development & design are showcased in this section."
        />
        <title>Let&apos;s Talk About Us | Kodexo Labs</title>
        <link rel="canonical" href="https://kodexolabs.com/about" />
      </Head>
      <DarkTheme>
        <Navbar nr={navbarRef} lr={logoRef} from="about-dark" />

        <Introduction />
          <Intro />
          <Content1 />
          <Content2 />
          <Content3 />
          <Content4 />
          <Content5 />
          <Footer />
      </DarkTheme>
    </>
  );
};

export default About;
