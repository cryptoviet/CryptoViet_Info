import React from "react";
// import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import Banner from "./components/Banner";
import LatestPost from "./components/LatestPost";
import Onchain from "./components/Onchain";
import AboutUs from "./components/AboutUs";

// const POSTS = gql`
//   query GetListPost {
//     posts {
//       data {
//         id
//         attributes {
//           title
//           content
//         }
//       }
//     }
//   }
// `;

// console.log(POSTS);
function HomePage({ blogs }) {
  // const { loading, error, data } = useQuery(POSTS);
  return (
    <Layout>
      <div>
        <Banner />
        <LatestPost blogs={blogs} />
        <Onchain />
        <AboutUs />
      </div>
    </Layout>
  );
}

export default HomePage;
