import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { BsFillCalendarEventFill } from "react-icons/bs";
import Layout from "../../../../layouts/Layout";
import ErrorPage from "../../../../components/ErrorPage";
import Container from "../../../../components/Container";

function SlugEcosystem({ blogs, ecosystems }) {
  const { slug } = useParams();

  function reverseString(str) {
    return str.split("-").reverse().join("/");
  }

  let checkSlug = [];

  ecosystems?.data.data.map((item) => {
    return checkSlug.push(item.attributes.Name.toLowerCase());
  });

  const listPost = blogs.data.map((blog) => {
    return {
      categories: blog.attributes.category?.data.attributes.Name,
      title: blog.attributes.title,
      content: blog.attributes.content,
      description: blog.attributes.description,
      slug: blog.attributes.slug,
      image:
        process.env.REACT_APP_DOMAIN +
        blog?.attributes.images.data[0].attributes.url,

      author: blog.attributes.author?.data.attributes.FullName,
      ecosystem: blog.attributes.ecosystem.data.attributes.Name,
      createdAt: blog.attributes.createdAt,
    };
  });

  return (
    <Layout>
      <Container>
        <div className="mt-10 ">
          <h2 className="w-full font-bold relative z-10">
            <span className="pr-2 text-3xl capitalize">{slug}</span>
          </h2>
          <div className="w-full ">
            {checkSlug.includes(slug) ? (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:pr-10 md:pr-10">
                {listPost
                  .filter((eco) => eco.ecosystem.toLowerCase().includes(slug))
                  .map((blog) => (
                    <>
                      <div className="mt-2.5 mb-12 z-10">
                        <Link to={`/blogs/${blog.slug}`}>
                          <div className="h-[250px] hover__image w-full rounded-[8px] overflow-hidden">
                            <img
                              className="w-full  h-full object-cover"
                              src={blog.image}
                              alt=""
                            />
                          </div>

                          <h2 className="font-bold lg:h-14 md:h-14 text-xl my-2 hover:text-main transition-all">
                            {blog.title}
                          </h2>
                        </Link>

                        <p className="line-clamp-3 ">{blog.description}</p>
                        <div className="flex justify-between mt-2">
                          <span className="flex pb-2 leading-[14px] font-light  text-sm text-text">
                            <FaUserTie className="mr-1" />
                            <span className="block font-semibold">
                              {blog.author}
                            </span>
                          </span>
                          <span className="font-light flex pb-2 leading-[14px] text-sm text-text">
                            <BsFillCalendarEventFill className="mr-1" />
                            <span className="block">
                              {reverseString(blog.createdAt.substring(0, 10))}
                            </span>
                          </span>
                        </div>
                      </div>
                    </>
                  ))}
              </div>
            ) : (
              <ErrorPage />
            )}
          </div>
          <div className="blur__bg-head lg:block md:block hidden"></div>
        </div>
        <div className="blur__bg overflow-hidden lg:block md:block hidden"></div>
      </Container>
    </Layout>
  );
}

export default SlugEcosystem;
