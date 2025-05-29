"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "@/redux/features/productSlice";
import { useParams } from "next/navigation";
import Image from "next/image";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.singleProduct);

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
  }, [id, dispatch]);

  if (!product) return <p className="p-6 text-lg">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <div className="mb-4">
        <Image
          src={product.image[0]}
          alt={product.name}
          width={400}
          height={300}
          className="rounded"
        />
      </div>
      <p className="text-xl font-semibold text-green-600">
        ₹{product.offerPrice}
      </p>
      <p className="text-gray-600 line-through mb-2">₹{product.price}</p>
      <p className="text-gray-700">{product.description}</p>
    </div>
  );
};

export default ProductDetailsPage;
