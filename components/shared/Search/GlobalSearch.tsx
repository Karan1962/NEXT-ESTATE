"use client";
import { SearchIcon } from "lucide-react";

const GlobalSearch = () => {
  return (
    <div className="flex bg-dark200_light500  rounded-md justify-center items-center p-1 shadow-dark_light max-sm:w-[40%] sm:w-[22%]">
      <input
        type="text"
        placeholder="Search...."
        className=" rounded-md outline-none px-2 bg-dark200_light500 w-[80%]"
      />
      <SearchIcon width={20} height={20} className="text-dark_light w-[20%]" />
    </div>
  );
};

export default GlobalSearch;
