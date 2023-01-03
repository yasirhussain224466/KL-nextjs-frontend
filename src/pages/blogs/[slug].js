import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar-full-menu/navbar.full-menu";
import DarkTheme from "../../layouts/Dark";
import Footer from "../../components/Footer/footer";
const BlogsDetailIntro = dynamic(() =>
  import("../../components/BlogsDetailIntro/index.js")
);
const Blogs2 = dynamic(() => import("../../components/blog/section1"));
import Head from "next/head";

async function clientSideDataFetching(slug) {
  const res1 = await fetch(
    `${process.env.URL}/v1/blogs?filters[slug][$eq]=${slug}&populate=%2A`
  );
  const jsonBlogData = await res1.json();
  return jsonBlogData;
}

const CaseStudy = (props) => {
  console.log(props?.data?.data[0]?.attributes?.titleTag);
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
          content={props?.data?.data[0]?.attributes?.metaTag}
        />
        <title>{props?.data?.data[0]?.attributes?.titleTag}</title>
        <link rel="canonical" href="https://kodexolabs.com/blogs/" />
      </Head>

      <DarkTheme>
        <Navbar nr={navbarRef} lr={logoRef} from="about-dark" />
          <BlogsDetailIntro
            BlogsDetailData={props?.data?.data[0]?.attributes}
          />
          <Blogs2 />
          <Footer />
      </DarkTheme>
    </>
  );
};

export const getServerSideProps = async (context) => {
  return {
    props: {
      data: await clientSideDataFetching(context?.query?.slug),
    },
  };
};

export default CaseStudy;
