import React from "react";
import Layout from "../../layouts/Layout";
import Container from "../Container";
import Sidebar from "../Sidebar";

function ErrorUrl() {
  return (
    <Layout>
      <Container>
        <div className="lg:flex mt-12 flex-row flex-none">
          <div className="lg:w-[75%] lg:mr-10 w-full">
            <h2 className="text-text font-semibold mb-20 text-center text-3xl">
              Page not found
            </h2>
            <div className="w-2/4 mx-auto mt-24">
              <img className="mx-auto w-2/4" src="/images/404.svg" alt="" />
            </div>
          </div>

          <div className="lg:w-[25%] ">
            <Sidebar />
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default ErrorUrl;
