"use client";

import Link from "next/link";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import Cart from "./cart";
import { useCardContext } from "../context/cardcontext";
import { useAuth } from "../context/authcontext";

export const Navbar = () => {
  const { showCart, setShowCart, cardItems } = useCardContext();
  const { user, logout } = useAuth();

  const totalItems = cardItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="w-full py-[24px] md:py-[20px] sm:py-[16px] md:px-[24px] sm:px-[16px]">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-[50px] md:text-[32px] sm:text-[24px] text-[#000] font-bold capitalize">
            shop
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          {/* Login / Logout */}
          {user ? (
            <>
              <span className="text-gray-700">Hi, {user.email}</span>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
              >
                Register
              </Link>
            </>
          )}

          {/* Cart Button */}
          <button
            className="text-[32px] cursor-pointer relative"
            onClick={() => setShowCart(!showCart)}
          >
            <CiShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 text-[12px] text-white bg-red-500 w-[20px] h-[20px] rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {showCart && <Cart />}
    </div>
  );
};
