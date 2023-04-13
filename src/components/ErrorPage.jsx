import React from "react";
import Sidebar from "./Sidebar";

function ErrorPage() {
  return (
    <div className="lg:flex flex-row flex-none">
      <div className="lg:w-[75%] lg:mr-10 w-full">Page Not Found</div>

      <div className="lg:w-[25%] ">
        <Sidebar />
      </div>
    </div>
  );
}

export default ErrorPage;
