"use client";

import "react-circular-progressbar/dist/styles.css";
import React, { useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

import { GoDotFill } from "react-icons/go";
import { FaArrowUp } from "react-icons/fa6";

import salesIcon from "@/assets/svgs/dashboard-sales.svg";
import ordersIcon from "@/assets/svgs/dashboard-orders.svg";
import revenueIcon from "@/assets/svgs/dashboard-revenue.svg";
import returnIcon from "@/assets/svgs/dashboard-return.svg";
import dashboardTableImg from "@/assets/svgs/dashboard-table-img.svg";

import productOne from "@/assets/dashboard-product-1.png";
import productTwo from "@/assets/dashboard-product-2.png";
import productThree from "@/assets/dashboard-product-3.png";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { useDispatch } from "react-redux";
import { updatePageNavigation } from "@/features/features";
import { FaArrowDown } from "react-icons/fa";
import Section1 from "./Section1";
import Section3 from "./Section3";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePageNavigation("dashboard"));
  }, [dispatch]);
  const data = {
    labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Order",
        data: [5300, 5200, 9300, 13500, 5300, 10200, 1200, 7100],
        backgroundColor: "#00A1FF",
        borderRadius: 5,
      },
      {
        label: "Revenue",
        data: [4500, 4000, 9300, 15000, 4000, 11000, 2000, 8000],
        backgroundColor: "#06E775",
        borderRadius: 5,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1 mt-[30px] p-[10px] sm:px-[25px]">
          <Section1 />
          <Section3 />
          {/* all data in notepad */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
