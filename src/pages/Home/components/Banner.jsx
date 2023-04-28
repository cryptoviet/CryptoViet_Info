import React from "react";
import Slider from "./Slider";

function Banner() {
  return (
    <>
      <div className="container relative lg:mt-36 md:mt-36 mt-6  mx-auto flex lg:flex-row md:flex-row flex-col gap-8  mb-40">
        <div className="z-10 lg:w-2/5 md:w-3/5 mb-10">
          <h1 className="font-bold lg:text-[54px] text-main text-3xl mb-4 leading-tight">
            CryptoViet Info
          </h1>
          <p className="font-semibold text-3xl mb-4">In Tech We Trust</p>
          <p className="font-semibold text-xl text-text">
            Trang thông tin - Phân tích - Kiến thức <br /> Crypto hàng đầu Việt
            Nam
          </p>
        </div>

        <div className="w-full text-center lg:w-3/5 md:w-2/5 lg:p-20 lg:pt-0 p-4 pt-0 mb-24">
          <Slider />
        </div>
        <div className="blur__bg-head lg:block md:block hidden"></div>
        <div className="blur__bg overflow-hidden lg:block md:block hidden"></div>
      </div>
    </>
  );
}

export default Banner;
