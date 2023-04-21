import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="container mx-auto mt-12 text-center">
      <div className="">
        <h1 className="font-bold text-[54px]  ">About us</h1>

        <p className="font-semibold text-base w-[90%] mx-auto">
          CryptoViet Info là một đơn vị hoạt động trong lĩnh vực Blockchain và
          Web3, được thành lập vào năm 2016 và từ đó đã trở thành một đơn vị
          tiên phong trong lĩnh vực tiền mã hóa tại Việt Nam. Trong suốt nhiều
          năm hoạt động, CryptoViet Info đã có nhiều đóng góp cho sự phát triển
          của cộng đồng tiền điện tử tại Việt Nam, được coi là một trong những
          đơn vị hàng đầu trong lĩnh vực và mang lại cho độc giả cái nhìn tổng
          quan về lĩnh vực tiền mã hóa và công nghệ blockchain trên toàn cầu.
        </p>

        <div className="flex w-full mx-auto relative justify-center md:container md:pr-16 lg:pr-0 md:mb-12 lg:mb-0 items-center">
          <div className="z-10">
            <Link target="_blank" to="https://grindy.io/" title="Grindy">
              <img
                className="relative opacity-0 lg:opacity-100"
                src="/grindy.svg "
                alt="project"
              ></img>
              <img
                className="w-2/6 logo-fund absolute top-0 opacity-1 lg:opacity-0"
                src="/grindy1.svg"
                alt="project"
              ></img>
            </Link>
          </div>
          <div className="z-10">
            <Link
              target="_blank"
              to="https://cryptoviet.ventures/"
              title="CryptoViet Ventures"
            >
              <img
                className="relative  opacity-0 lg:opacity-100"
                src="/cv.svg"
                alt="project"
              ></img>
              {/* <img
                className="w-2/6 logo-fund absolute top-0 animate-none lg:animate-pulse opacity-1 lg:opacity-0"
                src="//ccv2.png"
                alt="project"
              ></img> */}
            </Link>
          </div>
          <div className="z-10  mr-20">
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
                className=" w-2/6 logo-fund absolute top-0 opacity-1 md:opacity-1 lg:opacity-0"
                src="/cvv1.svg"
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
