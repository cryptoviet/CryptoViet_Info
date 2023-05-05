import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTelegramPlane,
  FaFacebook,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import useFetch from "../hooks/useFetch";
function Sidebar() {
  const { data } = useFetch(`${process.env.REACT_APP_DOMAIN}/api/posts`, {
    populate: "*",
    "sort[0]": "id%3Adesc",
    "pagination[start]": 0,
    "pagination[limit]": 5,
  });
  const categories = useFetch(`${process.env.REACT_APP_DOMAIN}/api/categories`);

  const [isActive, setIsActive] = useState(true);

  const handleRecentPostClick = () => {
    setIsActive(true);
  };

  const handlePopularPostClick = () => {
    setIsActive(false);
  };

  const listPost = data?.data.map((blog) => {
    return {
      categories: blog?.attributes?.category?.data?.attributes?.Name,
      title: blog.attributes.title,
      content: blog.attributes.content,
      description: blog.attributes.description,
      slug: blog.attributes.slug,
      image:
        process.env.REACT_APP_DOMAIN +
        blog?.attributes.images.data[0].attributes.url,

      author: blog.attributes.author.data,
      ecosystem: blog.attributes?.ecosystem?.data?.attributes?.Name,
    };
  });

  return (
    <div>
      <div>
        <div className="flex">
          <span
            className={`w-full cursor-pointer font-bold text-xl ${
              isActive ? "" : "text-gray"
            }`}
            onClick={handleRecentPostClick}
          >
            <span>Recent Post</span>
          </span>
          <span
            className={`w-full cursor-pointer font-bold mr-8 text-xl ${
              !isActive ? "" : "text-gray"
            }`}
            onClick={handlePopularPostClick}
          >
            <span>Popular Post</span>
          </span>
        </div>
        <div>
          {isActive ? (
            <ul className="mt-4 text-sm w-full">
              {listPost?.map((blog) => (
                <li className="py-[2px] relative">
                  <Link
                    to={`/${blog.slug}`}
                    className="hover:text-main transition-all"
                  >
                    <div className="flex item-center gap-2">
                      <HiDocumentMagnifyingGlass className="mt-1 w-5" />
                      <h6>{blog.title}</h6>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="h-[180px] mt-4 font-bold">Comming Soon...</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        <div className="flex">
          <span className="w-full font-bold ">
            <span className="pr-2 text-xl">Categories</span>
          </span>
        </div>

        <div className="flex gap-2 flex-wrap mt-4 text-sm">
          {categories?.data?.data.map((category) => {
            // const postsInCategory =
            //   listPost?.filter(
            //     (post) =>
            //       post.categories !== undefined &&
            //       post?.categories.includes(category.attributes.Name)
            //   ) || [];
            return (
              <div key={category.id} className="my-2">
                <Link
                  to={`/vi/analytics/${category.attributes.slug}`}
                  className="bg-[#F0F0F0] hover:bg-main hover:text-white transition-all py-1 px-2 rounded-md"
                >
                  {category.attributes.Title}
                  {/* (
                  {category.attributes.slug === "thu-vien"
                    ? total
                    : postsInCategory.length}
                  ) */}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-10">
        <span className="w-full font-bold">
          <span className="pr-2 text-xl">Follow Us</span>
        </span>{" "}
        <div className="flex flex-wrap gap-10 py-8">
          <div className=" text-main">
            <FaTelegramPlane className="text-2xl hover:scale-125 cursor-pointer transition-all hover:opacity-80" />
          </div>
          <div className=" text-main">
            <FaFacebook className="text-2xl hover:scale-125 cursor-pointer transition-all hover:opacity-80" />
          </div>
          <div className=" text-red-500">
            <FaYoutube className="text-2xl hover:scale-125 cursor-pointer transition-all hover:opacity-80" />
          </div>
          <div className=" text-main">
            <FaTwitter className="text-2xl hover:scale-125 cursor-pointer transition-all hover:opacity-80" />
          </div>
        </div>
      </div>
      <div className="mt-20 relative w-full lg:mb-0 md:mb-0 mb-8 rounded-xl overflow-hidden h-[412px]">
        <img className="w-full rounded-xl " src="/images/promote1.svg" alt="" />
        <spam className="absolute w-full animate-ping top-0 leading-[380px] text-white font-bold text-2xl drop-shadow-2xl text-center">
          CryptoViet
        </spam>
      </div>
      <div className="w-full rounded-xl overflow-hidden h-[412px]">
        <img className="w-full rounded-xl" src="/images/promote2.svg" alt="" />
      </div>
    </div>
  );
}

export default Sidebar;
