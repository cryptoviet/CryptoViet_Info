import React from "react";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

function LatestPost({ blogs }) {
  function parseDate(dateString) {
    const [day, month, year] = dateString.split("-");
    const date = new Date(year, month - 1, day);
    return date;
  }

  function formatDate(dateString) {
    const date = parseDate(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return ` ${formattedDate}`;
  }

  function reverseString(str) {
    return str.split("-").reverse().join("-");
  }

  return (
    <div className="bg-black text-white relative latest__posts">
      <div className="container mx-auto lg:pt-28 md:pt-48 pt-64 pb-10">
        <div className="mb-12">
          <h1 className="font-bold text-[54px] text-center">Analytics</h1>
          <p className="text-center lg:w-[65%] w-full mx-auto">
            Trang phân tích kiến thức Crypto - Cung cấp các bài viết phân tích
            chuyên sâu về công nghệ Blockchain, tiền mã hóa, đầu tư, các dự án
            tiền điện tử tiềm năng được nghiên cứu bởi những người có trình độ
            chuyên môn cao và nhiều kinh nghiệm trong lĩnh vực, đảm bảo tính
            chính xác và độ tin cậy của thông tin.
          </p>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={true}
          speed={500}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          loop={true}
          className="mySwiper"
          modules={[Navigation, Autoplay]}
        >
          {blogs?.data.map((blog) => (
            <>
              {blog.attributes.category.data !== null && (
                <>
                  {blog.attributes.category.data.attributes.slug ===
                    "ecosystem" && (
                    <SwiperSlide>
                      <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-center"
                        className="mb-8"
                      >
                        <Link to={`/${blog?.attributes.slug}`}>
                          <div className="rounded-xl hover__image relative overflow-hidden   h-[235px]">
                            <img
                              className="h-full w-full object-cover"
                              src={
                                process.env.REACT_APP_DOMAIN +
                                blog?.attributes.images.data[0].attributes.url
                              }
                              alt=""
                            />
                            <span className="text absolute top-[45%]">
                              Detail
                            </span>
                          </div>
                          <h2 className="uppercase lg:h-14 md:h-14 hover:text-item py-3 mt-2 mb-2 text-white font-bold line-clamp-2">
                            {blog?.attributes.title}
                          </h2>
                        </Link>
                        <p className="mb-4 text-white pointer-events-none cursor-auto line-clamp-3">
                          {blog?.attributes.description}
                        </p>
                        <div className="flex justify-between">
                          <span className="flex pb-2 leading-[14px] font-light  text-sm text-white">
                            <FaUserTie className="mr-1" />
                            <span className="block">
                              {blog?.attributes.author.data.attributes.FullName}
                            </span>
                          </span>
                          <span className="font-light flex pb-2 leading-[14px] text-sm text-white">
                            <BsFillCalendarEventFill className="mr-1" />
                            <span className="block">
                              {formatDate(
                                reverseString(
                                  blog.attributes.createdAt.substring(0, 10)
                                )
                              )}
                            </span>
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  )}
                </>
              )}
            </>
          ))}
        </Swiper>

        <Link to="/analytics" className="flex text-text">
          <span className="bg-white rounded-lg hover:bg-main hover:text-white transition-all py-2 mx-auto px-4 font-bold text-sm">
            GO TO RESEARCH
          </span>
        </Link>
      </div>
    </div>
  );
}

export default LatestPost;
