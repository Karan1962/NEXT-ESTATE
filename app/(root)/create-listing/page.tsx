"use client";
import { useState } from "react";

const CreateListing = () => {
  const [listing, setListing] = useState({
    listingName: "",
    description: "",
    address: "",
    sell: false,
    rent: false,
    parking: false,
    furnished: false,
    offer: false,
    beds: 0,
    baths: 0,
    regularPrice: 0,
    discountedPrice: 0,
  });

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <main className="max-w-6xl mx-auto py-10">
        <h1 className="text-center text-3xl sm:text-4xl font-bold">
          Create a Listing
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 py-10">
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Name"
                name="listingName"
                className="w-full rounded-md p-3 bg-gray-200 dark:bg-gray-600 border border-gray-300"
              />
              <textarea
                placeholder="Description"
                name="description"
                className="w-full rounded-md p-3 bg-gray-200 dark:bg-gray-600 border border-gray-300"
              />
              <input
                type="text"
                placeholder="Address"
                name="address"
                className="w-full rounded-md p-3 bg-gray-200 dark:bg-gray-600 border border-gray-300"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              {["Sell", "Rent", "Parking", "Furnished", "Offer"].map(
                (label) => (
                  <div key={label} className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      name={label.toLowerCase()}
                      className="w-5 h-5"
                    />
                    <label>{label}</label>
                  </div>
                )
              )}
            </div>
            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  name="beds"
                  className="w-20 p-3 rounded-md border border-gray-300 bg-gray-200 dark:bg-gray-600"
                />
                <label>Beds</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  name="baths"
                  className="w-20 p-3 rounded-md border border-gray-300 bg-gray-200 dark:bg-gray-600"
                />
                <label>Baths</label>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  name="regularPrice"
                  className="w-32 p-3 rounded-md border border-gray-300 bg-gray-200 dark:bg-gray-600"
                />
                <label>Regular Price</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  name="discountedPrice"
                  className="w-32 p-3 rounded-md border border-gray-300 bg-gray-200 dark:bg-gray-600"
                />
                <label>Discounted Price</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full lg:w-1/2">
            <p>
              Images:
              <span className="text-green-700">
                {" "}
                The first image will be the cover image (max 6)
              </span>
            </p>
            <div className="flex gap-3 flex-wrap">
              <input
                type="file"
                className="border border-gray-300 p-3 rounded-md w-full sm:w-auto"
              />
              <button className="px-6 py-3 border border-green-700 text-green-700 rounded-md w-full sm:w-auto">
                Upload
              </button>
            </div>
            <button className="w-full bg-blue-900 text-white rounded-md p-3 hover:bg-blue-950">
              Create Listing
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default CreateListing;
