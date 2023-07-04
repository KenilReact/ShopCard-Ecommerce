import Image from "next/image";
import React from "react";
import logo from "assets-shopcart/asset1.svg";
import payment_1 from "assets-shopcart/asset75.png";
import payment_2 from "assets-shopcart/asset76.png";
import payment_3 from "assets-shopcart/asset77.png";
import payment_4 from "assets-shopcart/asset78.png";
import payment_5 from "assets-shopcart/asset79.png";
import payment_6 from "assets-shopcart/asset80.png";
import payment_7 from "assets-shopcart/asset81.png";
import payment_8 from "assets-shopcart/asset82.png";
import become_seller from "assets-shopcart/asset83.svg";
import gift_card from "assets-shopcart/asset84.svg";
import help_center from "assets-shopcart/asset85.svg";

const Footer = () => {
  return (
    <>
      <hr/>
      <div className="footerPage my-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-5">
            <div className="shopcardDetails mx-5">
              <div className="logo">
                <Image src={logo} alt="logo" />
              </div>
              <div className="text mt-10">
                <p className="text-sm">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
              <div className="acceptedPayment mt-10">
                <p className="text-xl font-semibold">Accepted Payments</p>
              </div>
              <div className="grid grid-cols-4 mt-5">
                <div className="paymentName border border-gray-300 rounded-lg flex items-center justify-center py-2 mx-1">
                  <Image src={payment_1} alt="image" />
                </div>
                <div className="paymentName border border-gray-300 rounded-lg flex items-center justify-center py-2 mx-1">
                  <Image src={payment_2} alt="image" />
                </div>
                <div className="paymentName border border-gray-300 rounded-lg flex items-center justify-center py-2 mx-1">
                  <Image src={payment_3} alt="image" />
                </div>
                <div className="paymentName border border-gray-300 rounded-lg flex items-center justify-center py-2 mx-1">
                  <Image src={payment_4} alt="image" />
                </div>
              </div>
              <div className="grid grid-cols-4 mt-5">
                <div className="paymentName border border-gray-300 rounded-lg flex items-center justify-center py-2 mx-1">
                  <Image src={payment_5} alt="image" />
                </div>
                <div className="paymentName border border-gray-300 rounded-lg flex items-center justify-center py-2 mx-1">
                  <Image src={payment_6} alt="image" />
                </div>
                <div className="paymentName border border-gray-300 rounded-lg flex items-center justify-center py-2 mx-1">
                  <Image src={payment_7} alt="image" />
                </div>
                <div className="paymentName border border-gray-300 rounded-lg flex items-center justify-center py-2 mx-1">
                  <Image src={payment_8} alt="image" />
                </div>
              </div>
            </div>

            <div className="department mx-5">
              <div className="textDepartment">
                <p className="text-xl font-semibold">Department</p>
              </div>
              <div className="list mt-5">
                <ul>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Fashion
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Education Product
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Frozen Food
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Beverages
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Organic Grocery
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Office Supplies
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Beauty Products
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Books
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Electronics & Gadget
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Travel Accessories
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Fitness
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Sneakers
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Toys
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Furniture
                  </li>
                </ul>
              </div>
            </div>

            <div className="aboutUs mx-5">
              <div className="textDepartment">
                <p className="text-xl font-semibold">About Us</p>
              </div>
              <div className="list mt-5">
                <ul>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    About Shopcart
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Careers
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    News & Blog
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Help
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Press Center
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Shop By Location
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Shopcart Brands
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Affiliate & Partners
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Ideas & Guides
                  </li>
                </ul>
              </div>
            </div>

            <div className="services mx-5">
              <div className="textDepartment">
                <p className="text-xl font-semibold">Services</p>
              </div>
              <div className="list mt-5">
                <ul>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Gift Card
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Mobile App
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Shipping & Delivery
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Order Pickup
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Account Signup
                  </li>
                </ul>
              </div>
            </div>

            <div className="help mx-5">
              <div className="textDepartment">
                <p className="text-xl font-semibold">Help</p>
              </div>
              <div className="list mt-5">
                <ul>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Shopcart Help
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Returns
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Track Orders
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Contact Us
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Feedback
                  </li>
                  <li className="text-sm my-2 hover:text-red-400 hover:ps-3 duration-150">
                    Security & Fraud
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-10" />
          <div className="footerTeams">
            <div className="footerMenu flex justify-around">
              <div className="desk flex">
                <div className="becomeSeller flex">
                  <Image src={become_seller} alt="image" />
                  <p className="font-medium ms-2 hover:text-red-400">
                    Become Seller
                  </p>
                </div>
                <div className="becomeSeller flex ms-5">
                  <Image src={gift_card} alt="image" />
                  <p className="font-medium ms-2 hover:text-red-400">
                    Gift Card
                  </p>
                </div>
                <div className="becomeSeller flex ms-5">
                  <Image src={help_center} alt="image" />
                  <p className="font-medium ms-2 hover:text-red-400">
                    Help Center
                  </p>
                </div>
              </div>

                <div className="teams">
                  <p className="hover:text-red-400">Terms of Service</p>
                </div>
                <div className="privacy">
                  <p className="hover:text-red-400">Privacy & Policy</p>
                </div>

                <div className="copyRight">
                  <p>All Right reserved by Musemind | 2022</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
