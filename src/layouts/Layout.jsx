import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <ScrollToTop />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
