"use client";
import React, { useState } from "react";
import dropdown from '@/public/dropdown_icon.png'
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCategory,
  filterByPrice,
} from "@/redux/features/productSlice";


const ProductsListing = () => {
  const [showFilter, setShowFilter] = useState(false);
  const products = useSelector((state) => state.product.filteredProducts);
  const search = useSelector((state) => state.search.search);
  const price = useSelector((state) => state.product.price);
  const dispatch = useDispatch();
  const searchedProducts = products.filter(
    (product) =>
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 mt-10 ">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS{" "}
          <Image
            className={`h-5 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={dropdown}
            alt=" "
          />
        </p>

        {/*Category Filter */}
        <div
          className={`bg-[#0658A8] rounded  pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <h2 className="text-white mb-3 text-sm font-medium">Categories</h2>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex flex-col gap-2">
              {["All", "Electronics", "Clothing", "Home"].map((cat) => (
                <label key={cat} className="text-white">
                  <input
                    type="radio"
                    className="appearance-none w-3 h-3 mr-2 border border-white rounded-full checked:border-4 checked:border-white focus:outline-none"
                    name="category"
                    value={cat}
                    onChange={() => dispatch(filterByCategory(cat))}
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`bg-[#0658A8] rounded  pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="text-white mb-3 text-sm font-medium">Price</p>

          <div className="flex flex-col gap-2 pr-4">
            <input
              type="range"
              min="0"
              max="1000"
              className="w-full h-1 bg-[#467db4] text-white rounded-lg appearance-none cursor-pointer
    [&::-webkit-slider-thumb]:appearance-none 
    [&::-webkit-slider-thumb]:w-4 
    [&::-webkit-slider-thumb]:h-4 
    [&::-webkit-slider-thumb]:bg-white 
    [&::-webkit-slider-thumb]:rounded-full 
    [&::-webkit-slider-thumb]:border 
    [&::-webkit-slider-thumb]:border-[#2e6dad]

    [&::-moz-range-thumb]:appearance-none 
    [&::-moz-range-thumb]:w-4 
    [&::-moz-range-thumb]:h-4 
    [&::-moz-range-thumb]:bg-white 
    [&::-moz-range-thumb]:rounded-full 
    [&::-moz-range-thumb]:border 
    [&::-moz-range-thumb]:border-[#2e6dad]"
              value={price}
              onChange={(e) => dispatch(filterByPrice(Number(e.target.value)))}
            />

            <div className="flex justify-between text-white text-xs px-1">
              <span>0</span>
              <span>1000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <div className=" inline-flex gap-2 items-center my-2 font-bold">
            <p className="text-[#002C5A]">Product Listing</p>
            <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#002C5A]"></p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchedProducts.map((product) => (
            <div key={product.id} product={product} className="shadow ">
              <div className=" overflow-hidden">
                <Image
                  src={product.image[0]}
                  width={300}
                  height={300}
                  alt={product.name}
                  className=" hover:scale-110 transition ease-in-out w-full h-80"
                />
              </div>
              <div className="px-2 lg:px-6 py-2 lg:py-6">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p>${product.price}</p>
                <div className="flex items-center justify-center">
                  <button className="bg-[#0658A8] text-white px-7 py-1 rounded mt-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsListing;
 