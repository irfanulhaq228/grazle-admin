"use client";

import React, { useState } from "react";
import { Slider } from "antd";

import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const LeftSection = () => {
  const [stepsGap, setStepsGap] = useState(7);
  const [categoriesFilter, setCategoriesFilter] = useState([
    { id: 0, label: "Electronics", status: false },
    { id: 1, label: "Furnitures", status: false },
    { id: 2, label: "Beauty", status: false },
    { id: 3, label: "Sports", status: false },
    { id: 4, label: "Power Electronics", status: false },
  ]);
  const [productTypeFilter, setProductTypeFilter] = useState([
    { id: 0, label: "Simple", status: false },
    { id: 1, label: "Variable", status: false },
    { id: 2, label: "Digital", status: false },
  ]);
  const [sortByFilter, setSortByFilter] = useState([
    { id: 0, label: "Newest", status: false },
    { id: 1, label: "Oldest", status: false },
    { id: 2, label: "Brand 3", status: false },
    { id: 3, label: "Brand 4", status: false },
    { id: 4, label: "Brand 5", status: false },
  ]);
  const fn_checkedFilter = (id, type) => {
    if (type === "category") {
      const updatedCategoriesFilter = categoriesFilter.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      );
      setCategoriesFilter(updatedCategoriesFilter);
    } else if (type === "productType") {
      const updatedProductTypeFilter = productTypeFilter.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      );
      setProductTypeFilter(updatedProductTypeFilter);
    } else {
      const updatedSortByFilter = sortByFilter.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      );
      setSortByFilter(updatedSortByFilter);
    }
  };
  return (
    <div className="bg-white rounded-[8px] shadow-sm p-[15px] lg:w-[30%]">
      <p className="font-[500]">Filter</p>
      <p className="font-[500] text-[18px] mt-1">Price Range</p>
      <div className="mt-1">
        <Slider min={0} max={10000} range defaultValue={[1000, 5000]} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1">
        <div>
          <p className="font-[500] text-[18px] mt-3">Categories</p>
          <div className="mt-1.5 flex flex-col gap-1">
            {categoriesFilter?.map((item) => (
              <RadioText
                text={item.label}
                id={item.id}
                status={item.status}
                type={"category"}
                functionOnClick={fn_checkedFilter}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="font-[500] text-[18px] mt-3">Product Type</p>
          <div className="mt-1.5 flex flex-col gap-1">
            {productTypeFilter?.map((item) => (
              <RadioText
                text={item.label}
                id={item.id}
                status={item.status}
                type={"productType"}
                functionOnClick={fn_checkedFilter}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="font-[500] text-[18px] mt-3">Sort By</p>
          <div className="mt-1.5 flex flex-col gap-1">
            {sortByFilter?.map((item) => (
              <RadioText
                text={item.label}
                id={item.id}
                status={item.status}
                type={"sortBy"}
                functionOnClick={fn_checkedFilter}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;

const RadioText = ({ text, id, status, type, functionOnClick }) => {
  return (
    <label
      key={id}
      className={`flex items-center cursor-pointer ${
        !status ? "text-[var(--text-color-body)]" : "text-[var(--text-color)]"
      }`}
      onClick={() => functionOnClick(id, type)}
    >
      {!status ? <IoMdRadioButtonOff /> : <IoMdRadioButtonOn />}
      &nbsp;
      <span className="text-[15px]">{text}</span>
    </label>
  );
};
