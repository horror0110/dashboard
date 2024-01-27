"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import React from "react";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();

  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);

  const currentPage = parseInt(params.get("page")) || 1;

  const currentPath = pathname.split("/").pop();

  const router = useRouter();

  const next = () => {
    router?.push(
      currentPath === "users"
        ? `/dashboard/users?page=${currentPage + 1}`
        : `/dashboard/products?page=${currentPage + 1}`
    );
  };

  const prev = () => {
    router?.push(
      currentPath === "users"
        ? `/dashboard/users?page=${currentPage - 1}`
        : `/dashboard/products?page=${currentPage - 1}`
    );
  };

  const perPage = 2;

  const hasPrev = perPage * (currentPage - 1) > 0;

  const hasNext = perPage * (currentPage - 1) + perPage < count;

  return (
    <div className="flex justify-between p-[10px]">
      <button
        disabled={!hasPrev}
        onClick={prev}
        className="py-[5px] px-[10px] bg-blue-500 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-500"
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        onClick={next}
        className="py-[5px] bg-blue-500 px-[10px] cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-500"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
