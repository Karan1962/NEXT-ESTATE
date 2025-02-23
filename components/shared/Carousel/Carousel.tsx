"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/bundle";
import { carousalData } from "@/constants/Carousal";
import Link from "next/link";
import Image from "next/image";

export default () => {
  SwiperCore.use([Navigation]);
  return (
    <Swiper navigation className="max-w-7xl">
      {carousalData.map((listing) => (
        <SwiperSlide key={listing.id}>
          <div>
            <Image
              alt="carousal"
              src={listing.imgUrl}
              width={1280}
              height={500}
              className="w-100 h-[80vh] max-sm:max-h-[500px] object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
