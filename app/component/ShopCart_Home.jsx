import Image from "next/image";
import React from "react";
import home_bg_image from "assets-shopcart/asset86.png";
import banner_bg_image from "assets-shopcart/asset15.png";
import banner_bg_product_1 from "assets-shopcart/asset16.png";
import se_1_product_1 from "assets-shopcart/asset20.png";
import se_1_product_2 from "assets-shopcart/asset21.png";
import se_1_product_3 from "assets-shopcart/asset22.png";
import se_1_product_4 from "assets-shopcart/asset23.png";
import se_1_product_5 from "assets-shopcart/asset24.png";
import se_1_product_6 from "assets-shopcart/asset25.png";
import { AiOutlineStar } from "react-icons/ai";
import se_2_product_1 from "assets-shopcart/asset26.png";
import se_2_product_2 from "assets-shopcart/asset29.png";
import se_2_product_3 from "assets-shopcart/asset30.png";
import se_3_brand_1 from "assets-shopcart/asset34.png";
import se_3_brand_2 from "assets-shopcart/asset35.png";
import se_3_brand_3 from "assets-shopcart/asset36.png";
import se_3_brand_4 from "assets-shopcart/asset37.png";
import se_3_brand_5 from "assets-shopcart/asset38.png";
import se_3_brand_6 from "assets-shopcart/asset39.png";
import se_3_brand_7 from "assets-shopcart/asset40.png";
import se_3_brand_8 from "assets-shopcart/asset41.png";
import se_4_product_1 from "assets-shopcart/asset42.png";
import se_4_product_2 from "assets-shopcart/asset43.png";
import se_4_product_3 from "assets-shopcart/asset44.png";
import se_4_product_4 from "assets-shopcart/asset45.png";
import AnimatedCursor from "react-animated-cursor";
import sec_5_product_1 from "assets-shopcart/asset32.png";
import sec_5_product_2 from "assets-shopcart/asset30.png";
import sec_5_product_3 from "assets-shopcart/asset33.png";
import sec_6_bgImage from "assets-shopcart/asset61.png";

