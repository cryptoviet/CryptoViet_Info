import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";

function AnalyticPosts({ blogs, categories }) {
  return (
    <Layout>
      <div className="container mx-auto mb-40 ">
        <h2 className="w-full pr-2 uppercase text-2xl text-center  mt-12 mb-14 font-bold ">
          Hệ sinh thái
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 z-20 relative">
          {blogs?.data.map((blog) => (
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md p-4">
              <Link to={`/${blog.attributes.slug}`}>
                <img
                  className="rounded-xl"
                  src={
                    process.env.REACT_APP_DOMAIN +
                    blog.attributes.images.data[0].attributes.url
                  }
                  alt=""
                />
                <h2 className="font-bold line-clamp-2 text-xl my-2">
                  {blog.attributes.title}
                </h2>
                <p className="text-text line-clamp-3">
                  {blog.attributes.description}
                </p>

                <span className="block text-sm text-gray-500 mt-4">
                  24/03/2023
                </span>
              </Link>
            </div>
          ))}
        </div>

        <div className="blur__bg-head "></div>
        <div className="blur__bg overflow-hidden"></div>
      </div>
    </Layout>
  );
}

export default AnalyticPosts;
