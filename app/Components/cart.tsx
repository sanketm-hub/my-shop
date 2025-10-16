"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineLeft } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import { useCardContext } from "../context/cardcontext";
import { urlFor } from "@/sanity/lib/image";

const Cart = () => {
  const { showCart, setShowCart, cardItems, removeItem, increaseQty, decreaseQty } =
    useCardContext();

  // 👇 Calculate subtotal
  const subtotal = cardItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className={`cart-wrapper ${showCart ? "block" : "hidden"}`}>
      <div className="max-w-[1280px] mx-auto float-right bg-white w-[600px] h-[100vh] shadow-lg p-4 overflow-y-auto flex flex-col">
        <button
          className="flex gap-4 items-center mb-4"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="text-xl">Your cart</span>
          <span className="text-xl">{cardItems.length}</span>
        </button>

        {cardItems.length > 0 ? (
          <>
            <div className="space-y-4 flex-1">
              {cardItems.map((product) => (
                <div
                  key={product._id}
                  className="flex gap-4 items-center border-b pb-4"
                >
                  <Image
                    src={
                      product.image?.[0]
                        ? urlFor(product.image[0]).url()
                        : "/placeholder.png"
                    }
                    alt={product.name}
                    width={100}
                    height={100}
                    className="object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold">{product.name}</h3>
                    <p>${product.price}</p>

                    <div className="flex items-center gap-2 border border-black py-1 px-2 rounded mt-2 w-fit">
                      <button onClick={() => decreaseQty(product._id)}>-</button>
                      <span className="px-2">{product.quantity}</span>
                      <button onClick={() => increaseQty(product._id)}>+</button>
                    </div>
                  </div>

                  <button onClick={() => removeItem(product._id)}>
                    <TiDelete className="text-red-500 text-2xl" />
                  </button>
                </div>
              ))}
            </div>

            {/* 👇 Subtotal Section */}
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                Checkout
              </button>
            </div>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </section>
  );
};

export default Cart;
