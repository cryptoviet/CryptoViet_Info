import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Helmet } from "react-helmet";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Helmet>
        <meta
          name="description"
          content="Trang thông tin - Phân tích - Kiến thức Crypto hàng đầu Việt Nam"
        />

        <title>
          CryptoViet Info - Trang thông tin - Phân tích - Kiến thức Crypto hàng
          đầu Việt Nam
        </title>
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="CryptoViet Info" />
        <meta itemprop="name" content="CryptoViet Info" />
        <meta
          itemprop="description"
          content="Trang thông tin - Phân tích - Kiến thức Crypto hàng đầu Việt Nam"
        />
        <meta property="og:url" content="https://cryptoviet.info" />
        <meta
          property="og:description"
          content="Trang thông tin - Phân tích - Kiến thức Crypto hàng đầu Việt Nam"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dsynmqxuc/image/upload/v1683188301/thumb_CV_mini_xbih66.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:secure_url" content="CryptoViet Info" />

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
      <Footer />
    </div>
  );
}

export default Layout;
