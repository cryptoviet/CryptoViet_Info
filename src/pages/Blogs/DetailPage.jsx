import MarkdownIt from "markdown-it";
import React from "react";
import { Link, useParams } from "react-router-dom";
import ErrorPage from "../../components/ErrorPage";
import Sidebar from "../../components/Sidebar";
import Layout from "../../layouts/Layout";
function DetailPage({ blogs }) {
  function reverseString(str) {
    return str.split("-").reverse().join("/");
  }

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

  return (
    <Layout>
      <div className="container mx-auto mb-40">
        {blog !== undefined ? (
          <div className="lg:flex flex-row flex-none mt-12">
            <div className="lg:w-[75%] lg:mr-10 w-full">
              <div>
                <article className="content__post">
                  <header>
                    <h3 className="text-4xl font-semibold mb-4">
                      {blog.attributes.title}
                    </h3>
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
                    Posted by {blog.attributes.author.data.attributes.FullName}{" "}
                    - {}
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
                    className="post__detail"
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
