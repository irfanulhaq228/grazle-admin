"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { updatePageNavigation } from "@/features/features";

import { BiSolidEditAlt } from "react-icons/bi";
import { FaMoneyCheckDollar, FaCreditCard } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { PiVan } from "react-icons/pi";
import { SiHackthebox } from "react-icons/si";
import { CgNotes } from "react-icons/cg";

import Star from "@/assets/svgs/Star.svg";
import img from "@/assets/profile.jpeg";
import productOne from "@/assets/product-1.png";

const OrderDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePageNavigation("orders"));
  }, [dispatch]);
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1 bg-white rounded-[8px] shadow-sm p-[25px] m-[30px]">
          <div className="flex gap-3 lg:gap-16 md:items-center flex-col md:flex-row">
            <p className="text-[25px] font-[500]">Seller</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 items-center border border-gray-200 rounded-[8px] px-7 lg:px-10 py-7">
              <Image
                alt=""
                src={img}
                className="w-[80px] h-[80px] rounded-full col-span-2 md:col-span-1"
              />
              <div>
                <p className="text-[17px]">Patrick Thomas</p>
                <p className="text-[17px]">ID: 12345</p>
              </div>
              <p className="absolute right-20 sm:right-auto sm:relative h-[30px] w-[70px] rounded-[5px] bg-[var(--bg-color-delivered)] text-[14px] text-[var(--text-color-delivered)] font-[500] flex items-center justify-center">
                Active
              </p>
            </div>
          </div>
          <div className="pb-[15px] pt-[30px] flex justify-between flex-col sm:flex-row gap-3 border-b border-gray-200 sm:items-center">
            <p className="text-[20px] font-[500]">Order ID #123456</p>
            <div className="flex justify-end">
              <p className="h-[30px] w-[80px] rounded-[5px] bg-[var(--bg-color-delivered)] text-[14px] text-[var(--text-color-delivered)] font-[500] flex items-center justify-center">
                Delivered
              </p>
            </div>
          </div>
          <div className="mt-[20px] sm:mt-[20px] border border-gray-200 rounded-[8px] p-[20px] xl:p-[30px] flex flex-col lg:flex-row gap-5 md:gap-7 xl:gap-10 items-center">
            <div>
              <Image src={productOne} className="w-[150px] xl:w-[180px]" />
            </div>
            <div className="flex-1 flex flex-col sm:flex-row justify-between gap-5">
              <div className="flex flex-col gap-1 flex-1">
                <p className="text-[18px] sm:text-[22px] font-[600]">
                  Apple Watch Series 4 (Black, 42mm)
                </p>
                <div className="flex flex-col lg:flex-row gap-1 lg:gap-3 lg:items-center">
                  <div className="flex gap-0.5">
                    <Image alt="" src={Star} />
                    <Image alt="" src={Star} />
                    <Image alt="" src={Star} />
                    <Image alt="" src={Star} />
                    <Image alt="" src={Star} />
                  </div>
                  <p className="text-[14px] font-[400] text-[var(--text-color-body)] mt-0.5">
                    5 Review
                  </p>
                  <p className="text-[14px] text-[var(--text-color-body)] mt-0.5">
                    <span className="text-black font-[500]">SKU:</span> 2,51,594
                  </p>
                </div>
                <div className="mt-5">
                  <p className="text-[var(--text-color-body)]">
                    <span className="text-black font-[500]">
                      Shipping Address:
                    </span>{" "}
                    John Doe 123 Main Street, 4B New York, NY 10001
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1 min-w-[150px]">
                <p className="text-[14px] font-[500] text-[var(--text-color-body)] text-right">
                  May 15, 2024
                </p>
                <p className="text-[14px] font-[500] text-[var(--text-color-body)] text-right">
                  <span className="text-black">Track ID:</span>987654
                </p>
                <p className="text-[var(--text-color)] text-[20px] font-[600] text-right mt-5">
                  ₹400(1 Qty)
                </p>
                <p className="text-right text-[15px]">
                  <span className="line-through text-[var(--text-color-body)] text-[15px]">
                    ₹400
                  </span>
                  &nbsp;&nbsp;
                  <span className="font-[600] text-[#4FAD2E]">20% Off</span>
                </p>
              </div>
            </div>
          </div>
          <div className="pb-[15px] pt-[30px]">
            <p className="text-[23px] font-[500]">Description</p>
            <p className="text-[#777777] text-[17px] mt-3">
              Lorem ipsum dolor sit amet consectetur. Iaculis pretium
              suspendisse id dictum ultricies pretium posuere magna aliquam.
              Massa amet congue duis laoreet id sed hendrerit. Elementum nec
              ligula ac orci tristique morbi velit tempus arcu. Sed tortor vel
              in faucibus augue ipsum quam. Sit sit enim dui ut cras tristique
              vitae eros. Elementum non in aliquam arcu. Tellus quam quam
              laoreet arcu a. Varius a elit eget quam libero felis a scelerisque
              ipsum. Auctor pharetra egestas vel erat in ligula eget. Lorem
              ipsum dolor sit amet consectetur. Iaculis pretium suspendisse id
              dictum ultricies pretium posuere magna aliquam. Massa amet congue
              duis laoreet id sed hendrerit. Elementum nec ligula ac orci
              tristique morbi velit tempus arcu. Sed tortor vel in faucibus
              augue ipsum quam. Sit sit enim dui ut cras tristique vitae eros.
              Elementum non in aliquam arcu. Tellus quam quam laoreet arcu a.
              Varius a elit eget quam libero felis a scelerisque ipsum. Auctor
              pharetra egestas vel erat in ligula eget.
            </p>
            <div className="pt-[20px] flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-7">
              <button className="h-[50px] w-[130px] rounded-[8px] bg-[#00A1FF] text-white">
                Edit
              </button>
              <button className="h-[50px] w-[130px] rounded-[8px] bg-[#949494] text-white">
                Concel
              </button>
              <button className="h-[50px] w-[130px] rounded-[8px] bg-[#F70000] text-white">
                Return
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
