import React from "react";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form className="bg-bgSoft items-center p-[50px] rounded-xl w-[500px] h-[500px] flex flex-col justify-center gap-[30px]">
        <h1 className="text-center font-bold text-2xl">Login</h1>
        <input
          className="w-full p-[30px] border-[2px] border-[#2e374a] rounded-md bg-bgColor text-md"
          type="text"
          placeholder="username"
        />
        <input
          className="w-full p-[30px] border-[2px] border-[#2e374a] rounded-md bg-bgColor text-md"
          type="password"
          placeholder="password"
        />

        <button className="p-[30px] w-full bg-teal-600 text-white border-none cursor-pointer rounded-md ">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
