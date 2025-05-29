import Image from 'next/image';
import React from 'react'

const ProductItem = ({ id, image, name, price }) => {
    
  return (
    <div className=" text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className=" overflow-hidden">
        <Image
          className=" hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
      <button className="py-2 px-4 bg-[#0658A8] text-white">Add to Cart</button>
    </div>
  );
}

export default ProductItem;