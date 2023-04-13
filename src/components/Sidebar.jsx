import React from "react";
import { Link } from "react-router-dom";
import { FaTelegramPlane, FaFacebook, FaYoutube } from "react-icons/fa";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import useFetch from "../hooks/useFetch";
function Sidebar() {
  const { data } = useFetch("http://localhost:1337/api/posts?populate=*");
  const categories = useFetch("http://localhost:1337/api/categories");

  const listPost = data?.data.map((blog) => {
    return {
      categories: blog.attributes.category?.data.attributes.Name,
      title: blog.attributes.title,
      content: blog.attributes.content,
      description: blog.attributes.description,
      slug: blog.attributes.slug,
      image:
        process.env.REACT_APP_DOMAIN +
        blog?.attributes.images.data[0].attributes.url,

      author: blog.attributes.author.data,
      ecosystem: blog.attributes.ecosystem.data.attributes.Name,
    };
  });

  return (
    <div>
      <div>
        <div className="flex">
          <h2 className="w-full font-bold ">
            <span className="border-b-2 border-main pr-2 text-xl">
              Recent Post
            </span>
          </h2>
          <h2 className="w-full font-bold mr-8 ">
            <span className=" pr-2 text-xl">Popular Post</span>
          </h2>
        </div>
        <div>
          <ul className="mt-4 text-sm w-full">
            {listPost
              ?.reverse()
              .slice(0, 5)
              .map((blog) => (
                <li className="py-[2px]">
                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="hover:text-main transition-all"
                  >
                    <div className="flex item-center gap-2">
                      <HiDocumentMagnifyingGlass className="mt-1" />
                      {blog.title}
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex">
          <h2 className="w-full font-bold ">
            <span className="border-b-2 border-main pr-2 text-xl">
              Categories
            </span>
          </h2>
        </div>

        <div className="flex gap-2 flex-wrap mt-4 text-sm">
          {categories?.data?.data.map((category) => {
            const postsInCategory =
              listPost?.filter((post) =>
                post?.categories.includes(category.attributes.Name)
              ) || [];
            return (
              <div key={category.id} className="my-2">
                <Link
                  to={`/analytics/${category.attributes.slug}`}
                  className="bg-[#F0F0F0] hover:bg-main hover:text-white transition-all py-1 px-2 rounded-md"
                >
                  {category.attributes.Name} ({postsInCategory.length})
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="w-full font-bold">
          <span className="border-b-2 border-main pr-2 text-xl">Follow Us</span>
        </h2>{" "}
        <div className="flex flex-wrap justify-between py-8">
          <div className="flex gap-2 l text-main">
            <FaTelegramPlane className="text-2xl " />
            <span>Twitter</span>
          </div>
          <div className="flex gap-2 text-main">
            <FaFacebook className="text-2xl " />
            <span>Facebook</span>
          </div>
          <div className="flex gap-2 text-red-500">
            <FaYoutube className="text-2xl " />
            <span>Youtube</span>
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