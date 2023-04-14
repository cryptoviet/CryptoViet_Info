import React from "react";
import Layout from "../../layouts/Layout";
import Content from "./components/Content";
import Sidebar from "../../components/Sidebar";

function AnalyticPage({ blogs, categories }) {
  return (
    <Layout>
      <div className="container mx-auto mt-12 mb-40">
        <div className="lg:flex flex-row flex-none">
          <div className="lg:w-[75%] lg:mr-10 w-full">
            <Content blogs={blogs} categories={categories?.data} />
          </div>

          {/* <div className="lg:w-[25%] ">
            <Sidebar />
          </div> */}
        </div>
      </div>
    </Layout>
  );
}

export default AnalyticPage;
