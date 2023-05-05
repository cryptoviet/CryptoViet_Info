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
import Nft from "./pages/Analytics/components/pages/Nft";
import SlugEcosystem from "./pages/Analytics/components/pages/SlugEcosystem";
import SlugNft from "./pages/Analytics/components/pages/SlugNft";
import SlugAnalytics from "./pages/Analytics/components/SlugAnalytics";
import SlugCV from "./pages/CV_Ecosystem/components/SlugCV";
import CVEcosystem from "./pages/CV_Ecosystem/CVEcosystem";
import LibraryPage from "./pages/Library/LibraryPage";

function App() {
  const url = process.env.REACT_APP_DOMAIN;

  const { loading, error, data, total } = useFetch(`${url}/api/posts`, {
    populate: "*",
    "sort[0]": "id%3Adesc",
    "pagination[start]": 0,
    "pagination[limit]": 50,
  });

  const nftApi = useFetch(`${process.env.REACT_APP_DOMAIN}/api/nfts`);

  const categories = useFetch(`${url}/api/categories`);

  const ecosystems = useFetch(`${url}/api/ecosystems`);

  if (loading)
    return (
      <div className="bg-main2 flex items-center w-full absolute h-full">
        <img
          className="mx-auto animate-bounce leading-[50%]"
          src="/logo_load.svg"
          alt="load"
        ></img>
      </div>
    );
  if (error) return <p>Error...</p>;

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
      element: <SlugAnalytics />,
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

    {
      path: "vi/analytics/thu-vien",
      element: <LibraryPage blogs={data ? data : ""} total={total} />,
      children: [],
    },
  ]);

  return <>{!loading && <RouterProvider router={router}></RouterProvider>}</>;
}

export default App;
