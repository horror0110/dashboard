"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const AddProductPage = () => {
  const [product, setProduct] = useState([
    {
      title: "",
      price: "",
      size: "",
      stock: "",
      color: "",
      size: "",
      desc: "",
      img: "",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) =>
        data.data
          ? toast.success("Successfully created!")
          : toast.error("This is an error!")
      )
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-bgSoft p-[20px] mt-[20px] ">
      <form className="flex flex-wrap justify-between ">
        <input
          className="p-[30px] border w-[45%] bg-transparent outline-none  text-white   rounded-[5px] mb-[30px] "
          type="text"
          placeholder="title"
          name="title"
          required
          onChange={handleChange}
        />

        <select
          className="p-[30px] bg-transparent text-white border  rounded-[5px] mb-[30px] outline-none  w-[45%]"
          name="cat"
          id="cat"
        >
          <option value="kitchen">Choose a category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer </option>
        </select>

        <input
          className="p-[30px] w-[45%] border bg-transparent text-white   rounded-[5px] mb-[30px] outline-none"
          type="text"
          placeholder="price"
          name="price"
          required
          onChange={handleChange}
        />

        <input
          className="p-[30px] w-[45%] border bg-transparent text-white   rounded-[5px] mb-[30px] outline-none"
          type="text"
          placeholder="image"
          name="img"
          required
          onChange={handleChange}
        />
        <input
          className="p-[30px] border w-[45%] bg-transparent text-white   rounded-[5px] mb-[30px] outline-none"
          type="text"
          placeholder="stock"
          name="stock"
          required
          onChange={handleChange}
        />
        <input
          className="p-[30px] border w-[45%] bg-transparent text-white   rounded-[5px] mb-[30px] outline-none"
          type="text"
          placeholder="color"
          name="color"
          required
          onChange={handleChange}
        />
        <input
          className="p-[30px] border w-[45%] bg-transparent text-white   rounded-[5px] mb-[30px] outline-none"
          type="text"
          placeholder="size  "
          name="size "
          required
          onChange={handleChange}
        />

        <textarea
          required
          className="p-[30px] bg-transparent text-white border  rounded-[5px] mb-[30px] outline-none w-full"
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
          onChange={handleChange}
        ></textarea>

        <button
          onClick={handleSave}
          className="w-full p-[30px] bg-teal-600 text-white rounded-md  "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
