import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../../components/Container";
import Sidebar from "../../../../components/Sidebar";
import Layout from "../../../../layouts/Layout";
import { FaUserTie } from "react-icons/fa";
import { BsFillCalendarEventFill } from "react-icons/bs";

function Ecosystem({ blogs, ecosystems }) {
  function reverseString(str) {
    return str.split("-").reverse().join("/");
  }

  const listPost = blogs.data.map((blog) => {
    return {
      categories: blog.attributes?.category?.data?.attributes?.Name,
      title: blog.attributes.title,
      content: blog.attributes.content,
      description: blog.attributes.description,
      slug: blog.attributes.slug,
      image:
        process.env.REACT_APP_DOMAIN +
        blog?.attributes?.images?.data[0]?.attributes?.url,

      author: blog?.attributes?.author?.data?.attributes?.FullName,
      ecosystem: blog.attributes?.ecosystem?.data?.attributes?.Name,
      createdAt: blog.attributes.createdAt,
    };
  });

  return (
    <Layout>
      <Container>
        <div className="lg:flex flex-row flex-none mt-10">
          <div className="lg:w-[75%] w-full z-10">
            <h2 className="w-full font-bold mb-14">
              <span className="pr-2 text-3xl  capitalize relative z-10">
                Hệ sinh thái
              </span>
            </h2>
            {ecosystems?.data?.data.map((item) => (
              <>
                <div>
                  <h2 className="w-full pr-2 text-2xl font-bold">
                    {item.attributes.Name}
                  </h2>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 lg:pr-10 md:pr-10">
                  {listPost
                    .filter(
                      (eco) =>
                        eco.ecosystem !== undefined &&
                        eco.ecosystem.includes(item.attributes.Name)
                    )
                    .slice(0, 2)
                    .map((blog) => (
                      <>
                        <div className="mt-2.5 mb-12 ">
                          <Link to={`/${blog.slug}`} className="post__content">
                            <div className="h-[250px] hover__image w-full rounded-[8px] overflow-hidden">
                              <img
                                className="w-full  h-full object-cover"
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
                      </>
                    ))}
                </div>
              </>
            ))}
          </div>

          <div className="lg:w-[25%] ">
            <Sidebar />
          </div>
        </div>
        <div className="blur__bg-head lg:block md:block hidden"></div>
      </Container>
      <div className="blur__bg overflow-hidden lg:block md:block hidden"></div>
    </Layout>
  );
}

export default Ecosystem;
