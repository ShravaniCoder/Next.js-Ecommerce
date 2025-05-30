import React from "react";
import { useSelector } from "react-redux";
import {
  selectSubtotal,
  selectTotal,
  selectDeliveryFee,
  selectCurrency,
} from "@/redux/features/cartSlice";


const CartTotal = () => {
  const subtotal = useSelector(selectSubtotal) || 0;
  const shipping = useSelector(selectDeliveryFee) || 0;
  const total = useSelector(selectTotal) || 0;
  const currency = useSelector(selectCurrency) || "₹";

  return (
    <div className="w-full">
      <div className=" inline-flex gap-2 items-center my-2 font-bold">
        <p className="text-[#002C5A]">Cart Total</p>
        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#002C5A]"></p>
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {subtotal.toFixed(2)}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {shipping.toFixed(2)}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency} {total.toFixed(2)}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
