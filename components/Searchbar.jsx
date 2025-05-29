"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearch, setShowSearch } from "@/redux/features/searchSlice";
import { X } from "lucide-react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.search);
  const showSearch = useSelector((state) => state.search.showSearch);

  if (!showSearch) return null;

  return (
    <div className="bg-[#F5F5F5] px-6  py-4 ">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <input
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="flex-1 border border-gray-300 px-4 py-2 rounded-lg outline-none text-sm"
          type="text"
          placeholder="Search for products"
        />
        <button
          onClick={() => dispatch(setShowSearch(false))}
          className="ml-4 text-gray-600 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
