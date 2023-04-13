import React from "react";

function Banner() {
  return (
    <div className="container relative mt-40  mx-auto flex lg:flex-row md:flex-row flex-col gap-8  mb-40">
      <div className="z-10">
        <h1 className="font-bold lg:text-[54px] text-3xl mb-4 leading-tight">
          Discover Insights You Can't Get Anywhere Else
        </h1>
        <p className="font-semibold text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>

      <div className="w-full text-center">
        <img src="banner1.svg" className="lg:w-4/5 w-full" alt="" />
      </div>
      <div className="blur__bg-head"></div>
      <div className="blur__bg overflow-hidden"></div>
    </div>
  );
}

export default Banner;
