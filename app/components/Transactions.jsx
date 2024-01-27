import Image from "next/image";
import React from "react";

const Transactions = () => {
  return (
    <div className="bg-bgSoft p-[20px] rounded-[10px]">
      <h2 className="mb-[20px] font-extralight text-textSoft">
        Latest Transactions
      </h2>
      <table className="w-full ">
        <thead>
          <tr align="">
            <td className="p-[10px]">Name</td>
            <td className="p-[10px]">Status</td>
            <td className="p-[10px]">Date</td>
            <td className="p-[10px]">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr align="">
            <td className="flex items-center gap-[10px] p-[10px]">
              <Image
                src="/images/noavatar.png"
                alt=""
                width={40}
                height={40}
                className="object-cover rounded-full"
              />
              John Doe
            </td>
            <td align="" className="p-[10px]">
              <span className="p-[5px] rounded-[5px] text-[14px] text-white bg-[#f7cb7375] ">
                Pending
              </span>
            </td>
            <td className="p-[10px]">2023.04.21</td>
            <td className="p-[10px]">14$</td>
          </tr>
          <tr align="">
            <td className="p-[10px] flex items-center gap-[10px]">
              <Image
                src="/images/noavatar.png"
                alt=""
                width={40}
                height={40}
                className="object-cover rounded-full"
              />
              John Doe
            </td>
            <td className="p-[10px]">
              <span className="p-[5px] rounded-[5px] text-[14px] text-white bg-[#f7cb7375] ">
                Pending
              </span>
            </td>
            <td className="p-[10px]">2023.04.21</td>
            <td className="p-[10px]">14$</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
