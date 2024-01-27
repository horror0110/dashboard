"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  const { replace } = useRouter();

  const searchParams = useSearchParams();

  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);

  const handleSearch = (e) => {
    
    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }

    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex items-center gap-[10px] bg-[#2e374a] p-[10px] rounded-[10px] w-max">
      <MdSearch />

      <input
        onChange={handleSearch}
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none text-bgColor outline-none "
      />
    </div>
  );
};

export default Search;
