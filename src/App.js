import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

function App() {
  const url = process.env.REACT_APP_DOMAIN;
  const { loading, error, data } = useFetch(`${url}/api/posts?populate=* `);

  const categories = useFetch(`${url}/api/categories`);

  const ecosystems = useFetch(`${url}/api/ecosystems`);

  if (loading)
    return (
      <p className=" text-[40px] mx-auto items-center pt-[300px]  w-full h-screen text-center ">
        Loading...
      </p>
    );
  if (error) return <p>Error...</p>;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage blogs={data ? data : ""} />,
      errorElement: <ErrorUrl />,
      children: [],
    },

    {
      path: "blogs/:slug",
      element: <DetailPage blogs={data ? data : ""} exact />,
      children: [],
    },

    {
      path: "/analytics",
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
      path: "/analytics/ecosystem",
      element: (
        <Ecosystem
          blogs={data ? data : ""}
          ecosystems={ecosystems ? ecosystems : ""}
        />
      ),
      children: [],
    },

    {
      path: "/analytics/:slug",
      element: (
        <SlugAnalytics
          exact
          blogs={data ? data : ""}
          categories={categories ? categories : ""}
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
      path: "/analytics/:slug",
      element: (
        <SlugAnalytics
          blogs={data ? data : ""}
          ecosystems={ecosystems ? ecosystems : ""}
        />
      ),
      children: [],
    },

    {
      path: "/ecosystem/:slug",
      element: (
        <SlugEcosystem
          blogs={data ? data : ""}
          ecosystems={ecosystems ? ecosystems : ""}
        />
      ),
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
