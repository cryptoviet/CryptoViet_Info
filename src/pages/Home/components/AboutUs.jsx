import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="container mx-auto mt-24 text-center">
      <div className="">
        <h1 className="font-bold text-[54px]  ">Về chúng tôi</h1>

        <p className="font-semibold text-base w-[90%] mx-auto">
          <span className="p-10 ">
            CryptoViet Info - Kênh tổng hợp kiến thức Crypto và phân tích
            Blockchain. Là bộ não của hệ sinh thái CryptoViet, CryptoViet Info
            luôn tiên phong trong công cuộc giáo dục cộng đồng về các nền tảng
            kiến thức chính thống trong thị trường tiền mã hóa.
          </span>
          <br></br>
          <span className="block mt-4">
            Chúng tôi cung cấp cái nhìn tổng quan và kiến thức chuyên sâu về
            Web3/Blockchain. Đội ngũ CryptoViet tin rằng thông tin và dữ liệu
            chính là giá trị, hiểu đúng thông tin là chìa khóa để chinh phục mọi
            thành công!
          </span>
        </p>

        <div className="flex w-full mx-auto relative mt-12 lg:gap-0 md:gap-4 gap-[90px] justify-center md:container md:pr-16 lg:pr-0 md:mb-12 lg:mb-0 items-center">
          <div className="z-10">
            <Link target="_blank" to="https://grindy.io/" title="Grindy">
              <img
                className="relative opacity-0 lg:opacity-100"
                src="/grindy.svg "
                alt="project"
              ></img>
              <img
                className="logo-fund md:w-auto w-2/6 absolute top-0 opacity-1 lg:opacity-0"
                src="/grindy1.png"
                alt="project"
              ></img>
            </Link>
          </div>

          <div className="z-10">
            <Link
              target="_blank"
              to="https://cryptoviet.info/"
              title="Analytic CryptoViet"
            >
              <img
                className="relative opacity-0 lg:opacity-100"
                src="/cvv.svg"
                alt="project"
              ></img>
              <img
                className="logo-fund lg:w-auto animate-pulse md:w-auto w-2/6 absolute top-0 opacity-1 md:opacity-1 lg:opacity-0"
                src="/ccv1.png"
                alt="project"
              ></img>
            </Link>
          </div>

          <div className="z-10 mr-20">
            <Link
              target="_blank"
              to="https://cryptoviet.ventures/"
              title="CryptoViet Ventures"
            >
              <img
                className="relative opacity-0 lg:opacity-100"
                src="/cv.svg"
                alt="project"
              ></img>
              <img
                className="logo-fund md:w-auto w-2/6 absolute top-0 opacity-1 lg:opacity-0"
                src="/ccv2.png"
                alt="project"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
