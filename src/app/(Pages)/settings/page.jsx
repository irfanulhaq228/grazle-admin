"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { updatePageNavigation } from "@/features/features";

const Settings = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePageNavigation("settings"));
  }, [dispatch]);
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1 mt-[30px] px-[22px]">
          <div className="bg-white rounded-[8px] p-[10px] sm:p-[25px] shadow-sm flex flex-col lg:flex-row gap-[10px] sm:gap-[25px]">
            <div className="border border-gray-200 rounded-[8px] p-[20px] flex-1">
              <p className="text-[18px] sm:text-[20px] font-[500] text-[#777777]">
                Edit Profile
              </p>
              <div className="flex flex-col gap-1 text-[#777777] mt-[15px]">
                <label>Your Name</label>
                <input
                  className="focus:outline-none h-[45px] border border-gray-200 px-3 rounded-[8px] text-[15px] w-[100%]"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col gap-1 text-[#777777] mt-[15px]">
                <label>Email Address</label>
                <input
                  className="focus:outline-none h-[45px] border border-gray-200 px-3 rounded-[8px] text-[15px] w-[100%]"
                  placeholder="john_du@gmail.com"
                />
              </div>
            </div>
            <div className="border border-gray-200 rounded-[8px] p-[20px] flex-1">
              <p className="text-[18px] sm:text-[20px] font-[500] text-[#777777]">
                Change Password
              </p>
              <div className="flex flex-col gap-1 text-[#777777] mt-[15px]">
                <label>Change Password</label>
                <input
                  className="focus:outline-none h-[45px] border border-gray-200 px-3 rounded-[8px] text-[15px] w-[100%]"
                  placeholder="*******"
                  type="password"
                />
              </div>
              <div className="flex flex-col gap-1 text-[#777777] mt-[15px]">
                <label>New Password</label>
                <input
                  className="focus:outline-none h-[45px] border border-gray-200 px-3 rounded-[8px] text-[15px] w-[100%]"
                  placeholder="*******"
                  type="password"
                />
              </div>
              <div className="flex flex-col gap-1 text-[#777777] mt-[15px]">
                <label>Confirm Password</label>
                <input
                  className="focus:outline-none h-[45px] border border-gray-200 px-3 rounded-[8px] text-[15px] w-[100%]"
                  placeholder="*******"
                  type="password"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
