import React from "react";
import NavBar from "./components/NavBar";
import BannerHead from "./components/BannerHead";

function Header() {
  return (
    <>
      <div className="shadow-md bg-white z-20 relative">
        <div className="container mx-auto">
          <NavBar></NavBar>
        </div>
      </div>
      <BannerHead />
    </>
  );
}

export default Header;
