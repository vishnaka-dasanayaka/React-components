import React from "react";
import HomeButton from "./HomeButton";

function IOSCal() {
  return (
    <div className="flex justify-center items-center">
      <div className="fixed left-5 top-5">
        <HomeButton />
      </div>

      <div className="w-[350px] rounded-3xl h-[700px] mt-20 bg-black flex flex-col justify-center items-end">
        <div className="h-1/3 flex justify-end place-items-end text-left mr-5 text-[75px]">
          <span className="text-white">0</span>
        </div>

        <div className="2/3 w-full">
          <div className="grid grid-cols-4 items-center justify-between">
            <div className="bg-gray-200 m-2 text-center rounded-full h-[70px] flex justify-center items-center text-2xl font-extrabold uppercase">
              ac
            </div>
            <div className="bg-gray-200 m-2 text-center rounded-full h-[70px] flex justify-center items-center text-2xl font-extrabold uppercase">
              +/-
            </div>
            <div className="bg-gray-200 m-2 text-center rounded-full h-[70px] flex justify-center items-center text-2xl font-extrabold uppercase">
              %
            </div>
            <div className="bg-orange-500 m-2 text-center rounded-full h-[70px] flex justify-center items-center text-2xl font-extrabold uppercase">
              /
            </div>
          </div>

          <div className="grid grid-cols-4 items-center justify-between">
            <div className="bg-gray-200 m-2 text-center rounded-full h-[70px] flex justify-center items-center text-2xl font-extrabold uppercase">
              7
            </div>
            <div className="bg-gray-200 m-2 text-center rounded-full h-[70px] flex justify-center items-center text-2xl font-extrabold uppercase">
              8
            </div>
            <div className="bg-gray-200 m-2 text-center rounded-full h-[70px] flex justify-center items-center text-2xl font-extrabold uppercase">
              9
            </div>
            <div className="bg-orange-500 m-2 text-center rounded-full h-[70px] flex justify-center items-center text-2xl font-extrabold uppercase">
              x
            </div>
          </div>
          <div className="grid grid-cols-4 items-center justify-between">
            <div className="bg-gray-200 m-2 text-center rounded-full h-[70px] flex justify-center items-center text-2xl font-extrabold uppercase">
              4
            </div>
            <div className="bg-gray-200 m-2 text-center rounded-full h-[70px] flex justify-center items-center text-2xl font-extrabold uppercase">
              5
            </div>
            <div className="bg-gray-200 m-2 text-center rounded-full h-[70px] flex justify-center items-center text-2xl font-extrabold uppercase">
              6
            </div>
            <div className="bg-orange-500 m-2 text-center rounded-full h-[70px] flex justify-center items-center text-2xl font-extrabold uppercase">
              -
            </div>
          </div>
          <div className="grid grid-cols-4 items-center justify-between">
            <div className="bg-gray-200 m-2 text-center rounded-full h-[70px] flex justify-center items-center text-2xl font-extrabold uppercase">
              1
            </div>
            <div className="bg-gray-200 m-2 text-center rounded-full h-[70px] flex justify-center items-center text-2xl font-extrabold uppercase">
              2
            </div>
            <div className="bg-gray-200 m-2 text-center rounded-full h-[70px] flex justify-center items-center text-2xl font-extrabold uppercase">
              3
            </div>
            <div className="bg-orange-500 m-2 text-center rounded-full h-[70px] flex justify-center items-center text-2xl font-extrabold uppercase">
              +
            </div>
          </div>
          <div className="grid grid-cols-3 items-center justify-between">
            <div className="bg-gray-200 m-2 text-center rounded-full h-[70px] flex justify-center items-center text-2xl font-extrabold uppercase">
              0
            </div>
            <div className="bg-gray-200 m-2 text-center rounded-full h-[70px] flex justify-center items-center text-2xl font-extrabold uppercase">
              .
            </div>
            <div className="bg-orange-500 m-2 text-center rounded-full h-[70px] flex justify-center items-center text-2xl font-extrabold uppercase">
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IOSCal;
