import React from "react";
import {
  FaFacebook,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="bg-main py-2 mt-28 relative z-30">
        <div className="container items-center mx-auto flex flex-col lg:flex-row justify-between">
          <span className="text-white text-[16px] mt-2 lg:mt-0 text-center font-bold lg:text-2xl">
            Subscribe To Our Newsletter
          </span>

          <button
            className="
            border-2 btn-hover bg-white uppercase lg:w-auto md:w-1/3 font-bold text-main  py-3  w-full lg:px-8 lg:mt-0 mt-8 lg:mb-0 mb-2 lg:mx-0 mx-auto  text-xs rounded-lg lg:rounded-lg"
          >
            <span>Subscribe</span>
          </button>
        </div>
      </div>
      <div className="bg-white ">
        <div className="container mx-auto py-4 justify-between grid lg:md-grid-cols-2 lg:grid-cols-2 item-center text-text">
          <div className="lg:flex md:flex items-center gap-4">
            <img
              className="lg:w-1/3 md:w-1/3 w-2/4 lg:ml-0 md:ml-0 mx-auto"
              src="/Logo_header.svg"
              alt=""
            />
            <span className="lg:block md:block hidden">
              ©2017 CryptoViet. All Rights Reserved
            </span>
          </div>

          <div className="flex lg:gap-4 md:gap-4 gap-8 font-bold mx-auto mt-2 lg:mr-0 md:mr-0">
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
          <span className="lg:hidden md:hidden block font-semibold mx-auto mt-6">
            ©2017 CryptoViet. All Rights Reserved
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
