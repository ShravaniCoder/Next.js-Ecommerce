import { Search, ShoppingCart } from 'lucide-react';
import React from 'react'

const Header = () => {
    return (
      <>
        <div className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-6 bg-[#0658A8]">
          <div className="text-3xl text-white font-semibold w-[40%]">Logo</div>
          <div className="flex items-center justify-end w-[60%] gap-x-7">
            <div className="sm:inline-flex hidden items-center justify-center border text-white border-white px-5 py-2  rounded-lg sm:w-full">
              <Search className="text-white" />
              <input
                // value={search}
                // onChange={(e) => setSearch(e.target.value)}
                className="flex-1 outline-none bg-inherit text-sm px-4 text-white"
                type="text"
                placeholder="Search for products"
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-8 py-2 text-white rounded-lg bg-[#002C5A]">
              <ShoppingCart /> <h1 className="font-semibold text-base">Cart</h1>
            </button>
          </div>
        </div>
      </>
    );
}

export default Header;