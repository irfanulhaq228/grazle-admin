"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { FaRegEyeSlash } from "react-icons/fa";

import loginBg from "../assets/login-bg.png";
import loginImg from "../assets/login-img.png";
import grazleLogo from "../assets/grazle-logo.png";

import emailSvg from "../assets/svgs/email-svg.svg";
import passwordSvg from "../assets/svgs/password-svg.svg";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col xl:flex-row items-center">
      <div
        className="xl:w-[45%] my-[25px] w-[95%] xl:ms-[25px] relative flex flex-col justify-between items-center p-[25px] rounded-[20px]"
        style={{ backgroundImage: "linear-gradient(#FF781E, #FDC197)" }}
      >
        <div className="mt-10">
          <p className="text-[30px] font-[600] text-white">
            Discover endless possibilities
          </p>
          <p className="text-[60px] font-[600] text-white mt-7">
            Explore, buy, and sell with our vibrant marketplace!"
          </p>
        </div>
        <Image src={loginImg} className="w-[400px] mb-[-50px]" />
      </div>
      <div className="w-full xl:w-[55%] flex flex-col items-center py-[50px] justify-center">
        <Image src={grazleLogo} className="w-[200px]" />
        <p className="text-[40px] font-[700] text-center mt-[25px]">
          Welcome Back
        </p>
        <p className="text-[var(--text-color-body)] font-[600] text-center mb-[25px]">
          Please log into your account
        </p>
        <div className="flex flex-col gap-5 w-[400px]">
          <div className="bg-[#F5F7F9] flex items-center h-[60px] w-[100%] rounded-[11px] px-5 gap-5">
            <Image src={emailSvg} />
            <input
              className="flex-1 focus:outline-none bg-transparent font-[500] text-[15px]"
              placeholder="Email Address"
            />
          </div>
          <div className="bg-[#F5F7F9] flex items-center h-[60px] w-[100%] rounded-[11px] px-5 gap-5">
            <Image src={passwordSvg} />
            <input
              type="password"
              className="flex-1 focus:outline-none bg-transparent font-[500] text-[15px]"
              placeholder="Password"
            />
            <FaRegEyeSlash />
          </div>
          <div className="flex justify-between items-center">
            <div className="text-[var(--text-color-body)] flex gap-3 items-center">
              <input type="checkbox" />
              <label>Remeber me!</label>
            </div>
            <p className="text-[var(--text-color)] font-[500]">
              Forgot Password ?
            </p>
          </div>
          <input
            type="submit"
            value={"Sign In"}
            className="bg-[var(--text-color)] text-white rounded-[11px] h-[60px] font-[500] cursor-pointer"
            onClick={() => router.push("/dashboard")}
          />
        </div>
        <div className="flex items-center justify-center w-[400px] gap-5 mt-[25px]">
          <div className="border flex-1"></div>
          <p className="text-[var(--text-color-body)]">or log in with</p>
          <div className="border flex-1"></div>
        </div>
        <div className="flex w-[400px] mt-[25px] gap-5">
          <button className="flex-1 bg-gray-100 h-[60px] rounded-[11px] font-[500]">
            Log in with Apple
          </button>
          <button className="flex-1 bg-gray-100 h-[60px] rounded-[11px] font-[500]">
            Log in with Google
          </button>
        </div>
        <p className="text-center font-[500] text-[var(--text-color-body)] mt-[35px]">
          Don't Have an Account?{" "}
          <span className="text-[var(--text-color)]">Sign Up</span>
        </p>
      </div>
    </main>
  );
}
