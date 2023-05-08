import React from "react";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

function Content({ blogs, cvEcosystem }) {
  const { data } = useFetch(`${process.env.REACT_APP_DOMAIN}/api/posts`, {
    populate: "*",
    "filters[cv_ecosystem][$or][0][slug][$eq]": "grindy-technologies",
    "filters[cv_ecosystem][$or][1][slug][$eq]": "crypto-viet-ventures",

    "sort[0]": "id%3Adesc",
    // "pagination[start]": 0,
    // "pagination[limit]": 50,
  });

  const listPost = data?.data.map((blog) => {
    return {
      categories: blog.attributes?.category?.data?.attributes?.Name,
      title: blog.attributes.title,
      content: blog.attributes.content,
      description: blog.attributes.description,
      slug: blog.attributes.slug,
      image:
        process.env.REACT_APP_DOMAIN +
        blog?.attributes.images.data[0].attributes.url,

      author: blog?.attributes?.author?.data?.attributes?.FullName,
      createdAt: blog.attributes.createdAt,
      cv_ecosystem: blog?.attributes?.cv_ecosystem?.data?.attributes?.Name,
    };
  });

  function reverseString(str) {
    return str.split("-").reverse().join("/");
  }

  return (
    <>
      {cvEcosystem?.data?.data.map((ecosystem, idx) => (
        <div>
          <h2 className="w-full font-bold">
            <span className=" pr-2 text-2xl">{ecosystem.attributes.Name}</span>
          </h2>
          <div className="mt-6 flex lg:flex-row md:flex-row flex-col gap-5">
            {listPost
              ?.filter(
                (cat) =>
                  cat?.cv_ecosystem !== undefined &&
                  cat?.cv_ecosystem === ecosystem.attributes.Name
              )
              ?.slice(0, 1)
              .map((blog) => (
                <>
                  {blog.cv_ecosystem === ecosystem.attributes.Name && (
                    <div className="mt-2.5 lg:w-[50%] mb-12 md:lg:w-[50%]">
                      <Link to={`/${blog.slug}`} className="post__content">
                        <div className="h-[250px] hover__image w-full rounded-[8px] overflow-hidden">
                          <img
                            className="w-full  h-full  "
                            src={blog.image}
                            alt=""
                          />
                        </div>

                        <h2 className="font-bold text-xl my-2 hover:text-main transition-all">
                          {blog.title}
                        </h2>
                      </Link>

                      <div className="  flex justify-between mt-4">
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
                  )}
                </>
              ))}

            <div className="flex md:w-[50%] lg:w-[50%] flex-col gap-4 h-[380px]  mt-2.5">
              {listPost
                ?.filter(
                  (cat) => cat?.cv_ecosystem === ecosystem.attributes.Name
                )
                ?.slice(1, 4)
                .map((blog) => (
                  <>
                    <div className="flex flex-row gap-4 ">
                      <div className="w-[40%] h-[100px] hover__image rounded-[8px] overflow-hidden ">
                        <Link to={`/${blog.slug}`}>
                          <img
                            className="w-full h-full   "
                            src={blog.image}
                            alt=""
                          />
                        </Link>
                      </div>

                      <div className="w-[60%]">
                        <h2 className="font-bold text-base hover:text-main transition-all my-2 line-clamp-2">
                          <Link to={`/${blog.slug}`}>{blog.title}</Link>
                        </h2>

                        <div className="  flex justify-between mt-4">
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
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Content;
