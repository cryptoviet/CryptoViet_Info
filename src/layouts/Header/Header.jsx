import React from "react";
import NavBar from "./components/NavBar";
import BannerHead from "./components/BannerHead";

function Header() {
  return (
    <>
      <div className="shadow-md bg-white sticky top-0 z-20 lg:relative">
        <div className="container mx-auto">
          <NavBar></NavBar>
        </div>
      </div>
      <BannerHead />
    </>
  );
}

export default Header;
