"use client";

import Pagination from "@/app/components/Pagination";
import Search from "@/app/components/Search";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductsPage = ({ searchParams }) => {
  const [products, setProducts] = useState([]);

  const [count, setCount] = useState("");

  useEffect(() => {
    fetch(`/api/products?page=${searchParams.page ? searchParams.page : 1}`, {
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        searchParams.q
          ? setProducts((prev) =>
              data.data.filter((el) =>
                el.title
                  .toLowerCase()
                  .includes(searchParams.q.toLowerCase().trim(" "))
              )
            )
          : setProducts(data.data);
        setCount(data.count);
      })
      .catch((err) => console.log(err));
  }, [products]);
  return (
    <div className="bg-bgSoft p-[20px] mt-[20px] rounded-[10px]">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user" />
        <Link href="/dashboard/products/add">
          <button className="p-[10px] bg-[#5d57c9] text-white border-none rounded-[5px] cursor-pointer">
            Add new
          </button>
        </Link>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <td className="p-[10px]">Title</td>
            <td className="p-[10px]">Description</td>
            <td className="p-[10px]">Price</td>
            <td className="p-[10px]">Created at</td>
            <td className="p-[10px]">Stock</td>
            <td className="p-[10px]">Action</td>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr>
                <td className="p-[10px]">
                  <div className="flex gap-[10px] items-center">
                    {!product.img || product.img === " " ? (
                      <Image
                        src="/images/noproduct.jpg"
                        alt=""
                        width={40}
                        height={40}
                        className="object-cover rounded-full"
                      />
                    ) : (
                      <Image
                        src={product?.img}
                        alt=""
                        width={40}
                        height={40}
                        className="object-cover rounded-full"
                      />
                    )}

                    {product?.title}
                  </div>
                </td>

                <td className="p-[10px]">{product?.desc}</td>

                <td className="p-[10px]">{product?.price}</td>

                <td className="p-[10px]">{product?.createdAt.slice(0, 10)}</td>

                <td className="p-[10px]">{product?.stock}</td>

                <td className="p-[10px]">
                  <div className="flex  gap-[10px] text-white border-none cursor-pointer">
                    <Link href={`/dashboard/products/${product._id}`}>
                      <button className="bg-teal-700 rounded-[5px] py-[5px] px-[10px]">
                        View
                      </button>
                    </Link>
                    <button className="bg-red-600 rounded-[5px] py-[5px] px-[10px]">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="text-xs text-gray-400 ml-5" colSpan="6">
                Not found...
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <Pagination count={count} />
    </div>
  );
};

export default ProductsPage;
