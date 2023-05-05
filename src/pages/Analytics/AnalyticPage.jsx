import React from "react";
import Layout from "../../layouts/Layout";
import Content from "./components/Content";
import Sidebar from "../../components/Sidebar";
import { Helmet } from "react-helmet";

function AnalyticPage({ blogs, categories, loading }) {
  return (
    <Layout>
      <Helmet>
        <title>Kiến thức Crypto - Blockchain - Phân tích dự án - Bitcoin</title>
        <meta
          name="description"
          content="Trang kiến thức Crypto cho người mới bắt đầu sẽ giúp bạn có cái nhìn tổng quan về thị trường Crypto -  Blockchain - Bitcoin - Ethereum."
        />

        <meta name="keywords" content="kiến thức crypto" />
        <meta itemprop="name" content="CryptoViet Info" />

        <meta
          itemprop="description"
          content="Trang kiến thức Crypto cho người mới bắt đầu sẽ giúp bạn có cái nhìn tổng quan về thị trường Crypto -  Blockchain - Bitcoin - Ethereum."
        />
        <meta
          itemprop="image"
          content="https://res.cloudinary.com/dsynmqxuc/image/upload/v1683188301/thumb_CV_mini_xbih66.png"
        ></meta>

        <meta property="og:url" content="https://cryptoviet.info" />
        <meta property="og:title" content="CryptoViet Info" />
        <meta
          property="og:description"
          content="Trang kiến thức Crypto cho người mới bắt đầu sẽ giúp bạn có cái nhìn tổng quan về thị trường Crypto -  Blockchain - Bitcoin - Ethereum."
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
          content="Trang kiến thức Crypto cho người mới bắt đầu sẽ giúp bạn có cái nhìn tổng quan về thị trường Crypto -  Blockchain - Bitcoin - Ethereum."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dsynmqxuc/image/upload/v1683188301/thumb_CV_mini_xbih66.png"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://cryptoviet.info" />
      </Helmet>
      <div className="container relative mx-auto mt-12 mb-40">
        <div className="lg:flex flex-row flex-none relative z-10">
          <div className="lg:w-[75%] lg:mr-10 w-full">
            <Content
              blogs={blogs}
              loading={loading}
              categories={categories?.data}
            />
          </div>

          <div className="lg:w-[25%] ">
            <Sidebar />
          </div>
        </div>
        <div className="blur__bg-head lg:block md:block hidden"></div>
      </div>
      <div className="blur__bg overflow-hidden lg:block md:block hidden"></div>
    </Layout>
  );
}

export default AnalyticPage;
