import Hero from "@/components/shared/Hero/Hero";
import React from "react";
import Carousel from "@/components/shared/Carousel/Carousel";
import Listings from "@/components/shared/Listings/Listings";
import {
  recentOffers,
  recentRent,
  recentSale,
} from "@/constants/RecentProperties";
import Footer from "@/components/shared/Footer/Footer";

const Home = () => {
  return (
    <div className="bg-dark200_light500">
      <section className="max-w-7xl m-auto">
        <Hero />
      </section>
      <section className="pt-3">
        <Carousel />
      </section>
      <section
        className="      bg-gray-100 dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900 dark:to-gray-800
"
      >
        <Listings
          title="Recent Rentals"
          listings={recentRent}
          isRental={true}
        />

        <Listings
          title="Special Offers"
          listings={recentOffers}
          isRental={false}
        />

        <Listings
          title="Properties for Sale"
          listings={recentSale}
          isRental={false}
        />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
