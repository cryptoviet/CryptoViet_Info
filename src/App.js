import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import "./index.css";
import AnalyticPage from "./pages/Analytics/AnalyticPage";
import Ecosystem from "./pages/Analytics/components/pages/Ecosystem";
import DetailPage from "./pages/Blogs/DetailPage";
import HomePage from "./pages/Home/HomePage";

import SlugAnalytics from "./pages/Analytics/components/SlugAnalytics";
import ErrorUrl from "./components/Errors/ErrorUrl";
import SlugEcosystem from "./pages/Analytics/components/pages/SlugEcosystem";

function App() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/posts?populate=*"
  );

  const categories = useFetch("http://localhost:1337/api/categories");

  const ecosystems = useFetch("http://localhost:1337/api/ecosystems");

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
