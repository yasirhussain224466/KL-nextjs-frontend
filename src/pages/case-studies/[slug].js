import React from "react";
import dynamic from "next/dynamic";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar-full-menu/navbar.full-menu";
const Intro = dynamic(() => import("../../components/Intro/index"));
const Content1 = dynamic(() =>
  import("../../components/CaseStudyContent1/index.js")
);
const Content2 = dynamic(() =>
  import("../../components/CaseStudyContent2/index.js")
);
const Content3 = dynamic(() =>
  import("../../components/CaseStudyContent3/index.js")
);
const Content4 = dynamic(() =>
  import("../../components/CaseStudyContent4/index.js")
);
const Content5 = dynamic(() => import("../../components/CaseStudyContent5"));
const Content6 = dynamic(() =>
  import("../../components/CaseStudyContent6/index.js")
);
const Footer = dynamic(() => import("../../components/Footer/footer"));
import Head from "next/head";

async function clientSideDataFetching(slug) {
  const res1 = await fetch(
    `${process.env.URL}/v1/case-studies?filters[slug][$eq]=${slug}&populate=%2A`
  );
  const jsonCaseStudyData = await res1.json();
  return jsonCaseStudyData;
}

const CaseStudy = (props) => {
  console.log(props);
  const IntroData = {
    heading: props?.data?.data[0]?.attributes?.title,
    region: props?.data?.data[0]?.attributes?.region,
    industry: props?.data?.data[0]?.attributes?.industry,
    image:
      props?.data?.data[0]?.attributes?.img1?.data?.attributes?.formats?.medium
        ?.url,
    alt: props?.data?.data[0]?.attributes?.img1?.data?.attributes
      ?.alternativeText,
  };
  const content1 = {
    abstractText: props?.data?.data[0]?.attributes?.abstract,
    image:
      props?.data?.data[0]?.attributes?.img2?.data[0]?.attributes?.formats
        ?.medium?.url,
    alt: props?.data?.data[0]?.attributes?.img2?.data[0]?.attributes
      ?.alternativeText,
  };
  const content2 = {
    image:
      props?.data?.data[0]?.attributes?.img3?.data?.attributes?.formats?.medium
        ?.url,
    alt: props?.data?.data[0]?.attributes?.img3?.data?.attributes
      ?.alternativeText,
  };
  const content3 = {
    solutions: props?.data?.data[0]?.attributes?.solution,
    challenges: props?.data?.data[0]?.attributes?.challenge,
  };
  const content4 = {
    richText: props?.data?.data[0]?.attributes?.caseStudyBody,
  };
  const content5 = {
    benefits: props?.data?.data[0]?.attributes?.benefits?.data,
    boxvalue1: props?.data?.data[0]?.attributes?.benefitsBoxvalue1,
    boxvalue2: props?.data?.data[0]?.attributes?.benefitsBoxvalue2,
    boxvalue3: props?.data?.data[0]?.attributes?.benefitsBoxvalue3,
    boxvalue4: props?.data?.data[0]?.attributes?.benefitsBoxvalue4,
    boxContent1: props?.data?.data[0]?.attributes?.benefitsBoxContent1,
    boxContent2: props?.data?.data[0]?.attributes?.benefitsBoxContent2,
    boxContent3: props?.data?.data[0]?.attributes?.benefitsBoxContent3,
    boxContent4: props?.data?.data[0]?.attributes?.benefitsBoxContent4,
  };
  const content6 = {
    technologyStackPara: props?.data?.data[0]?.attributes?.techImgs,
  };
  console.log(content6);
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
        <link
          rel="canonical"
          href={`https://kodexolabs.com/case-studies/${props?.data?.data[0]?.attributes?.slug}`}
        />
      </Head>
      <DarkTheme>
        <Navbar nr={navbarRef} lr={logoRef} from="about-dark" />
        <Intro IntroData={IntroData} img="/img/coverImg.webp" />
        <Content1 content1={content1} />
        <Content2 content2={content2} img="/img/coverImg.webp" />
        <Content3 content3={content3} />
        {content4?.richText ? <Content4 content4={content4} /> : ""}
        <Content5 content5={content5} />
        <Content6 content6={content6} />
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

// // This function gets called at build time
// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch(`${process.env.URL}/v1/case-studies`);
//   const caseStudies = await res.json()

// //   // Get the paths we want to pre-render based on posts
//   const paths = caseStudies?.data?.map((post) => ({
//         params: { slug: post?.attributes?.slug?.toString() },
//   }))

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

// // This also gets called at build time
// export async function getStaticProps(context) {
//   const {params} = context;
//   // If the route is like /posts/1, then params.id is 1
//   const res = await fetch(
//     `${process.env.URL}/v1/case-studies/${String(params?.slug)}`
//   );
//   const caseStudy = await res.json()
//   // Pass post data to the page via props
//   return { props: { caseStudy } }
// }

export default CaseStudy;
