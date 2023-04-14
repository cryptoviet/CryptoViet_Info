import React from "react";

function Banner() {
  return (
    <div className="container relative mt-40  mx-auto flex lg:flex-row md:flex-row flex-col gap-8  mb-40">
      <div className="z-10 lg:w-2/4 md:w-2/4">
        <h1 className="font-bold lg:text-[54px] text-main text-3xl mb-4 leading-tight">
          CryptoViet Info
        </h1>
        <p className="font-semibold text-3xl mb-4">In Tech We Trust</p>
        <p className="font-semibold text-xl text-text">
          Trang thông tin - Phân tích - Kiến thức <br /> Crypto hàng đầu Việt
          Nam
        </p>
      </div>

      <div className="w-full text-center lg:w-2/4 md:w-2/4">
        <img src="banner1.svg" className="lg:w-4/5 w-full" alt="" />
      </div>
      <div className="blur__bg-head"></div>
      <div className="blur__bg overflow-hidden"></div>
    </div>
  );
}

export default Banner;
