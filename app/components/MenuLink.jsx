"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuLink = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      className={
        pathname === item.path
          ? `p-5 flex items-center gap-[10px] hover:bg-[#2e374a] bg-[#2e374a] my-[5px] rounded-[10px]`
          : `p-5 flex items-center gap-[10px] hover:bg-[#2e374a] my-[5px] rounded-[10px]`
      }
      href={item.path}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
