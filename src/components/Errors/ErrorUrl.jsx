import React from "react";
import Layout from "../../layouts/Layout";
import Container from "../Container";
import Sidebar from "../Sidebar";

function ErrorUrl() {
  return (
    <Layout>
      <Container>
        <div className="lg:flex flex-row flex-none">
          <div className="lg:w-[75%] lg:mr-10 w-full">Page Not Found</div>

          <div className="lg:w-[25%] ">
            <Sidebar />
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default ErrorUrl;
