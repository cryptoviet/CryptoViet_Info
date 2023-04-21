import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import useFetch from "./hooks/useFetch";
import "./index.css";
import AnalyticPage from "./pages/Analytics/AnalyticPage";
import Ecosystem from "./pages/Analytics/components/pages/Ecosystem";
import DetailPage from "./pages/Blogs/DetailPage";
import HomePage from "./pages/Home/HomePage";

import ErrorUrl from "./components/Errors/ErrorUrl";
import SearchPage from "./layouts/Header/components/SearchPage";
import SlugEcosystem from "./pages/Analytics/components/pages/SlugEcosystem";
import SlugAnalytics from "./pages/Analytics/components/SlugAnalytics";
import CVEcosystem from "./pages/CV_Ecosystem/CVEcosystem";
import SlugCV from "./pages/CV_Ecosystem/components/SlugCV";
import Nft from "./pages/Analytics/components/pages/Nft";
import SlugNft from "./pages/Analytics/components/pages/SlugNft";

function App() {
  const url = process.env.REACT_APP_DOMAIN;
  const { loading, error, data } = useFetch(`${url}/api/posts?populate=* `);

  const nftApi = useFetch(`${process.env.REACT_APP_DOMAIN}/api/nfts`);

  const categories = useFetch(`${url}/api/categories`);

  const ecosystems = useFetch(`${url}/api/ecosystems`);

  if (loading)
    return (
      <p className=" text-[40px] mx-auto items-center pt-[300px]  w-full h-screen text-center ">
        Loading...
      </p>
    );
  if (error) return <p>Error...</p>;
  console.log(data);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/vi" />,
      errorElement: <ErrorUrl />,
      children: [],
    },
    {
      path: "/vi",
      element: <HomePage blogs={data ? data : ""} />,
      errorElement: <ErrorUrl />,
      children: [],
    },

    {
      path: "/:slug",
      element: <DetailPage blogs={data ? data : ""} exact />,
      children: [],
    },

    {
      path: "/vi/analytics",
      element: (
        <AnalyticPage
          exact
          loading={loading}
          blogs={data ? data : ""}
          categories={categories ? categories : ""}
        />
      ),
      children: [],
    },

    {
      path: "/vi/analytics/he-sinh-thai",
      element: (
        <Ecosystem
          blogs={data ? data : ""}
          ecosystems={ecosystems ? ecosystems : ""}
        />
      ),
      children: [],
    },

    {
      path: "/search",
      element: (
        <SearchPage
          exact
          blogs={data ? data : ""}
          categories={categories ? categories : ""}
        />
      ),
      children: [],
    },

    {
      path: "vi/analytics/:slug",
      element: (
        <SlugAnalytics
          blogs={data ? data : ""}
          ecosystems={ecosystems ? ecosystems : ""}
        />
      ),
      children: [],
    },

    {
      path: "vi/analytics/he-sinh-thai/:slug",
      element: (
        <SlugEcosystem
          blogs={data ? data : ""}
          ecosystems={ecosystems ? ecosystems : ""}
        />
      ),
      children: [],
    },

    {
      path: "vi/he-sinh-thai-cryptoviet/:slug",
      element: <SlugCV blogs={data ? data : ""} />,
      children: [],
    },

    {
      path: "vi/he-sinh-thai-cryptoviet",
      element: <CVEcosystem blogs={data ? data : ""} />,
      children: [],
    },

    {
      path: "vi/analytics/nft/:slug",
      element: <SlugNft blogs={data ? data : ""} nftApi={nftApi} />,
      children: [],
    },

    {
      path: "vi/analytics/nft",
      element: <Nft blogs={data ? data : ""} nftApi={nftApi} />,
      children: [],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
