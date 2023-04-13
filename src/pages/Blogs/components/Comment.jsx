import React from "react";

function Comment() {
  return (
    <div>
      <div className="mt-12 mb-24">
        <span className="font-semibold">Post View: 36</span>
        <span className="block mt-6 text-2xl font-semibold">3 responses</span>
        <ul className="flex gap-2 mt-4 relative">
          <li className="w-[35px] h-[35px]">
            <img
              className="w-full h-full rounded-full"
              src="/onchain.svg"
              alt=""
            />
          </li>
          <li className="">
            <div className="mb-4 ">
              <div className="bg-[#F0F2F5] py-2 px-4 rounded-2xl">
                <span className="font-semibold">Jack</span>
                <p>Did they got it back?</p>
              </div>
              <div className="px-4 flex justify-between text-sm text-gray">
                <span className="hover:text-main cursor-pointer">Reply</span>
                <span>03/04/2023</span>
              </div>
            </div>

            <ul className="flex gap-2 absolute">
              <li className="w-[35px] h-[35px]">
                <img
                  className="w-full h-full rounded-full"
                  src="/onchain.svg"
                  alt=""
                />
              </li>
              <li className="">
                <div className="bg-[#F0F2F5] py-2 px-4 rounded-2xl">
                  <span className="font-semibold">Jack</span>
                  <p>Did they got it back?</p>
                </div>

                <div className="px-4 flex justify-between text-sm text-gray">
                  <span className="hover:text-main cursor-pointer">Reply</span>
                  <span>03/04/2023</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="flex gap-2 mt-28 relative">
          <li className="w-[35px] h-[35px]">
            <img
              className="w-full h-full rounded-full"
              src="/onchain.svg"
              alt=""
            />
          </li>
          <li className="">
            <div className="mb-4 ">
              <div className="bg-[#F0F2F5] py-2 px-4 rounded-2xl">
                <span className="font-semibold">Jack</span>
                <p>Did they got it Lorem, ipsum dolor. back?</p>
              </div>
              <div className="px-4 flex justify-between text-sm text-gray">
                <span className="hover:text-main cursor-pointer">Reply</span>
                <span>03/04/2023</span>
              </div>
            </div>

            <ul className="flex gap-2 absolute">
              <li className="w-[35px] h-[35px]">
                <img
                  className="w-full h-full rounded-full"
                  src="/onchain.svg"
                  alt=""
                />
              </li>
              <li className="">
                <div className="bg-[#F0F2F5] py-2 px-4 rounded-2xl">
                  <span className="font-semibold">Jack</span>
                  <p>Did they got it back?</p>
                </div>

                <div className="px-4 flex justify-between text-sm text-gray">
                  <span className="hover:text-main cursor-pointer">Reply</span>
                  <span>03/04/2023</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div>
        <span className="block mt-6 text-2xl font-semibold">Q & A</span>
        <p className="text-gray">
          Email của bạn sẽ không được hiển thị công khai.
        </p>
        <form action="" className="flex flex-col gap-4 mt-4">
          <textarea
            className="border-[1px] text-start border-gray block w-full rounded-xl outline-none h-24 p-2"
            type="text"
            placeholder="Bình luận *"
          />
          <input
            className="border-[1px] border-gray block w-full rounded-xl outline-none p-2"
            type="text"
            placeholder="Tên *"
          />

          <input
            className="border-[1px] border-gray block w-full rounded-xl outline-none p-2"
            type="text"
            placeholder="Email *"
          />
          <input
            className="border-[1px] border-gray block w-full rounded-xl outline-none p-2"
            type="text"
            placeholder="Trang web"
          />

          <div className="relative mb-4">
            <input type="checkbox" className="w-[25px] rounded-xl h-[25px]" />
            <span className="ml-8 text-gray">Remember my name</span>
          </div>

          <input
            className="border-[1px] mb-8 w-[80px] bg-black text-white hover:bg-main cursor-pointer transition-all rounded-xl outline-none p-2"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Comment;
