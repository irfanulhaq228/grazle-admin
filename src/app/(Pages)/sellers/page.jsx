"use client";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import SearchOnTop from "@/components/SearchOnTop";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { updatePageNavigation } from "@/features/features";

import data from "@/components/customers";
import electronicLED from "@/assets/Electronic-LED.png";
import tableAction from "@/assets/svgs/table-action.svg";
import Image from "next/image";

const Sellers = () => {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("recent");
  useEffect(() => {
    dispatch(updatePageNavigation("sellers"));
  }, [dispatch]);
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1 mt-[30px] px-[22px]">
          <SearchOnTop />
          <div className="my-[20px] p-[30px] bg-white rounded-[8px] shadow-sm overflow-x-auto w-[94vw] md:w-[67vw] lg:w-[75vw] xl:w-auto">
            <div className="flex gap-10 mb-[15px] w-[max-content]">
              <p
                className={`cursor-pointer hover:text-[var(--text-color)] font-[500] border-b-[2px] hover:border-[var(--text-color)] ${
                  selectedTab === "recent"
                    ? "text-[var(--text-color)] border-[var(--text-color)]"
                    : "text-[var(--text-color-body)] border-transparent"
                }`}
                onClick={() => setSelectedTab("recent")}
              >
                Recent
              </p>
              <p
                className={`cursor-pointer hover:text-[var(--text-color)] font-[500] border-b-[2px] hover:border-[var(--text-color)] ${
                  selectedTab === "all"
                    ? "text-[var(--text-color)] border-[var(--text-color)]"
                    : "text-[var(--text-color-body)] border-transparent"
                }`}
                onClick={() => setSelectedTab("all")}
              >
                All
              </p>
              <p
                className={`cursor-pointer hover:text-[var(--text-color)] font-[500] border-b-[2px] hover:border-[var(--text-color)] ${
                  selectedTab === "top"
                    ? "text-[var(--text-color)] border-[var(--text-color)]"
                    : "text-[var(--text-color-body)] border-transparent"
                }`}
                onClick={() => setSelectedTab("top")}
              >
                Top
              </p>
            </div>
            <table className="w-[850px] xl:w-[100%]">
              <thead>
                <tr className="font-[500] text-[var(--text-color-body)] text-[15px] h-[50px]">
                  <td>Seller Name</td>
                  <td>Email Address</td>
                  <td>Phone Number</td>
                  <td>Status</td>
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
                      Electronic LED
                    </td>
                    <td>john-due@gmail.com</td>
                    <td>+01 34555555 4</td>
                    <td className="w-[130px]">
                      <p className="h-[23px] w-[60px] rounded-[5px] bg-[var(--bg-color-delivered)] text-[10px] text-[var(--text-color-delivered)] font-[500] flex items-center justify-center">
                        Delivered
                      </p>
                    </td>
                    <td className="px-[17px] relative">
                      <Image
                        alt=""
                        src={tableAction}
                        className="cursor-pointer"
                      />
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

export default Sellers;
