import React from "react";
import ErrorPage from "../../../components/ErrorPage";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Layout from "../../../layouts/Layout";
import Container from "../../../components/Container";

function SlugCV({ blogs }) {
  const { slug } = useParams();
  function reverseString(str) {
    return str.split("-").reverse().join("/");
  }

  const checkSlug = [
    "/vi/he-sinh-thai-cryptoviet/crypto-viet-ventures",
    "/vi/he-sinh-thai-cryptoviet/grindy-technologies",
  ];

  const listPost = blogs.data.map((blog) => {
    return {
      categories: blog.attributes?.category?.data?.attributes?.Name,
      title: blog.attributes.title,
      content: blog.attributes.content,
      description: blog.attributes.description,
      slug: blog.attributes.slug,
      image:
        process.env.REACT_APP_DOMAIN +
        blog?.attributes.images.data[0].attributes.url,

      author: blog.attributes.author?.data.attributes.FullName,
      ecosystem: blog.attributes.ecosystem.data.attributes.Name,
      cv_ecosystem: blog.attributes?.cv_ecosystem?.data?.attributes?.Name,
      slug_cv: blog.attributes?.cv_ecosystem?.data?.attributes?.slug,
      createdAt: blog.attributes.createdAt,
    };
  });

  console.log(listPost);

  return (
    <Layout>
      <Container>
        <div className="mt-10 min-h-[518px]">
          <h2 className="w-full font-bold">
            <span className="pr-2 text-3xl capitalize relative z-10">
              {slug === "crypto-viet-ventures"
                ? "CryptoViet Ventures"
                : slug.replace("-", " ")}
            </span>
          </h2>
          <div className="w-full">
            {checkSlug.includes(`/vi/he-sinh-thai-cryptoviet/${slug}`) ? (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:pr-10 md:pr-10">
                {listPost
                  .filter(
                    (eco) =>
                      eco.slug_cv !== undefined &&
                      eco.slug_cv.toLowerCase().includes(slug)
                  )
                  .map((blog) => (
                    <>
                      <div className="mt-2.5 mb-12 z-10">
                        <Link to={`/${blog.slug}`}>
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
        </div>
        <div className="blur__bg-head lg:block md:block hidden"></div>
      </Container>
      <div className="blur__bg overflow-hidden lg:block md:block hidden"></div>
    </Layout>
  );
}

export default SlugCV;
