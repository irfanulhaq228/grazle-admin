"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import SearchOnTop from "@/components/SearchOnTop";
import { updatePageNavigation } from "@/features/features";

import data from "@/components/customers";
import electronicLED from "@/assets/Electronic-LED.png";
import tableAction from "@/assets/svgs/table-action.svg";
import { IoEye } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Customers = () => {
  const dispatch = useDispatch();
  const [selectedCustomer, setSelectedCustomer] = useState(0);
  useEffect(() => {
    dispatch(updatePageNavigation("customers"));
  }, [dispatch]);
  const fn_viewDetails = (id) => {
    if (id === selectedCustomer) {
      return setSelectedCustomer(0);
    }
    setSelectedCustomer(id);
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1 mt-[30px] px-[10px] sm:px-[22px]">
          <SearchOnTop />
          <div className="my-[20px] px-[30px] py-[20px] bg-white rounded-[8px] shadow-sm overflow-x-auto w-[94vw] md:w-[67vw] lg:w-[75vw] xl:w-auto">
            <table
              className={`w-[850px] xl:w-[100%] ${
                selectedCustomer !== 0 && "mb-[40px]"
              }`}
            >
              <thead>
                <tr className="font-[500] text-[var(--text-color-body)] text-[15px] h-[50px]">
                  <td>Name</td>
                  <td>Email Address</td>
                  <td>Phone Number</td>
                  <td className="w-[80px]">Action</td>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => (
                  <tr key={item.id} className="h-[50px] text-[14px]">
                    <td className="flex items-center gap-1.5 h-[50px]">
                      <Image
                        alt=""
                        src={electronicLED}
                        className="h-[26px] w-[26px]"
                      />
                      John Due
                    </td>
                    <td>john-due@gmail.com</td>
                    <td>+01 34555555 4</td>
                    <td className="px-[17px] relative">
                      <Image
                        alt=""
                        src={tableAction}
                        className="cursor-pointer"
                        onClick={() => fn_viewDetails(item.id)}
                      />
                      {selectedCustomer === item.id && <ViewDetails />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;

const ViewDetails = () => {
  return (
    <div className="absolute py-[10px] px-[10px] flex flex-col items-center text-[var(--text-color-body)] bg-white rounded-[8px] shadow-md border border-gray-100 w-[max-content] left-[-145px] top-[13px] cursor-pointer z-[999]">
      <div className="flex items-center gap-2.5 w-full px-2 py-1.5 hover:bg-gray-100 rounded-sm">
        <IoEye className="w-[20px] h-[20px]" />
        <p className="text-[14px]">Enable</p>
      </div>
      <div className="flex items-center gap-2.5 w-full px-2 py-1.5 hover:bg-gray-100 rounded-sm">
        <RiDeleteBin6Fill className="w-[20px] h-[20px]" />
        <p className="text-[14px]">Disable</p>
      </div>
    </div>
  );
};
