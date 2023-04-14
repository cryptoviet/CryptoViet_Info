import React from "react";

function Onchain() {
  return (
    <div>
      <div className="container mx-auto flex gap-12 mt-12 justify-between">
        <div className="w-3/5">
          <h1 className="font-bold text-[54px] ">Onchain</h1>
          <p>
            CryptoViet Data - Nền tảng cung cấp thông tin dữ liệu On-chain trong
            thị trường Crypto, giúp các nhà đầu tư có cái nhìn tổng quan về hoạt
            động của các đồng tiền mã hóa trên blockchain.
          </p>
          <img src="onchain2.svg" className="mt-12" alt="" />
        </div>

        <div className="w-2/5">
          <img src="onchain.svg" className=" " alt="" />
        </div>
      </div>
    </div>
  );
}

export default Onchain;
