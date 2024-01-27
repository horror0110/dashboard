import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="bg-bgSoft p-[20px] rounded-[10px] flex gap-[20px] cursor-pointer w-full hover:bg-[#2e374a]">
      <MdSupervisedUserCircle size={24} />

      <div className="flex flex-col gap-[20px]">
        <span>Total Users</span>
        <span className="text-2xl font-medium ">10.273</span>
        <span className="flex gap-1 text-[14px] font-light">
          <span className="text-green-400">12% </span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
