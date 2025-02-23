"use client";
import Link from "next/link";
import React from "react";
import GlobalSearch from "../Search/GlobalSearch";
import Theme from "./Theme";
import { HomeIcon, MenuIcon, X } from "lucide-react";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import Create from "./Create";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants/SidebarLinks";

// ✅ Extract Logo Component for Reusability
const Logo = () => (
  <Link href="/" className="font-roboto logo-dark_light text-2xl">
    Karan<span className="subLogo-dark_light ">Estate</span>
  </Link>
);

const Navbar = () => {
  const pathname = usePathname(); // Add this hook

  // Helper function to determine if link is active
  const isActiveLink = (href: string) => {
    return pathname === href;
  };
  return (
    <nav className="flex justify-around gap-2 py-3 px-1 items-center bg-transparent m-auto max-w-6xl">
      {/* Left Side - Logo */}
      <div className="max-sm:hidden">
        <Logo />
      </div>
      <div className="sm:hidden">
        <HomeIcon />
      </div>

      {/* Center - Global Search */}
      <GlobalSearch />

      {/* Right Side - Desktop and Mobile Navigation */}
      <div className="flex gap-6 justify-evenly  w-[40%] text-xs sm:text-base sm:font-normal items-center">
        {/* Desktop Links */}
        <Link href="/about" className="max-sm:hidden">
          About
        </Link>
        <div className="max-sm:hidden">
          <Create />
        </div>
        <Theme />
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-[34px] w-[34px]",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>

        <SignedOut>
          <div className="min-w-fit">
            <SignInButton />
          </div>
        </SignedOut>

        {/* Mobile Menu */}
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Open menu">
                <MenuIcon />
              </button>
            </SheetTrigger>

            <SheetContent>
              <SheetTitle>
                <div className="flex justify-between items-center">
                  <Logo />
                </div>
              </SheetTitle>

              <div className="flex flex-col gap-3 py-10 text-xl">
                {/* Mobile Menu Links - Add active styles */}
                {sidebarLinks.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={`p-2 rounded-md ${
                        isActiveLink(item.href)
                          ? "dark:bg-[#353535] bg-[#9a9a9a] text-white font-semibold"
                          : "dark:hover:bg-[#353535] hover:bg-[#9a9a9a] "
                      }`}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
