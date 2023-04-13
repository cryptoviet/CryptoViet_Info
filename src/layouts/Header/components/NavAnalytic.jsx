import React from "react";
import { CgCornerDownRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
function NavAnalytic() {
  const ecosystems = useFetch("http://localhost:1337/api/ecosystems");
  const listEcosystem = ecosystems && ecosystems?.data;

  const pathName = window.location.pathname;
  return (
    <ul className="flex item-center gap-4 ml-6">
      <li className="font-semibold mt-1">
        <CgCornerDownRight />
      </li>
      <li className="font-semibold nft text-base  transition-all">
        <Link
          to="/analytics/ecosystem"
          className={`hover:text-main  relative z-10  ${
            pathName === "/analytics/ecosystem" && "text-main"
          }`}
        >
          Hệ sinh thái
        </Link>
        <ul className="nft absolute nft__menu hidden text-sm mt-2 bg-white shadow-3xl py-4 pr-10 pl-4 rounded-2xl">
          <>
            {listEcosystem?.data.map((item) => (
              <li className="mb-2">
                <Link
                  to={`/ecosystem/${item.attributes.slug}`}
                  className="hover:text-main "
                >
                  {item.attributes.Name}
                </Link>
              </li>
            ))}
          </>
        </ul>
      </li>
      <li className="font-semibold text-base hover:text-main transition-all">
        <Link
          to="/analytics/airdrop"
          className={`hover:text-main ${
            pathName === "/analytics/airdrop" && "text-main"
          }`}
        >
          Airdrop
        </Link>
      </li>

      <li className="font-semibold relative z-10 nft text-base transition-all">
        <Link
          to="/analytics/nft"
          className={`hover:text-main  relative z-10 ${
            pathName === "/analytics/nft" && "text-main"
          }`}
        >
          NFTs
        </Link>
        <ul className="absolute nft__menu hidden mt-2 bg-white shadow-3xl py-4 pr-10 pl-4 rounded-2xl">
          <li>
            <Link className="hover:text-main ">Metaverse</Link>
          </li>
          <li>
            <Link className="hover:text-main ">Gamefi</Link>
          </li>
          <li>
            <Link className="hover:text-main ">NFT - fi</Link>
          </li>
        </ul>
      </li>
      <li className="font-semibold text-base hover:text-main transition-all">
        <Link
          className={`hover:text-main ${
            pathName === "/analytics/knowledge" && "text-main"
          }`}
          to="/analytics/knowledge"
        >
          Kiến thức
        </Link>
      </li>

      <li className="font-semibold text-base hover:text-main transition-all">
        <Link
          className={`hover:text-main ${
            pathName === "/analytics/ama" && "text-main"
          }`}
          to="/analytics/ama"
        >
          AMA
        </Link>
      </li>
    </ul>
  );
}

export default NavAnalytic;
