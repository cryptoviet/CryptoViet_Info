import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-main py-2 mt-28 relative z-30">
        <div className="container items-center mx-auto flex flex-col lg:flex-row justify-between">
          <h1 className="text-white text-[16px] mt-2 lg:mt-0 text-center font-bold lg:text-2xl">
            Subscribe To Our Newsletter
          </h1>

          <button
            className="
            border-2 btn-hover bg-white uppercase lg:w-auto md:w-1/3 font-bold text-main  py-4 w-full lg:px-8 lg:mt-0 mt-8 lg:mb-0 mb-2 lg:mx-0 mx-auto  text-xs rounded-lg lg:rounded"
          >
            <span>Subscribe</span>
          </button>
        </div>
      </div>
      <div className="bg-white ">
        <div className="container mx-auto py-4  text-text">
          <img src="/footer.svg" className="w-1/3" alt="" />
        </div>
      </div>
    </>
  );
}

export default Footer;
