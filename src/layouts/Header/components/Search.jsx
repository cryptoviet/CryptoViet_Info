import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
function Search() {
  const [keywords, setKeywords] = useState("");
  const navigate = useNavigate();

  // const search = useLocation().search;
  // const q = new URLSearchParams(search).get("q");

  const handleSearch = (e) => {
    let keywords = e.target.value;
    setKeywords(keywords);
    keywords.length > 0
      ? navigate(`/search?q=${keywords.trim()}`)
      : navigate("/search");
  };

  return (
    <li className="search__icon lg:block md:block hidden">
      <Link
        to="#"
        className="block py-2 pl-3 mt-1 pr-4 hover:text-main transition-all"
      >
        <span
          className="
           hover:text-main
        flex items-center text-base font-semibold gap-1"
        >
          <RiSearchLine />
        </span>
      </Link>
      <form action="" className="search hidden absolute right-0">
        <input
          type="search"
          className=" bg-white shadow-3xl py-2 pr-4 pl-4 rounded-2xl text-sm text-gray outline-none"
          placeholder="Search..."
          onChange={handleSearch}
          value={keywords}
        />

        <ul className=" mt-2 flex w-full justify-between bg-white shadow-3xl text-sm p-4 rounded-2xl">
          <div>
            <li className="text-gray  cursor-pointer hover:text-item">
              #Airdrop
            </li>
            <li className="text-gray  cursor-pointer hover:text-item">
              #Layer2
            </li>
            <li className="text-gray  cursor-pointer hover:text-item">
              #KienThuc
            </li>
            <li className="text-gray  cursor-pointer hover:text-item">
              #Metaverse
            </li>
          </div>
          <div className="text-right">
            <li className="text-gray  cursor-pointer hover:text-item">
              #Bitcoin
            </li>
            <li className="text-gray  cursor-pointer hover:text-item">#Node</li>
            <li className="text-gray  cursor-pointer hover:text-item">#NFT</li>
            <li className="text-gray  cursor-pointer hover:text-item">
              #Report
            </li>
          </div>
        </ul>
      </form>
    </li>
  );
}

export default Search;
