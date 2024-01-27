import Image from "next/image";
import React from "react";
import { MdPlayCircleFilled } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="">
      <div className="relative gradient py-[20px] rounded-[10px] mb-[20px]">
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] ">
          <Image
            src="/images/astronaut.png"
            alt=""
            fill
            className="object-cover opacity-[0.2]"
          />
        </div>

        <div className="flex flex-col gap-[24px]">
          <span className="font-bold ">Available Now</span>

          <h3 className="font-bold text-[12px] text-textSoft">
            How to use the new version of the admin dashboard?
          </h3>

          <span>Takes 4 minutes to learn</span>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            impedit!
          </p>

          <button className="flex items-center p-[10px] text-white gap-[10px] bg-[#5d57c9] border-none rounded-[5px] cursor-pointer w-max">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>

      <div className="relative gradient py-[20px] rounded-[10px] mb-[20px]">
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] ">
          <Image
            src="/images/astronaut.png"
            alt=""
            fill
            className="object-cover opacity-[0.2]"
          />
        </div>

        <div className="flex flex-col gap-[24px]">
          <span className="font-bold ">Available Now</span>

          <h3 className="font-bold text-[12px] text-textSoft">
            How to use the new version of the admin dashboard?
          </h3>

          <span>Takes 4 minutes to learn</span>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            impedit!
          </p>

          <button className="flex items-center p-[10px] text-white gap-[10px] bg-[#5d57c9] border-none rounded-[5px] cursor-pointer w-max">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
