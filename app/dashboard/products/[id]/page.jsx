import Image from "next/image";
import React from "react";

const ProductDetailPage = () => {
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
          <label className="text-[12px]">Title</label>

          <input
            className="p-[20px] border-[2px] border-[#2e374a] rounded-md bg-bgColor text-white my-[10px] "
            type="text"
            name="title"
            placeholder="IPHONE"
          />

          <label className="text-[12px]">Price</label>

          <input
            className="p-[20px] border-[2px] border-[#2e374a] rounded-md bg-bgColor text-white my-[10px] "
            type="text"
            name="price"
            placeholder="1500$"
          />

          <label className="text-[12px]">Stock</label>

          <input
            className="p-[20px] border-[2px] border-[#2e374a] rounded-md bg-bgColor text-white my-[10px] "
            type="text"
            name="password"
            placeholder="12"
          />

          <label className="text-[12px]">Color</label>

          <input
            className="p-[20px] border-[2px] border-[#2e374a] rounded-md bg-bgColor text-white my-[10px] "
            type="text"
            name="color"
            placeholder="Red"
          />

          <label className="text-[12px]">Description</label>

          <textarea
            className="p-[20px] border-[2px] border-[#2e374a] rounded-md bg-bgColor text-white my-[10px] "
            type="text"
            name="description"
            placeholder="Desc here "
          />

          <label className="text-[12px]">Cat</label>

          <select
            className="p-[20px] border-[2px] border-[#2e374a] rounded-md bg-bgColor text-white my-[10px]"
            name="cat"
            id="cat"
          >
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>

          <button className="w-full p-[20px] bg-teal-700 text-white border-none rounded-md cursor-pointer mt-[20px]">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetailPage;
