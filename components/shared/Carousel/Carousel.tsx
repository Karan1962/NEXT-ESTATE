"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/bundle";
import { carousalData } from "@/constants/Carousal";
import Link from "next/link";

export default () => {
  SwiperCore.use([Navigation]);
  return (
    <Swiper navigation className="max-w-7xl">
      {carousalData.map((listing) => (
        <SwiperSlide key={listing.id}>
          <Link href={"#"}>
            <div
              className="h-[550px]"
              style={{
                background: `url(${listing.imgUrl}) center no-repeat`,
                backgroundSize: "cover",
              }}
            ></div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
