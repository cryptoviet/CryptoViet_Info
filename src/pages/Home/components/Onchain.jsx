import React from "react";

function Onchain() {
  return (
    <div>
      <div className="container mx-auto flex gap-12 mt-12 justify-between">
        <div className="w-3/5">
          <h1 className="font-bold text-[54px] ">Onchain</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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
