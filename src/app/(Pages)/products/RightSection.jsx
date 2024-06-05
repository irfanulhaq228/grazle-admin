import Image from "next/image";
import React from "react";

import product from "@/assets/Electronic-LED.png";

const RightSection = () => {
  return (
    <div className="bg-white rounded-[8px] shadow-sm p-[20px] flex-1">
      <p className="text-[24px] font-[600]">Recent Stock</p>
      <div className="w-[78vw] sm:w-[85vw] md:w-[63vw] lg:w-[48vw] xl:w-full overflow-x-auto">
        <table className="w-[610px] xl:w-[100%]">
          <thead>
            <tr className="text-[var(--text-color-body)] font-[500] text-[15px] leading-[45px]">
              <td>Product Name</td>
              <td>Seller Name</td>
              <td>Stock</td>
              <td>Price</td>
              <td>Category</td>
            </tr>
          </thead>
          <tbody>
            <tr className="text-[14px] leading-[35px]">
              <td className="h-[100%] flex gap-1 items-center">
                <Image alt="" src={product} />
                <label>Electronic LED</label>
              </td>
              <td>John Due</td>
              <td>
                <p className="h-[28px] w-[75px] rounded-[5px] bg-[var(--bg-color-delivered)] text-[10px] text-[var(--text-color-delivered)] font-[500] flex items-center justify-center">
                  12 in Stock
                </p>
              </td>
              <td>$11.00</td>
              <td>Electronic</td>
            </tr>
            <tr className="text-[14px] leading-[35px]">
              <td className="h-[100%] flex gap-1 items-center">
                <Image alt="" src={product} />
                <label>Electronic LED</label>
              </td>
              <td>John Due</td>
              <td>
                <p className="h-[28px] w-[75px] rounded-[5px] bg-[var(--bg-color-delivered)] text-[10px] text-[var(--text-color-delivered)] font-[500] flex items-center justify-center">
                  Delivered
                </p>
              </td>
              <td>$11.00</td>
              <td>Electronic</td>
            </tr>
            <tr className="text-[14px] leading-[30px]">
              <td className="h-[100%] flex gap-1 items-center">
                <Image alt="" src={product} />
                <label>Electronic LED</label>
              </td>
              <td>John Due</td>
              <td>
                <p className="h-[28px] w-[75px] rounded-[5px] bg-[var(--bg-color-cancelled)] text-[10px] text-[var(--text-color)] font-[500] flex items-center justify-center">
                  Out of Stock
                </p>
              </td>
              <td>$11.00</td>
              <td>Electronic</td>
            </tr>
            <tr className="text-[14px] leading-[35px]">
              <td className="h-[100%] flex gap-1 items-center">
                <Image alt="" src={product} />
                <label>Electronic LED</label>
              </td>
              <td>John Due</td>
              <td>
                <p className="h-[28px] w-[75px] rounded-[5px] bg-[var(--bg-color-delivered)] text-[10px] text-[var(--text-color-delivered)] font-[500] flex items-center justify-center">
                  12 in Stock
                </p>
              </td>
              <td>$11.00</td>
              <td>Electronic</td>
            </tr>
            <tr className="text-[14px] leading-[35px]">
              <td className="h-[100%] flex gap-1 items-center">
                <Image alt="" src={product} />
                <label>Electronic LED</label>
              </td>
              <td>John Due</td>
              <td>
                <p className="h-[28px] w-[75px] rounded-[5px] bg-[var(--bg-color-delivered)] text-[10px] text-[var(--text-color-delivered)] font-[500] flex items-center justify-center">
                  Delivered
                </p>
              </td>
              <td>$11.00</td>
              <td>Electronic</td>
            </tr>
            <tr className="text-[14px] leading-[30px]">
              <td className="h-[100%] flex gap-1 items-center">
                <Image alt="" src={product} />
                <label>Electronic LED</label>
              </td>
              <td>John Due</td>
              <td>
                <p className="h-[28px] w-[75px] rounded-[5px] bg-[var(--bg-color-cancelled)] text-[10px] text-[var(--text-color)] font-[500] flex items-center justify-center">
                  Out of Stock
                </p>
              </td>
              <td>$11.00</td>
              <td>Electronic</td>
            </tr>
            <tr className="text-[14px] leading-[35px]">
              <td className="h-[100%] flex gap-1 items-center">
                <Image alt="" src={product} />
                <label>Electronic LED</label>
              </td>
              <td>John Due</td>
              <td>
                <p className="h-[28px] w-[75px] rounded-[5px] bg-[var(--bg-color-delivered)] text-[10px] text-[var(--text-color-delivered)] font-[500] flex items-center justify-center">
                  12 in Stock
                </p>
              </td>
              <td>$11.00</td>
              <td>Electronic</td>
            </tr>
            <tr className="text-[14px] leading-[35px]">
              <td className="h-[100%] flex gap-1 items-center">
                <Image alt="" src={product} />
                <label>Electronic LED</label>
              </td>
              <td>John Due</td>
              <td>
                <p className="h-[28px] w-[75px] rounded-[5px] bg-[var(--bg-color-delivered)] text-[10px] text-[var(--text-color-delivered)] font-[500] flex items-center justify-center">
                  Delivered
                </p>
              </td>
              <td>$11.00</td>
              <td>Electronic</td>
            </tr>
            <tr className="text-[14px] leading-[30px]">
              <td className="h-[100%] flex gap-1 items-center">
                <Image alt="" src={product} />
                <label>Electronic LED</label>
              </td>
              <td>John Due</td>
              <td>
                <p className="h-[28px] w-[75px] rounded-[5px] bg-[var(--bg-color-cancelled)] text-[10px] text-[var(--text-color)] font-[500] flex items-center justify-center">
                  Out of Stock
                </p>
              </td>
              <td>$11.00</td>
              <td>Electronic</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RightSection;
