import React from "react";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { BsFillCalendarEventFill } from "react-icons/bs";
function Content({ blogs, categories, loading }) {
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

      author: blog?.attributes?.author?.data?.attributes?.FullName,

      createdAt: blog.attributes.createdAt,
    };
  });

  function reverseString(str) {
    return str.split("-").reverse().join("/");
  }

  return (
    <>
      {categories?.data.map((category, idx) => (
        <div>
          <h2 className="w-full font-bold">
            <span className=" pr-2 text-2xl">{category.attributes.Title}</span>
          </h2>
          <div className="mt-6 flex lg:flex-row md:flex-row flex-col gap-5">
            {listPost
              .filter(
                (cat) =>
                  cat.categories !== null &&
                  cat?.categories === category.attributes.Name
              )
              .reverse()
              .slice(0, 1)
              .map((blog) => (
                <>
                  {blog.categories === category.attributes.Name && (
                    <div className="mt-2.5 lg:w-[50%] mb-12 md:lg:w-[50%]">
                      <Link to={`/${blog.slug}`} className="post__content">
                        <div className="h-[250px] hover__image w-full rounded-[8px] overflow-hidden">
                          <img
                            className="w-full  h-full object-cover"
                            src={loading ? "images/404.svg" : blog.image}
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
                .filter(
                  (cat) =>
                    cat.categories !== null &&
                    cat?.categories === category.attributes.Name
                )
                .reverse()
                .slice(1, 4)
                .map((blog) => (
                  <>
                    <div className="flex flex-row gap-4 ">
                      <div className="w-[40%] h-[100px] hover__image rounded-[8px] overflow-hidden ">
                        <Link to={`/${blog.slug}`} className="post__content">
                          <img
                            className="w-full h-full object-cover "
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
