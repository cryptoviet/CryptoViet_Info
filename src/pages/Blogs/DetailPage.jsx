import MarkdownIt from "markdown-it";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ErrorPage from "../../components/ErrorPage";
import Sidebar from "../../components/Sidebar";
import Layout from "../../layouts/Layout";
import { Helmet } from "react-helmet";

function DetailPage({ blogs }) {
  function reverseString(str) {
    return str.split("-").reverse().join("/");
  }

  const tagCode = document.getElementsByTagName("pre");

  const copyToClipboard = (event) => {
    event.stopPropagation();
    const textCop = event.target.innerText;
    navigator.clipboard.writeText(textCop);

    event.target.classList.add("clicked");
  };

  Array.from(tagCode).forEach((codeElement) => {
    codeElement.addEventListener("click", copyToClipboard);
  });

  useEffect(() => {
    const images = document.querySelectorAll(".post__detail img");
    const tagLinks = document.querySelectorAll(".post__detail a");
    tagLinks.forEach((link) => {
      link.setAttribute("target", "_blank");
    });

    images.forEach((item) => {
      const string = "https://admin.cryptoviet.info";
      const src = item.getAttribute("src");

      if (src && src.includes(string)) return string + src;

      item.setAttribute("src", string + src);
    });
  });

  const { slug } = useParams();
  let blog = {};
  if (blog) {
    let arr = blogs.data.filter((blog) => blog?.attributes?.slug === slug);
    blog = arr[0];
  } else {
    blog = {};
    return false;
  }
  const md = new MarkdownIt({
    html: true,
  });

  console.log(blog.attributes.SEO);

  return (
    <Layout>
      <Helmet>
        <title>{blog?.attributes.title}</title>
        <meta name="keywords" content={blog?.attributes?.SEO?.keywords} />
        <meta
          name="description"
          content={blog?.attributes?.SEO?.metaDescription}
        />
          <meta itemprop="name" content={blog?.attributes.slug} />
        <meta
          itemprop="description"
          content={blog?.attributes?.SEO?.metaDescription}
        />
        <meta
          itemprop="image"
          content={
            process.env.REACT_APP_DOMAIN +
            blog?.attributes.images.data[0].attributes.url
          }
        />
        <meta property="og:url" content={blog?.attributes?.SEO?.canonicalURL} />
        <meta property="og:title" content={blog?.attributes.title} />
        <meta
          property="og:description"
          content={blog?.attributes?.SEO?.metaDescription}
        />
        <meta
          property="og:image"
          content={
            process.env.REACT_APP_DOMAIN +
            blog?.attributes.images.data[0].attributes.url
          }
        />
        <meta property="og:image:height" content="628" />
        <meta property="og:image:width" content="1200" />

        <meta name="twitter:title" content={blog?.attributes.title} />
        <meta
          name="twitter:description"
          content={blog?.attributes?.SEO?.metaDescription}
        />

        <meta
          name="twitter:image"
          content={
            process.env.REACT_APP_DOMAIN +
            blog?.attributes.images.data[0].attributes.url
          }
        />
        <link rel="canonical" href={blog?.attributes?.SEO?.canonicalURL}></link>
      </Helmet>
      <div className="container mx-auto mb-40">
        {blog !== undefined ? (
          <div className="lg:flex flex-row flex-none mt-12">
            <div className="lg:w-[75%] lg:mr-10 w-full">
              <div>
                <article className="content__post">
                  <header>
                    <h1
                      title={blog.attributes.title}
                      className="!text-4xl !leading-[1.3] !font-medium mb-4"
                    >
                      {blog.attributes.title}
                    </h1>
                  </header>
                  <Link
                    to={`/vi/analytics/${
                      blog.attributes.category.data?.attributes?.slug !==
                      undefined
                        ? blog.attributes?.category?.data?.attributes?.slug
                        : ""
                    }`}
                  >
                    <span className="bg-main hover:bg-item transition-all rounded-xl text-white text-sm px-2 py-1">
                      {blog.attributes?.category?.data?.attributes?.Title !==
                      undefined
                        ? blog.attributes?.category?.data?.attributes?.Title
                        : "Analytics"}
                    </span>
                  </Link>
                  <p className="font-semibold mt-10">
                    Posted by{" "}
                    {blog?.attributes?.author?.data?.attributes?.FullName} - {}
                    {reverseString(blog.attributes.createdAt.substring(0, 10))}
                  </p>

                  <p className="font-base italic my-10">
                    {blog.attributes.description}
                  </p>
                  <img
                    className="h-auto w-full object-contain"
                    src={
                      process.env.REACT_APP_DOMAIN +
                      blog?.attributes.images.data[0].attributes.url
                    }
                    alt=""
                  />
                  <section
                    className="post__detail mb-12"
                    dangerouslySetInnerHTML={{
                      __html: md.render(blog.attributes.content),
                    }}
                  />
                </article>
              </div>

              {/* <Comment /> */}
            </div>

            <div className="lg:w-[25%] ">
              <Sidebar />
            </div>
          </div>
        ) : (
          <ErrorPage />
        )}
        
      </div>
    </Layout>
  );
}

export default DetailPage;
