"use client";
import Link from "next/link";
import React from "react";
import GlobalSearch from "../Search/GlobalSearch";
import Theme from "./Theme";
import { HomeIcon } from "lucide-react";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-3 px-1 items-center bg-transparent m-auto max-w-6xl ">
      <div>
        <Link
          href="/"
          className="font-roboto logo-dark_light text-2xl max-md:hidden"
        >
          Karan<span className="subLogo-dark_light ">Estate</span>
        </Link>
        <Link href="/" className="text-dark_light text-2xl hidden max-md:block">
          <HomeIcon />
        </Link>
      </div>
      <GlobalSearch />
      <div className="flex gap-6 justify-evenly sm:w-[30%] text-xs sm:text-base sm:font-normal items-center">
        <Link href="/about">About</Link>
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-[34px] w-[34px]", // Adjust avatar size
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
