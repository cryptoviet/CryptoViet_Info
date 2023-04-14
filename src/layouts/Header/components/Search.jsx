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
    <li className="search__icon">
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

        <ul className=" mt-2 w-full bg-white shadow-3xl text-sm py-4 pr-10 pl-4 rounded-2xl">
          <li className="text-gray">#Airdrop</li>
          <li className="text-gray">#anhtodeptrai</li>
          <li className="text-gray">#CryptoViet</li>
        </ul>
      </form>
    </li>
  );
}

export default Search;
