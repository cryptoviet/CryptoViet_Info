import React from "react";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Container from "../../../components/Container";
import ErrorPage from "../../../components/ErrorPage";
import Layout from "../../../layouts/Layout";
function SlugAnalytics({ blogs, categories }) {
  const { slug } = useParams();
  function reverseString(str) {
    return str.split("-").reverse().join("/");
  }

  const languageVi = [
    {
      vi: "Kiến Thức",
      slug: "kien-thuc",
    },

    {
      vi: "Thư viện",
      slug: "thu-vien",
    },
    {
      vi: "Airdrop",
      slug: "airdrop",
    },

    {
      vi: "Report",
      slug: "report",
    },
  ];

  const checkSlug = [
    "/vi/analytics/he-sinh-thai",
    "/vi/analytics/airdrop",
    "/vi/analytics/nft",
    "/vi/analytics/kien-thuc",
    "/vi/analytics/thu-vien",
    "/vi/analytics/report",
  ];
  const listPost = blogs.data.map((blog) => {
    return {
      categories: blog.attributes?.category?.data?.attributes?.slug,
      title: blog.attributes.title,
      content: blog.attributes.content,
      description: blog.attributes.description,
      slug: blog.attributes.slug,
      image:
        process.env.REACT_APP_DOMAIN +
        blog?.attributes?.images?.data[0]?.attributes?.url,

      author: blog?.attributes?.author?.data?.attributes?.FullName,
      ecosystem: blog?.attributes?.ecosystem?.data?.attributes?.Name,

      createdAt: blog.attributes.createdAt,
    };
  });

  return (
    <Layout>
      <Container>
        <div className="mt-10 min-h-[518px]">
          <h2 className="w-full font-bold mb-14">
            <span className="pr-2 text-3xl capitalize relative z-10">
              {languageVi.map((item) => item.slug === slug && item.vi)}
            </span>
          </h2>
          <div className="w-full">
            {checkSlug.includes(`/vi/analytics/${slug}`) ? (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10 lg:pr-10 md:pr-10">
                {listPost
                  .filter(
                    (eco) =>
                      eco.categories !== undefined &&
                      eco.categories.includes(slug)
                  )
                  .reverse()
                  .map((blog) => (
                    <>
                      <div className="z-10">
                        <Link to={`/${blog.slug}`} className="post__content">
                          <div className="h-[250px] hover__image w-full rounded-[8px] overflow-hidden">
                            <img
                              className="w-full  h-full  "
                              src={blog?.image}
                              alt=""
                            />
                          </div>

                          <h2 className="font-bold lg:h-14 md:h-14 lg:text-xl md:text-lg text-base my-2 hover:text-main transition-all">
                            {blog.title}
                          </h2>
                        </Link>

                        <div className="flex justify-between mt-4">
                          <span className="flex pb-2 leading-[14px] font-light  text-sm text-text">
                            <FaUserTie className="mr-1" />
                            <span className="block font-semibold">
                              {blog?.author}
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

export default SlugAnalytics;
