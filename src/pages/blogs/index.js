import React from "react";
import dynamic from "next/dynamic";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar-full-menu/navbar.full-menu";
const Footer = dynamic(() => import("../../components/Footer/footer"));
const Intro = dynamic(() => import("../../components/blog/intro.js"));
const BlogsCard = dynamic(() => import("../../components/BlogsCard"));
import Head from "next/head";
import { useRouter } from "next/router";

const CaseStudy = (props) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const [blogsData, setBlogsData] = React.useState(null);
  const [tagData, setTagData] = React.useState(null);
  const [tagId, setTagId] = React.useState(null);
  const router = useRouter();

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

  const fetchData = async function clientSideDataFetching(cond) {
    const res1 = await fetch(
      `${
        process.env.URL
      }/v1/blogs/?sort=createdAt&populate=%2A&filters[tags][tag_id][$contains]=${String(
        cond
      ).trim()}`
    );

    const res2 = await fetch(
      `${process.env.URL}/v1/tags/?sort=createdAt&populate=%2A`
    );

    const jsonBlogData = await res1.json();
    const jsonTagData = await res2.json();
    return {
      jsonBlogData,
      jsonTagData,
    };
  };
  React.useEffect(async () => {
    const { jsonBlogData, jsonTagData } = await fetchData(
      tagId ? tagId : router.query?.tag ? router.query?.tag : ""
    );
    setBlogsData(jsonBlogData);
    setTagData(jsonTagData);
  }, [tagId, router]);
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Kodexo Lab's blogs contain a variety of articles on software, web and mobile technologies, coding, development, project management. Explore more. "
        />
        <title>Explore Our Blogs Here | Kodexo Labs</title>
        <link rel="canonical" href="https://kodexolabs.com/blogs" />
      </Head>
      <DarkTheme>
        <Navbar nr={navbarRef} lr={logoRef} from="about-dark" />
        <Intro img="/img/headerblog.webp" name="BLOGS" />
        <div className="container">
          <div className="blog-select-position">
            <form id="contact-form" method="post" action="contact.php">
              <label className="blogs-select-heading">
                Browse our extensive library of Blog.
              </label>
              <br />
              <select
                onChange={(e) => setTagId(e?.target?.value)}
                placeholder="Tags"
                className="blogSelect"
              >
                <option value="">Filter by resource topics</option>
                {tagData?.data?.map((currElem, key) => {
                  return (
                    <option key={key} value={`${currElem?.attributes?.tag_id}`}>
                      {currElem?.attributes?.name}
                    </option>
                  );
                })}
              </select>
            </form>
          </div>
          <BlogsCard blogsData={blogsData} />
        </div>
        <Footer />
      </DarkTheme>
    </>
  );
};

export default CaseStudy;
