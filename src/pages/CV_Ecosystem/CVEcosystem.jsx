import React from "react";
import Layout from "../../layouts/Layout";
import Content from "./components/Content";
import Sidebar from "../../components/Sidebar";
import useFetch from "../../hooks/useFetch";

function CVEcosystem({ blogs }) {
  const cvEcosystem = useFetch(
    `${process.env.REACT_APP_DOMAIN}/api/cv-ecosystems`
  );
  return (
    <Layout>
      <div className="container relative mx-auto mt-12 mb-40">
        <div className="lg:flex flex-row flex-none relative z-10">
          <div className="lg:w-[75%] lg:mr-10 w-full">
            <Content blogs={blogs} cvEcosystem={cvEcosystem} />
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

export default CVEcosystem;
