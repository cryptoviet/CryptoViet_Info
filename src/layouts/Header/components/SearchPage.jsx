import React from "react";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Container from "../../../components/Container";
import Sidebar from "../../../components/Sidebar";
import Layout from "../../Layout";

function SearchPage({ blogs }) {
  function reverseString(str) {
    return str.split("-").reverse().join("/");
  }
  const search = useLocation().search;
  const keyword = new URLSearchParams(search).get("q");

  const filteredBlog = blogs?.data.filter((blog) =>
    blog.attributes.title.toLowerCase().includes(keyword)
  );

  // const getAllBlog = blogs.data.map((blog) => {
  //   return blog;
  // });
  let arr = filteredBlog;
  // filteredBlog.length > 0 ? (arr = filteredBlog) : (arr = getAllBlog);

  // console.log(arr);
  return (
    <Layout>
      <Container>
        <div className="mt-16">
          <div className="lg:flex flex-row flex-none">
            <div className="lg:w-[75%] lg:mr-10 w-full">
              <h2 className="text-3xl text-center font-bold my-6">
                Đã tìm thấy{" "}
                <span className="font-bold text-main">
                  {keyword !== null ? filteredBlog?.length : "0"}
                </span>{" "}
                <span>kết quả cho từ khóa "{keyword}"</span>
              </h2>
              <div
                className={`${
                  filteredBlog?.length > 0 &&
                  "grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1"
                }  gap-4 lg:pr-10 md:pr-10`}
              >
                {arr.length > 0 ? (
                  <>
                    {arr.map((blog) => (
                      <>
                        <div className="mt-2.5 mb-12 z-10">
                          <Link to={`/${blog.attributes.slug}`}>
                            <div className="h-[250px] hover__image w-full rounded-[8px] overflow-hidden">
                              <img
                                className="w-full  h-full object-cover"
                                src={
                                  process.env.REACT_APP_DOMAIN +
                                  blog?.attributes.images.data[0].attributes.url
                                }
                                alt=""
                              />
                            </div>

                            <h2 className="font-bold lg:h-14 md:h-14 text-xl my-2 hover:text-main transition-all">
                              {blog?.attributes.title}
                            </h2>
                          </Link>

                          <p className="line-clamp-3 ">
                            {blog.attributes.description}
                          </p>
                          <div className="  flex justify-between mt-4">
                            <span className="flex pb-2 leading-[14px] font-light  text-sm text-text">
                              <FaUserTie className="mr-1" />
                              <span className="block font-semibold">
                                {
                                  blog?.attributes.author.data.attributes
                                    .FullName
                                }
                              </span>
                            </span>
                            <span className="font-light flex pb-2 leading-[14px] text-sm text-text">
                              <BsFillCalendarEventFill className="mr-1" />
                              <span className="block">
                                {reverseString(
                                  blog.attributes.createdAt.substring(0, 10)
                                )}
                              </span>
                            </span>
                          </div>
                        </div>
                      </>
                    ))}
                  </>
                ) : (
                  <div className="w-2/4 mx-auto mt-24">
                    <img
                      className="mx-auto w-1/3"
                      src="images/search.svg"
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="lg:w-[25%] ">
              <Sidebar />
            </div>
          </div>
        </div>
        <div className="blur__bg-head lg:block md:block hidden"></div>
      </Container>
      <div className="blur__bg overflow-hidden lg:block md:block hidden"></div>
    </Layout>
  );
}

export default SearchPage;
