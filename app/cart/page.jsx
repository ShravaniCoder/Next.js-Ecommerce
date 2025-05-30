"use client";

import { useSelector, useDispatch } from "react-redux";
import { updateCartItem } from "@/redux/features/cartSlice";
import { products } from "@/app/assets"; 
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Delete } from "lucide-react";
import CartTotal from "@/components/CartTotal";


const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartItems);
  const [currency, setCurrency] = useState("$");

  const updateQuantity = (_id, size, quantity) => {
    dispatch(updateCartItem({ _id, size, quantity }));
  };

  return (
    <>
      <Header />
      <div className="px-6 md:px-16 lg:px-32 my-6 pt-5">
        <div className="border-t pt-14">
          <div className="inline-flex gap-2 items-center my-2 font-bold">
            <p className="text-[#002C5A]">Your Cart</p>
            <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#002C5A]"></p>
          </div>

          <div>
            {cartData.map((item, index) => {
              const productData = products.find(
                (product) => product._id === item._id
              );
              if (!productData) return null;

              return (
                <div
                  key={index}
                  className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
                >
                  <div className="flex items-start gap-6">
                    <img
                      className="w-16 sm:w-20"
                      src={productData.image[0]}
                      alt={productData.name}
                    />
                    <div>
                      <p className="text-xs sm:text-lg">{productData.name}</p>
                      <div className="flex items-center gap-5 mt-2">
                        <p>
                          {currency}
                          {productData.price}
                        </p>
                      </div>
                    </div>
                  </div>

                  <input
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === "") {
                      
                        return;
                      }
                      const num = Number(val);
                      if (num > 0) {
                        updateQuantity(item._id, item.size, num);
                      }
                    }}
                    className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                    type="number"
                    min={1}
                    value={item.quantity}
                  />

                  <Delete
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className="w-4 mr-4 sm:w-5 cursor-pointer"
                  />
                </div>
              );
            })}
          </div>

          <div className="flex justify-end my-20">
            <div className="w-full sm:w-[450px]">
              <CartTotal />
              <div className="text-end">
                <button
                  onClick={() => alert("Proceeding to checkout...")}
                  className="bg-black text-white text-sm my-8 px-9 py-3"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
