import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBed, FaBath, FaMapMarkerAlt } from "react-icons/fa";

interface Listing {
  id: number;
  title: string;
  imgUrl: string;
  desc: string;
  location: string;
  Beds: number;
  Baths: number;
  Price: number;
}

interface ListingsProps {
  title: string;
  listings: Listing[];
  isRental?: boolean;
}

const Listings: React.FC<ListingsProps> = ({
  title,
  listings,
  isRental = true,
}) => {
  return (
    <div
      className="
      min-h-screen p-3 max-w-6xl m-auto
    "
    >
      <div className="py-1 flex flex-col gap-2">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h1>
        <Link
          href="/"
          className="text-blue-600 dark:text-blue-400 hover:underline w-fit"
        >
          Show more..
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((item) => (
          <div
            key={item.id}
            className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl
               dark:bg-gray-800"
          >
            {/* Image with Hover Effect */}
            <div className="overflow-hidden">
              <Image
                src={item.imgUrl}
                alt={item.title}
                width={600}
                height={600}
                className="block w-full h-52 object-cover rounded-t-lg 
                  hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              />
            </div>

            <div className="p-4 space-y-3">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {item.title}
              </h2>
              <p className="flex items-center text-gray-600 dark:text-gray-400 text-sm font-semibold">
                <FaMapMarkerAlt className="mr-1 text-red-500 dark:text-red-400" />
                {item.location}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {item.desc}
              </p>

              {/* Beds & Baths with Icons */}
              <p className="flex items-center gap-6">
                <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <FaBed className="text-blue-500 dark:text-blue-400" />
                  <span className="font-bold">{item.Beds}</span> Beds
                </span>
                <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <FaBath className="text-green-500 dark:text-green-400" />
                  <span className="font-bold">{item.Baths}</span> Baths
                </span>
              </p>

              {/* Price Display */}
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                ${item.Price} {isRental ? "/month" : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
