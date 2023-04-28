import React from "react";
import Sidebar from "./Sidebar";

function ErrorPage() {
  return (
    <div className="lg:flex mt-12 flex-row flex-none">
      <div className="lg:w-[75%] lg:mr-10 w-full">
        <span className="text-text font-semibold mb-20 text-center text-3xl">
          Page not found
        </span>
        <div className="w-2/4 mx-auto mt-24">
          <img className="mx-auto w-2/4" src="/images/404.svg" alt="" />
        </div>
      </div>

      <div className="lg:w-[25%] ">
        <Sidebar />
      </div>
    </div>
  );
}

export default ErrorPage;
