"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "@/redux/features/productSlice";
import { useParams } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { addToCart } from "@/redux/features/cartSlice";
import Link from "next/link";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.singleProduct);
  const relatedProducts = useSelector((state) =>
    state.product.products.filter(
      (p) => p.category === product?.category && p._id !== product._id
    )
  );

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
  }, [id, dispatch]);


  if (!product) return <p className="p-6 text-lg">Loading...</p>;
  const handleAddToCart = () => {
      dispatch(addToCart(product));
    };
  return (
    <>
      <Header />
      <div className="px-6 md:px-16 lg:px-32 my-6 pt-5">
        <div className="border-t-2 border-gray-100 pt-10 transition-opacity ease-in duration-500 opacity-100">
          <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
            <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
              <div className="w-full sm:w-[80%]">
                <Image
                  src={product.image[0]}
                  alt={product.name}
                  width={400}
                  height={300}
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="font-medium text-2xl mt-2">{product.name}</h1>
              <div className="flex items-center gap-1 mt-2">
                {/* <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                <p className="pl-2">(122)</p> */}
              </div>
              <p className="mt-5 text-3xl font-medium">${product.price}</p>
              <p className="mt-5 text-gray-500 md:w-4/5">
                {product.description}
              </p>

              <button
                onClick={handleAddToCart}
                className="bg-[#0658A8] cursor-pointer rounded text-white px-8 py-3 my-2 text-sm active:bg-gray-700"
              >
                ADD TO CART
              </button>
              <hr className="mt-4 sm:w-4/5" />
              <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                <p>100% Original product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="flex ">
              <b className="border px-5 py-3 text-sm">Description</b>
              <p className="border px-5 py-3 text-sm">Reviews (122)</p>
            </div>
            <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, quo quia, aperiam placeat dolorem quas ipsum, aliquid
                expedita enim numquam repudiandae doloremque sunt esse at animi
                sint quod nulla excepturi.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-xl font-semibold mb-5 text-[#002C5A]">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item, index) => (
                <Link key={index} href={`/products/${item._id}`}>
                  <div className="shadow">
                    <div className="overflow-hidden">
                      <Image
                        src={item.image[0]}
                        width={300}
                        height={300}
                        alt={item.name}
                        className="hover:scale-110 transition ease-in-out w-full h-80"
                      />
                    </div>

                    <div className="px-2 lg:px-6 py-2 lg:py-6">
                      <h2 className="text-lg font-bold">{item.name}</h2>
                      <p>${item.price}</p>

                      <div className="flex items-center justify-center">
                        <button
                          onClick={handleAddToCart}
                          className="bg-[#0658A8] text-white px-7 py-1 rounded mt-2"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
