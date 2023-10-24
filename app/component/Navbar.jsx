"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "assets-shopcart/asset1.svg";
import { MdOutlineCall } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import account_image from "assets-shopcart/asset13.png";
import cart_image from "assets-shopcart/asset14.png";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="bg-green-900 p-2">
        <div className="container mx-auto">
          <div className="head flex justify-between">
            <div className="contact">
              <p className="text-white flex items-center text-sm">
                <MdOutlineCall className="mx-2 text-lg" />
                +0123456789
              </p>
            </div>
            <div className="offer_shop flex text-sm">
              <p className="text-white">Get 50% off on Selected Items</p>
              <p className="text-white mx-2">|</p>
              <p className="text-white">Shop Now</p>
            </div>
            <div className="traslate_country lg:flex text-sm xs:hidden">
              <p className="text-white mx-2">English</p>
              <p className="text-white mx-2">India</p>
            </div>
          </div>
        </div>
      </nav>

      <nav className="bg-white p-5 relative">
        <div className="container mx-auto">
          <div className="navbar flex items-center justify-between">
            <div className="logo cursor-pointer">
              <Image src={logo} alt="logo" />
            </div>
            <div className="menu ms-4 xs:hidden lg:inline-block">
              <ul className="flex text-lg font-medium">
                <li className="mx-3 cursor-pointer">Category</li>
                <li className="mx-3 cursor-pointer">Deals</li>
                <li className="mx-3 cursor-pointer">What's New</li>
                <li className="mx-3 cursor-pointer">Delivery</li>
              </ul>
            </div>
            <div className="search ">
              <form className="flex items-center">
                <div className="search-input relative flex items-center justify-end">
                  <button className="absolute">
                    <MdOutlineSearch className="text-2xl mx-2" />
                  </button>
                  <input
                    type="text"
                    className="text-sm border border-gray-400 rounded-full px-3 py-2 xl:w-72 lg:w-44"
                    placeholder="Search Product"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center xs:hidden lg:inline-flex">
              <div className="account flex items-center ">
                <Image src={account_image} alt="image" className="mx-2" />
                <p className="text-lg font-medium hover:text-orange-400 cursor-pointer">
                  Account
                </p>
              </div>
              <div className="cart flex items-center">
                <Image src={cart_image} alt="image" className="mx-2   " />
                <p className="text-lg font-medium hover:text-orange-400 cursor-pointer">
                  Cart
                </p>
              </div>
            </div>

            <div className="menu lg:hidden md:inline-block">
              <BiMenu
                className="text-3xl"
                onClick={() => setIsMenuOpen(true)}
              />
            </div>

            {isMenuOpen === true ? (
              <div className="main absolute w-56 right-0 h-screen bg-[#709595] top-0 z-50">
                <div className="menuList ">
                  <MdClose
                    className="text-2xl text-white ms-auto m-5"
                    onClick={() => setIsMenuOpen(false)}
                  />
                  <ul className="text-white mt-5 text-lg font-medium">
                    <li className="mx-3 cursor-pointer">Category</li>
                    <li className="mx-3 cursor-pointer">Deals</li>
                    <li className="mx-3 cursor-pointer">What's New</li>
                    <li className="mx-3 cursor-pointer">Delivery</li>
                  </ul>
                </div>
                <div className="">
                  <div className="account flex items-center ">
                    <Image src={account_image} alt="image" className="mx-2 " />
                    <p className="text-lg font-medium text-white hover:text-orange-400 cursor-pointer">
                      Account
                    </p>
                  </div>
                  <div className="cart flex items-center">
                    <Image src={cart_image} alt="image" className="mx-2   " />
                    <p className="text-lg font-medium text-white hover:text-orange-400 cursor-pointer">
                      Cart
                    </p>
                  </div>
                </div>
              </div>
            ) : null}

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
