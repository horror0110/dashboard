"use client";
import Pagination from "@/app/components/Pagination";
import Search from "@/app/components/Search";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const UsersPage = ({ searchParams }) => {
  const [users, setUsers] = useState([]);

  const [count, setCount] = useState("");

  useEffect(() => {
    fetch(`/api/users?page=${searchParams.page ? searchParams.page : 1}`, {
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        searchParams.q
          ? setUsers((prev) =>
              data.data.filter((el) =>
                el.username
                  .toLowerCase()
                  .includes(searchParams.q.toLowerCase().trim(" "))
              )
            )
          : setUsers(data.data);
        setCount(data.count);
      })
      .catch((err) => console.log(err));
  }, [users]);
  return (
    <div className="bg-bgSoft p-[20px] mt-[20px] rounded-[10px]">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user" />
        <Link href="/dashboard/users/add">
          <button className="p-[10px] bg-[#5d57c9] text-white border-none rounded-[5px] cursor-pointer">
            Add new
          </button>
        </Link>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <td className="p-[10px]">Name</td>
            <td className="p-[10px]">Email</td>
            <td className="p-[10px]">Created At</td>
            <td className="p-[10px]">Role</td>
            <td className="p-[10px]">Status</td>
            <td className="p-[10px]">Action</td>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td className="p-[10px]">
                  <div className="flex gap-[10px] items-center">
                    <Image
                      src={user?.img ? `${user?.img}` : "/images/noavatar.png"}
                      alt=""
                      width={40}
                      height={40}
                      className="object-cover rounded-full"
                    />
                    {user?.username}
                  </div>
                </td>
                <td className="p-[10px]">{user?.email}</td>
                <td className="p-[10px]">{user?.createdAt.slice(0, 10)}</td>
                <td className="p-[10px]">
                  {user?.isAdmin ? "Admin" : "Client"}
                </td>

                <td className="p-[10px]">
                  {user?.isActive ? "active" : "passive"}
                </td>
                <td className="p-[10px]">
                  <div className="flex  gap-[10px] text-white border-none cursor-pointer">
                    <Link href={`/dashboard/users/${user._id}`}>
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

export default UsersPage;
