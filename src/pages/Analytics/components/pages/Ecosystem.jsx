import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../../components/Container";
import Sidebar from "../../../../components/Sidebar";
import Layout from "../../../../layouts/Layout";

function Ecosystem({ blogs, ecosystems }) {
  // const slug = window.location.href.split("/")[4];

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

      author: blog.attributes.author.data,
      ecosystem: blog.attributes?.ecosystem?.data?.attributes?.Name,
    };
  });

  return (
    <Layout>
      <Container>
        <div className="lg:flex flex-row flex-none mt-10">
          <div className="lg:w-[75%] w-full z-10">
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
                      <div className="mt-2.5 mb-12 ">
                        <Link to={`/${blog.slug}`}>
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

                        <p className="line-clamp-2">{blog.description}</p>
                      </div>
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
