import React from "react";

const AddUserPage = () => {
  return (
    <div className="bg-bgSoft p-[20px] mt-[20px] ">
      <form className="flex flex-wrap justify-between ">
        <input
          className="p-[30px] border w-[45%] bg-bgColor outline-none  text-white   rounded-[5px] mb-[30px] "
          type="text"
          placeholder="username"
          name="title"
          required
        />

        <input
          className="p-[30px] border w-[45%] bg-bgColor outline-none  text-white   rounded-[5px] mb-[30px] "
          type="text"
          placeholder="email"
          name="email"
          required
        />
        <input
          className="p-[30px] border w-[45%] bg-bgColor outline-none  text-white   rounded-[5px] mb-[30px] "
          type="text"
          placeholder="password"
          name="password"
          required
        />
        <input
          className="p-[30px] border w-[45%] bg-bgColor outline-none  text-white   rounded-[5px] mb-[30px] "
          type="text"
          placeholder="phone"
          name="phone"
          required
        />

        <select
          className="p-[30px] bg-bgColor text-white border  rounded-[5px] mb-[30px] outline-none  w-[45%]"
          name="admin"
          id="admin"
        >
          <option value="kitchen" selected>
            Is Admin?
          </option>
          <option value="kitchen">No</option>
          <option value="kitchen">Yes</option>
        </select>

        <select
          className="p-[30px] bg-bgColor text-white border  rounded-[5px] mb-[30px] outline-none  w-[45%]"
          name="active"
          id="active"
        >
          <option value="kitchen" selected>
            Is Active?
          </option>
          <option value="kitchen">No</option>
          <option value="kitchen">Yes</option>
        </select>

        <textarea
          className="p-[30px] bg-bgColor text-white border  rounded-[5px] mb-[30px] outline-none w-full"
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>

        <button
          className="w-full p-[30px] bg-teal-600 text-white rounded-md  "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
