"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "@/components/navbar";
import { updatePageNavigation } from "@/features/features";

import SearchOnTop from "@/components/SearchOnTop";
import Sidebar from "@/components/sidebar";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePageNavigation("products"));
  }, [dispatch]);
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1 mt-[30px] px-[22px]">
          <SearchOnTop />
          <div className="flex flex-col lg:flex-row gap-[20px] mt-[20px]">
            <LeftSection />
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
