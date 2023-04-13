import React from "react";
import { RiGlobalFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function BannerHead() {
  return (
    <div className="bg-[#DEF2FF] w-full py-1">
      <Link to="/" className="text-center  ">
        <p className=" text-[#5C5C5C] flex items-center gap-1 justify-center  font-semibold">
          <RiGlobalFill className=""></RiGlobalFill>
          Follow Nghiện Coin community
          <span className="lg:block md:block hidden">
            {" "}
            để nhận được những thông tin đắt giá
          </span>
          .
        </p>
      </Link>
    </div>
  );
}

export default BannerHead;
