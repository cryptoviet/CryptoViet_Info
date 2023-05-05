import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import AutoScrollToTop from "../components/AutoScrollToTop";
import ScrollToTop from "react-scroll-to-top";

import { Helmet } from "react-helmet";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <AutoScrollToTop />
      <Helmet>
        <title>
          CryptoViet Info - Trang thông tin - Phân tích - Kiến thức Crypto hàng
          đầu Việt Nam
        </title>
        <meta
          name="description"
          content="Trang thông tin - Phân tích - Kiến thức Crypto hàng đầu Việt Nam"
        />

        <meta name="keywords" content="CryptoViet Info" />
        <meta itemprop="name" content="CryptoViet Info" />

        <meta
          itemprop="description"
          content="Trang thông tin - Phân tích - Kiến thức Crypto hàng đầu Việt Nam"
        />
        <meta
          itemprop="image"
          content="https://res.cloudinary.com/dsynmqxuc/image/upload/v1683188301/thumb_CV_mini_xbih66.png"
        ></meta>

        <meta property="og:url" content="https://cryptoviet.info" />
        <meta property="og:title" content="CryptoViet Info" />
        <meta
          property="og:description"
          content="Trang thông tin - Phân tích - Kiến thức Crypto hàng đầu Việt Nam"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dsynmqxuc/image/upload/v1683188301/thumb_CV_mini_xbih66.png"
        />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />
        <meta
          property="og:image:secure_url"
          content="https://res.cloudinary.com/dsynmqxuc/image/upload/v1683188301/thumb_CV_mini_xbih66.png"
        />

        <meta name="twitter:title" content="CryptoViet Info" />
        <meta
          name="twitter:description"
          content="Trang thông tin - Phân tích - Kiến thức Crypto hàng đầu Việt Nam"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dsynmqxuc/image/upload/v1683188301/thumb_CV_mini_xbih66.png"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://cryptoviet.info" />
      </Helmet>
      {children}
      <ScrollToTop
        width="28"
        smooth
        color="#2b62ab"
        viewBox="0 0 16 16"
        svgPath="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
        className=" hover:scale-90 !z-50 !rounded-full transition-all pl-1.5"
      />

      <Footer />
    </div>
  );
}

export default Layout;
