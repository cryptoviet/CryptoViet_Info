import React from "react";
import { Link } from "react-router-dom";
// import Search from "./Search";
import { HiWallet } from "react-icons/hi2";

import { GiSolarSystem } from "react-icons/gi";
import { RiBarChart2Fill, RiGitBranchFill } from "react-icons/ri";
import NavAnalytic from "./NavAnalytic";
import Search from "./Search";
import useFetch from "../../../hooks/useFetch";

function NavBar() {
  let flag = false;

  const ecosystems = useFetch("http://localhost:1337/api/ecosystems");
  const listEcosystem = ecosystems && ecosystems?.data;

  const pathName = window.location.pathname;
  const listSlug = [
    "/analytics",
    "/analytics/ecosystem",
    "/analytics/airdrop",
    "/analytics/nft",
    "/analytics/knowledge",
    "/analytics/ama",
  ];
  listEcosystem?.data.map((item) => {
    return listSlug.push(`/ecosystem/${item.attributes.Name.toLowerCase()}`);
  });
  console.log(listSlug);

  flag = listSlug.includes(pathName) ? true : false;

  return (
    <div>
      <div className="flex items-center text-base z-10  relative font-semibold justify-between p-4">
        {/* logo */}
        <Link to="/">
          <img src="/Logo_header.svg" className="w-3/5 " alt="" />
        </Link>

        {/* Menu */}
        <div className="">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center font-semibold p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full lg:block md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-row gap-4 md:p-0 relative">
              <li className="">
                <Link
                  to="/analytics"
                  className="block py-2 pl-3 pr-4 hover:text-main transition-all  rounded"
                >
                  <span
                    className={`${
                      flag && "text-main"
                    } flex items-center text-base font-semibold gap-1`}
                  >
                    <HiWallet />
                    Analytics
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 hover:text-main transition-all"
                >
                  <span
                    className={`${
                      flag && "text-gray hover:text-main"
                    } flex items-center text-base font-semibold gap-1`}
                  >
                    <RiBarChart2Fill />
                    Report
                  </span>
                </Link>
              </li>
              <li className="">
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 hover:text-main transition-all"
                >
                  <span
                    className={`${
                      flag && "text-gray hover:text-main"
                    } flex items-center text-base font-semibold gap-1`}
                  >
                    <RiGitBranchFill />
                    Data onchain
                  </span>
                </Link>
              </li>
              <li className="nft">
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 relative z-10  hover:text-main transition-all"
                >
                  <span
                    className={` ${
                      flag && "text-gray hover:text-main"
                    } flex items-center text-base font-semibold gap-1 `}
                  >
                    <GiSolarSystem />
                    Ecosystem
                  </span>
                </Link>
                <ul className="absolute hidden nft__menu bg-white text-sm font-semibold shadow-3xl py-4 pr-8 pl-4 rounded-2xl">
                  <li className="mb-2">
                    <Link className="hover:text-main ">
                      CryptoViet Ventures
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-main ">Gafi Network</Link>
                  </li>
                </ul>
              </li>

              <Search />
            </ul>
            {flag && <NavAnalytic />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
