import React from "react";
import Homepage from "./contact/contact-dark";
import Head from "next/head";

const Home = (props) => {
  console.log(props);
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="j-PG3fuX-MKh77jIARaTxd4cyugoz5HGmyKCqCWtNhY"
        />
        <meta
          name="description"
          content="Kodexo Labs - an app development company of leading IT solutions. With our expertise and experience, we offer seemless tech-driven web &#38; mobile services and products."
        />
        <title>
          Kodexo Labs - Software Development &#38; Consulting Agency
        </title>
        <link rel="canonical" href="https://kodexolabs.com/" />
      </Head>
        <Homepage data={props} />
    </>
  );
};

export async function getServerSideProps() {
  const caseStudiesJson = await fetch(
    `${process.env.URL}/v1/case-studies?sort=createdAt&populate=%2A`
  );
  const blogJson = await fetch(
    `${process.env.URL}/v1/blogs?sort=createdAt&populate=%2A`
  );
  const clientSaysJson = await fetch(
    `${process.env.URL}/v1/client-says?sort=createdAt&populate=%2A`
  );
  const caseStudies = await caseStudiesJson.json();
  const blogs = await blogJson.json();
  const clientSays = await clientSaysJson.json();
  return { props: { caseStudies, blogs, clientSays } };
}

export default Home;
