import React from "react";
import { CgCornerDownRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
function NavAnalytic() {
  const ecosystems = useFetch(`${process.env.REACT_APP_DOMAIN}/api/ecosystems`);
  const nftApi = useFetch(`${process.env.REACT_APP_DOMAIN}/api/nfts`);

  const listEcosystem = ecosystems && ecosystems?.data;

  const linkTo = "/vi/analytics";

  const pathName = window.location.pathname;
  return (
    <ul className="flex item-center gap-4 ml-6">
      <li className="font-semibold mt-1">
        <CgCornerDownRight />
      </li>
      <li className="font-semibold nft text-base  transition-all">
        <Link
          to={`${linkTo}/he-sinh-thai`}
          className={`hover:text-main  relative z-10  ${
            pathName === `${linkTo}/he-sinh-thai` && "text-main"
          }`}
        >
          Hệ sinh thái
        </Link>
        <ul className="nft absolute nft__menu hidden text-sm mt-2 bg-white shadow-3xl py-4 pr-10 pl-4 rounded-2xl">
          <>
            {listEcosystem?.data.map((item) => (
              <li className="mb-2">
                <Link
                  to={`/vi/analytics/he-sinh-thai/${item.attributes.slug}`}
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
          to={`${linkTo}/airdrop`}
          className={`hover:text-main ${
            pathName === "/vi/analytics/airdrop" && "text-main"
          }`}
        >
          Airdrop
        </Link>
      </li>

      <li className="font-semibold relative z-10 nft text-base transition-all">
        <Link
          to={`${linkTo}/nft`}
          className={`hover:text-main  relative z-10 ${
            pathName === "/vi/analytics/nft" && "text-main"
          }`}
        >
          NFTs
        </Link>
        <ul className="absolute nft__menu hidden mt-2 bg-white shadow-3xl py-4 pr-10 pl-4 rounded-2xl">
          {nftApi?.data?.data?.map((item) => (
            <li className="mb-2">
              <Link
                to={`/vi/analytics/nft/${item.attributes.slug}`}
                className="hover:text-main "
              >
                {item.attributes.Name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className="font-semibold text-base hover:text-main transition-all">
        <Link
          className={`hover:text-main ${
            pathName === "/vi/analytics/knowledge" && "text-main"
          }`}
          to={`${linkTo}/knowledge`}
        >
          Kiến thức
        </Link>
      </li>

      <li className="font-semibold text-base hover:text-main transition-all">
        <Link
          className={`hover:text-main ${
            pathName === `${linkTo}/thu-vien` && "text-main"
          }`}
          to={`${linkTo}/thu-vien`}
        >
          Thư viện
        </Link>
      </li>
    </ul>
  );
}

export default NavAnalytic;
