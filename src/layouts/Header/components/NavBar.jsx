import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Search from "./Search";
import { HiWallet } from "react-icons/hi2";

import { GiSolarSystem } from "react-icons/gi";
import { RiBarChart2Fill, RiGitBranchFill } from "react-icons/ri";
import NavAnalytic from "./NavAnalytic";
import Search from "./Search";
import useFetch from "../../../hooks/useFetch";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setMenuOpen(!menuOpen);
  };

  let flag = false;
  const cvEcosystem = useFetch(
    `${process.env.REACT_APP_DOMAIN}/api/cv-ecosystems`
  );

  const nftApi = useFetch(`${process.env.REACT_APP_DOMAIN}/api/nfts`);
  const ecosystems = useFetch(`${process.env.REACT_APP_DOMAIN}/api/ecosystems`);
  const listEcosystem = ecosystems && ecosystems?.data;

  const pathName = window.location.pathname;

  const listSlug = [
    "/vi/analytics",
    "/vi/analytics/he-sinh-thai",
    "/vi/analytics/airdrop",
    "/vi/analytics/nft",
    "/vi/analytics/kien-thuc",
    "/vi/analytics/report",
    "/vi/analytics/thu-vien",
    "/vi/analytics/he-sinh-thai-cryptoviet",
  ];
  listEcosystem?.data.map((item) => {
    return listSlug.push(`/vi/analytics/he-sinh-thai/${item.attributes.slug}`);
  });

  nftApi?.data?.data.map((item) => {
    return listSlug.push(`/vi/analytics/nft/${item.attributes.slug}`);
  });

  

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
          <div
            className="hidden w-full lg:block md:hidden md:w-auto"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-row gap-4 md:p-0 relative">
              <li className="">
                <Link
                  to="/vi/analytics"
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
                  to="/vi/analytics/report"
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
                  to="https://data.cryptoviet.info/"
                  target="_blank"
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
                  to="/vi/he-sinh-thai-cryptoviet"
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
                  {cvEcosystem?.data?.data?.map((item) => (
                    <li className="mb-2">
                      <Link
                        to={`/vi/he-sinh-thai-cryptoviet/${item.attributes.slug}`}
                        className="hover:text-main "
                      >
                        {item.attributes.Name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <Search />
            </ul>
            {flag && <NavAnalytic />}
          </div>

          {/* Menu Mobile */}
          <div className="lg:hidden md:block block">
            <div
              id="nav-icon3"
              className={`mt-1 z-50 ${isOpen ? "open" : ""}`}
              onClick={handleClick}
            >
              <span className="bg-item"></span>
              <span className="bg-item"></span>
              <span className="bg-item"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
