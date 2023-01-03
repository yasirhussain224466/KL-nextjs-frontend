import React from "react";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("../../components/Footer/footer"));
const Card = dynamic(() => import("../../components/case-study-card"));
const Intro4 = dynamic(() => import("../../components/Intro4/intro4"));
import Navbar from "../../components/Navbar-full-menu/navbar.full-menu";
import DarkTheme from "../../layouts/Dark";
import Head from "next/head";

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
          content="Let's dig into some visionary case studies of custom website and mobile application development. Kodexo Labs showcases our work with our best clients. "
        />
        <title>Innovative Mobile Apps Design Case Studies | Kodexo Labs</title>
        <link rel="canonical" href="https://kodexolabs.com/case-studies" />
      </Head>
      <DarkTheme>
        <Navbar nr={navbarRef} lr={logoRef} from="about-dark" />
        <Intro4 name="CASE STUDIES" img="/img/coverImg.webp" />
        <Card data={props?.data} />
        <Footer />
      </DarkTheme>
    </>
  );
};

export async function getServerSideProps() {
  const jsonData = await fetch(
    `${process.env.URL}/v1/case-studies?sort=createdAt&populate=%2A`
  );
  const data = await jsonData.json();
  return { props: { data } };
}

export default CaseStudy;
