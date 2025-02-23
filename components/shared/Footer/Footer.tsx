"use client";

import Link from "next/link";
import { FC } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-gray-950 dark:text-gray-400 py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-white dark:text-gray-100">
            KaranEstate
          </h2>
          <p className="text-sm mt-2 text-gray-400 dark:text-gray-500">
            Discover the best real estate deals with us. Your dream home is just
            a click away.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link
              href="#"
              className="hover:text-blue-400 dark:hover:text-blue-500"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="#"
              className="hover:text-blue-400 dark:hover:text-blue-500"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="#"
              className="hover:text-pink-400 dark:hover:text-pink-500"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="#"
              className="hover:text-blue-500 dark:hover:text-blue-600"
            >
              <FaLinkedinIn size={20} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white dark:text-gray-100 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-blue-400 dark:hover:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/listings"
                className="hover:text-blue-400 dark:hover:text-blue-500"
              >
                Listings
              </Link>
            </li>
            <li>
              <Link
                href="/rentals"
                className="hover:text-blue-400 dark:hover:text-blue-500"
              >
                Rentals
              </Link>
            </li>
            <li>
              <Link
                href="/offers"
                className="hover:text-blue-400 dark:hover:text-blue-500"
              >
                Offers
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white dark:text-gray-100 mb-3">
            Contact Us
          </h3>
          <p className="text-gray-400 dark:text-gray-500">
            123 Real Estate Street, City, Country
          </p>
          <p>
            Email:{" "}
            <Link
              href="mailto:support@yourbrand.com"
              className="hover:text-blue-400 dark:hover:text-blue-500"
            >
              karansawan5050@gmail.com
            </Link>
          </p>
          <p>
            Phone:{" "}
            <Link
              href="tel:+1234567890"
              className="hover:text-blue-400 dark:hover:text-blue-500"
            >
              1234567890
            </Link>
          </p>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold text-white dark:text-gray-100 mb-3">
            Newsletter
          </h3>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            Subscribe to get the latest real estate updates.
          </p>
          <div className="flex items-center mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full rounded-l-md bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-200 focus:outline-none"
            />
            <button className="bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm border-t border-gray-700 dark:border-gray-800 mt-8 pt-4">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