const ShopCart_Home = () => {
  const todayDeals = [
    {
      id: 1,
      image: se_2_product_1,
      name: "HomePod mini",
      price: "239",
      dis: "Table with air purifier, stained veneer/black",
    },
    {
      id: 2,
      image: se_2_product_2,
      name: "Instax Mini 9",
      price: "99",
      dis: "Table with air purifier, stained veneer/black",
    },
    {
      id: 3,
      image: se_2_product_3,
      name: "Base Camp Duffel M",
      price: "159",
      dis: "Table with air purifier, stained veneer/black",
    },
  ];

  const weeklyProduct = [
    {
      id: 1,
      image: sec_5_product_1,
      name: "Gaming Headphone",
      price: "239",
      dis: "Table with air purifier, stained veneer/black",
    },
    {
      id: 2,
      image: sec_5_product_2,
      name: "Base Camp Duffel M",
      price: "159",
      dis: "Table with air purifier, stained veneer/black",
    },
    {
      id: 3,
      image: sec_5_product_3,
      name: "Tomford Watch",
      price: "39",
      dis: "Table with air purifier, stained veneer/black",
    },
  ];

  return (
    <>
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      /> */}
      {/* Banner Section */}
      <div className="shopCart_home">
        <div className="banner-section relative flex items-center">
          <div className=" banner-text absolute xl:ms-72 xs:ms-10 sm:ms-20 lg:ms-40">
            <h1 className=" sm:text-6xl font-bold text-green-900 my-10 xs:text-4xl">
              Shopping And <br />
              Department Store.
            </h1>
            <p className="sm:text-2xl my-10 xs:text-xl">
              Shopping is a bit of a relaxing hobby for me, which is
              <br /> sometimes troubling for the bank balance.
            </p>
            <button className="text-lg rounded-full bg-green-900 text-white px-6 py-3 my-5 hover:bg-black duration-200">
              Learn More
            </button>
          </div>

          <Image src={home_bg_image} alt="image" className="w-full h-[650px]" />
        </div>
      </div>

      {/* Section-1 */}
      <div className="section-1 my-20 mx-3">
        <div className="container mx-auto">
          <div className="title-Text">
            <h1 className="text-2xl font-semibold">Shop Our Top Categories</h1>
          </div>
          <div className="grid xl:grid-cols-6 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            <div className="product-cart pt-14 flex justify-center overflow-hidden">
              <div className="text absolute z-10 mt-5">
                <p className="text-2xl text-white font-semibold">Furniture</p>
              </div>
              <div className="image rounded-xl overflow-hidden ">
                <Image
                  src={se_1_product_1}
                  alt="image"
                  className="bg-image hover:scale-125 duration-300"
                />
              </div>
            </div>

            <div className="product-cart pt-14 flex justify-center overflow-hidden">
              <div className="text absolute z-10 mt-5">
                <p className="text-2xl text-white font-semibold">Hand Bag</p>
              </div>
              <div className="image rounded-xl overflow-hidden ">
                <Image
                  src={se_1_product_2}
                  alt="image"
                  className="bg-image hover:scale-125 duration-300"
                />
              </div>
            </div>

            <div className="product-cart pt-14 flex justify-center overflow-hidden">
              <div className="text absolute z-10 mt-5">
                <p className="text-2xl text-white font-semibold">Books</p>
              </div>
              <div className="image rounded-xl overflow-hidden ">
                <Image
                  src={se_1_product_3}
                  alt="image"
                  className="bg-image hover:scale-125 duration-300"
                />
              </div>
            </div>

            <div className="product-cart pt-14 flex justify-center overflow-hidden">
              <div className="text absolute z-10 mt-5">
                <p className="text-2xl text-white font-semibold">Tech</p>
              </div>
              <div className="image rounded-xl overflow-hidden ">
                <Image
                  src={se_1_product_4}
                  alt="image"
                  className="bg-image hover:scale-125 duration-300"
                />
              </div>
            </div>

            <div className="product-cart pt-14 flex justify-center overflow-hidden">
              <div className="text absolute z-10 mt-5">
                <p className="text-2xl text-white font-semibold">Sneakers</p>
              </div>
              <div className="image rounded-xl overflow-hidden ">
                <Image
                  src={se_1_product_5}
                  alt="image"
                  className="bg-image hover:scale-125 duration-300"
                />
              </div>
            </div>

            <div className="product-cart pt-14 flex justify-center overflow-hidden">
              <div className="text absolute z-10 mt-5">
                <p className="text-2xl text-white font-semibold">Travel</p>
              </div>
              <div className="image rounded-xl overflow-hidden ">
                <Image
                  src={se_1_product_6}
                  alt="image"
                  className="bg-image hover:scale-125 duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section-2 */}
      <div className="section-2 my-10 mx-3">
        <div className="container mx-auto">
          <div className="title-Text">
            <h1 className="text-2xl font-semibold">
              Todays Best Deals For You!
            </h1>
          </div>

          <div className="grid grid-cols-3 xs:grid-cols-2 lg:grid-cols-3">
            {todayDeals.map((todayData, i) => {
              return (
                <div className="section-2_product my-10 mx-2" key={i}>
                  <div className="sec_2-image bg-slate-100 rounded-xl flex justify-center">
                    <Image
                      src={todayData.image}
                      alt="image"
                      className="hover:scale-125 duration-200"
                    />
                  </div>
                  <div className="product_name-price flex justify-between px-5 py-2 mt-2 xs:flex-col">
                    <h1 className="text-xl font-semibold">{todayData.name}</h1>
                    <p className="text-lg font-semibold xs:my-3">
                      <sup>$</sup>
                      {todayData.price}
                      <sup>.00</sup>
                    </p>
                  </div>
                  <div className="product-dis px-5 py-2">
                    <p className="text-sm">{todayData.dis}</p>
                    <AiOutlineStar className="my-2" />
                  </div>
                  <div className="addToCartButton px-5 py-2">
                    <button className="text-lg font-medium border border-black rounded-full px-4 py-2">
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <hr />

      {/* Section-3 */}
      <div className="section-3 my-10 mx-3">
        <div className="container mx-auto">
          <div className="chooseText">
            <h1 className="text-2xl font-semibold">Choose By Brand</h1>
          </div>
          <div className="grid xl:grid-cols-4 mt-10 xs:grid-cols-2 xs:gap-3 lg:grid-cols-3">
            <div className="brand-1 flex items-center bg-gray-100 p-5 rounded-xl">
              <div className="brandImage">
                <Image
                  src={se_3_brand_1}
                  alt="image"
                  className="hover:scale-125 duration-200"
                />
              </div>
              <div className="brandData ms-5">
                <h1 className="text-xl font-medium">Staples</h1>
                <p className="text-sm">Delivery with in 24 hours</p>
              </div>
            </div>

            <div className="brand-2 flex items-center bg-gray-100 p-5 rounded-xl">
              <div className="brandImage">
                <Image
                  src={se_3_brand_2}
                  alt="image"
                  className="hover:scale-125 duration-200"
                />
              </div>
              <div className="brandData ms-5">
                <h1 className="text-xl font-medium">Sprouts</h1>
                <p className="text-sm">Delivery with in 24 hours</p>
              </div>
            </div>

            <div className="brand-3 flex items-center bg-gray-100 p-5 rounded-xl">
              <div className="brandImage">
                <Image
                  src={se_3_brand_3}
                  alt="image"
                  className="hover:scale-125 duration-200"
                />
              </div>
              <div className="brandData ms-5">
                <h1 className="text-xl font-medium">Grocery outlet</h1>
                <p className="text-sm">Delivery with in 24 hours</p>
              </div>
            </div>

            <div className="brand-4 flex items-center bg-gray-100 p-5 rounded-xl">
              <div className="brandImage">
                <Image
                  src={se_3_brand_4}
                  alt="image"
                  className="hover:scale-125 duration-200"
                />
              </div>
              <div className="brandData ms-5">
                <h1 className="text-xl font-medium">Mollie stones</h1>
                <p className="text-sm">Delivery with in 24 hours</p>
              </div>
            </div>

            <div className="brand-5 flex items-center bg-gray-100 p-5 rounded-xl">
              <div className="brandImage">
                <Image
                  src={se_3_brand_5}
                  alt="image"
                  className="hover:scale-125 duration-200"
                />
              </div>
              <div className="brandData ms-5">
                <h1 className="text-xl font-medium">Staples</h1>
                <p className="text-sm">Delivery with in 24 hours</p>
              </div>
            </div>

            <div className="brand-6 flex items-center bg-gray-100 p-5 rounded-xl">
              <div className="brandImage">
                <Image
                  src={se_3_brand_6}
                  alt="image"
                  className="hover:scale-125 duration-200"
                />
              </div>
              <div className="brandData ms-5">
                <h1 className="text-xl font-medium">Sprouts</h1>
                <p className="text-sm">Delivery with in 24 hours</p>
              </div>
            </div>

            <div className="brand-7 flex items-center bg-gray-100 p-5 rounded-xl">
              <div className="brandImage">
                <Image
                  src={se_3_brand_7}
                  alt="image"
                  className="hover:scale-125 duration-200"
                />
              </div>
              <div className="brandData ms-5">
                <h1 className="text-xl font-medium">Grocery outlet</h1>
                <p className="text-sm">Delivery with in 24 hours</p>
              </div>
            </div>

            <div className="brand-8 flex items-center bg-gray-100 p-5 rounded-xl">
              <div className="brandImage">
                <Image
                  src={se_3_brand_8}
                  alt="image"
                  className="hover:scale-125 duration-200"
                />
              </div>
              <div className="brandData ms-5">
                <h1 className="text-xl font-medium">Mollie stones</h1>
                <p className="text-sm">Delivery with in 24 hours</p>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Section-4 */}
      <div className="section-4 mt-20 my-10 mx-3">
        <div className="container mx-auto">
          <div className="title-Text">
            <h1 className="text-2xl font-semibold">Get Up To 70% Off</h1>
          </div>

          <div className="saveProduct mt-10">
            <div className="grid grid-cols-4 xs:grid-cols-2 xs:gap-4 lg:grid-cols-4">
              <div className="productDetails bg-[#f2e4d9] rounded-xl overflow-hidden">
                <div className="text p-5">
                  <p className="text-xl font-semibold">Save</p>
                  <div className="price flex">
                    <h1 className="text-[#cb9917] text-3xl font-semibold">$</h1>
                    <h1 className="text-[#cb9917] text-5xl font-semibold">
                      100
                    </h1>
                  </div>
                  <p className=" font-medium mt-4">
                    Explore Our Furniture & Home Furnishing Range
                  </p>
                </div>
                <div className="image overflow-hidden">
                  <Image
                    src={se_4_product_1}
                    alt="image"
                    className="w-full hover:scale-110 duration-150"
                  />
                </div>
              </div>

              <div className="productDetails bg-[#f9dcdc] rounded-xl overflow-hidden">
                <div className="text p-5">
                  <p className="text-xl font-semibold">Save</p>
                  <div className="price flex">
                    <h1 className="text-[#cb9917] text-3xl font-semibold">$</h1>
                    <h1 className="text-[#cb9917] text-5xl font-semibold">
                      29
                    </h1>
                  </div>
                  <p className=" font-medium mt-4">
                    Explore Our Furniture & Home Furnishing Range
                  </p>
                </div>
                <div className="image overflow-hidden">
                  <Image
                    src={se_4_product_2}
                    alt="image"
                    className="w-full hover:scale-110 duration-150"
                  />
                </div>
              </div>

              <div className="productDetails bg-[#f2e4d9] rounded-xl overflow-hidden">
                <div className="text p-5">
                  <p className="text-xl font-semibold">Save</p>
                  <div className="price flex">
                    <h1 className="text-[#cb9917] text-3xl font-semibold">$</h1>
                    <h1 className="text-[#cb9917] text-5xl font-semibold">
                      67
                    </h1>
                  </div>
                  <p className="font-medium mt-4">
                    Explore Our Furniture & Home Furnishing Range
                  </p>
                </div>
                <div className="image overflow-hidden">
                  <Image
                    src={se_4_product_3}
                    alt="image"
                    className="w-full hover:scale-110 duration-150"
                  />
                </div>
              </div>

              <div className="productDetails bg-[#d2f7ec] rounded-xl overflow-hidden">
                <div className="text p-5">
                  <p className="text-xl font-semibold">Save</p>
                  <div className="price flex">
                    <h1 className="text-[#cb9917] text-3xl font-semibold">$</h1>
                    <h1 className="text-[#cb9917] text-5xl font-semibold">
                      59
                    </h1>
                  </div>
                  <p className="font-medium mt-4">
                    Explore Our Furniture & Home Furnishing Range
                  </p>
                </div>
                <div className="image overflow-hidden">
                  <Image
                    src={se_4_product_4}
                    alt="image"
                    className="w-full hover:scale-110 duration-150"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section-5 */}
      <div className="section-5 my-14 mx-3">
        <div className="container mx-auto">
          <div className="title-Text">
            <h1 className="text-2xl font-semibold">Weekly Popular Products</h1>
          </div>

          <div className="grid grid-cols-3 xs:grid-cols-2 lg:grid-cols-3">
            {weeklyProduct.map((data, i) => {
              return (
                <div className="section-2_product my-10 mx-2" key={i}>
                  <div className="sec_2-image bg-slate-100 rounded-xl flex justify-center">
                    <Image
                      src={data.image}
                      alt="image"
                      className="hover:scale-125 duration-200"
                    />
                  </div>
                  <div className="product_name-price flex justify-between px-5 py-2 mt-2 xs:flex-col">
                    <h1 className="text-xl font-semibold">{data.name}</h1>
                    <p className="text-lg font-semibold xs:my-2">
                      <sup>$</sup>
                      {data.price}
                      <sup>.00</sup>
                    </p>
                  </div>
                  <div className="product-dis px-5 py-2">
                    <p className="text-sm">{data.dis}</p>
                    <AiOutlineStar className="my-2" />
                  </div>
                  <div className="addToCartButton px-5 py-2">
                    <button className="text-lg font-medium border border-black rounded-full px-4 py-2">
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section-6 */}
      <div className="section-6 my-10 w-full relative">
        <div className="absolute z-50 bg-[#003d29] w-[500px] p-16 top-60 right-48 bottom-auto ">
          <div className="info text-white">
            <h2 className="text-6xl font-bold">Get 5% Cash Back On $200</h2>
            <p className="text-2xl my-5">Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
            <button className="text-lg border rounded-full px-7 py-3">Learn More</button>
          </div>
        </div>
        <div className="conatiner mx-auto ">
          <div className="bg-image ">
            <Image src={sec_6_bgImage} alt="image" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCart_Home;
