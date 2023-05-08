import React from "react";
import { Link } from "react-router-dom";

function Onchain() {
  return (
    <div>
      <div className="container mx-auto lg:flex md:flex flex-none gap-12 mt-12 justify-between">
        <div className="lg:w-3/5 md:w-3/5 sm:w-full flex lg:flex-col md:flex-col flex-col-reverse">
          <div>
            <h1 className="font-bold text-[54px] lg:text-left md:text-left text-center">
              Onchain
            </h1>
            <p className="font-semibold text-base">
              CryptoViet Data - Nền tảng cung cấp thông tin dữ liệu On-chain
              trong thị trường Crypto, giúp các nhà đầu tư có cái nhìn tổng quan
              về hoạt động của các đồng tiền mã hóa trên blockchain.
            </p>
          </div>
          <Link
            to="https://data.cryptoviet.info/"
            target="_blank"
            className="text-white text-right mt-12"
          >
            <span className="bg-black rounded-lg text-sm hover:bg-main transition-all uppercase mr-[26px] px-3 py-2">
              Xem chi tiết
            </span>
          </Link>
          <img src="onchain2.svg" className="mt-2" alt="" />
        </div>

        <div className=" lg:w-2/5 md:w-2/5 w-full">
          <img src="onchain.svg" className="lg:w-[93%] w-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Onchain;
