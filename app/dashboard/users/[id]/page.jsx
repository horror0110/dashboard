import Image from "next/image";
import React from "react";

const UserDetailPage = () => {
  return (
    <div className="flex gap-[50px] mt-[20px]">
      <div className="flex-1 bg-bgSoft p-[20px] rounded-[10px] h-max font-bold text-textSoft ">
        <div className="h-[300px] w-full relative overflow-hidden">
          <Image
            src="/images/noavatar.png"
            alt=""
            fill
            className="rounded-[10px]"
          />
        </div>
        John Doe
      </div>

      <div className="flex-[3] bg-bgSoft p-[20px] rounded-[10px]">
        <form className="flex flex-col ">
          <label className="text-[12px]">Username</label>

          <input
            className="p-[20px] border-[2px] border-[#2e374a] rounded-md bg-bgColor text-white my-[10px] "
            type="text"
            name="username"
            placeholder="John Doe"
          />

          <label className="text-[12px]">Email</label>

          <input
            className="p-[20px] border-[2px] border-[#2e374a] rounded-md bg-bgColor text-white my-[10px] "
            type="email"
            name="email"
            placeholder="JohnDoe@gmail.com"
          />

          <label className="text-[12px]">Password</label>

          <input
            className="p-[20px] border-[2px] border-[#2e374a] rounded-md bg-bgColor text-white my-[10px] "
            type="text"
            name="password"
            placeholder="John Doe"
          />

          <label className="text-[12px]">Phone</label>

          <input
            className="p-[20px] border-[2px] border-[#2e374a] rounded-md bg-bgColor text-white my-[10px] "
            type="text"
            name="phone"
            placeholder="+1234567"
          />

          <label className="text-[12px]">Address</label>

          <textarea
            className="p-[20px] border-[2px] border-[#2e374a] rounded-md bg-bgColor text-white my-[10px] "
            type="text"
            name="address"
            placeholder="New York"
          />

          <label className="text-[12px]">Is Admin?</label>

          <select
            className="p-[20px] border-[2px] border-[#2e374a] rounded-md bg-bgColor text-white my-[10px] "
            name="isAdmin"
            id="isAdmin"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label className="text-[12px]">Is Active?</label>

          <select
            className="p-[20px] border-[2px] border-[#2e374a] rounded-md bg-bgColor text-white my-[10px] "
            name="isActive"
            id="isActive"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <button className="w-full p-[20px] bg-teal-700 text-white border-none rounded-md cursor-pointer mt-[20px]">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDetailPage;
