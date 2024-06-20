"use client";
import React from "react";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import { ourTeam } from "../common/Helper";
import TeamCard from "./TeamCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OurTeam = () => {
  return (
    <section className='py-20 sm:py-24 lg:py-[140px]'>
      <div className='container mx-auto px-6 md:px-5 xl:max-w-[1180px]'>
        <PrimaryHeading>Get to know our team</PrimaryHeading>
        <Swiper
          className='block lg:!hidden'
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {ourTeam.map((obj, i) => (
            <SwiperSlide key={i} className='!flex h-full !justify-center'>
              <div className='mt-8 w-[364px] pb-[51px] h-auto sm:mt-10'>
                <TeamCard data={obj} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='hidden flex-wrap justify-center gap-x-6 lg:flex'>
          {ourTeam.map((obj, i) => (
            <div key={i} className='md:mt-14 lg:w-[364px]'>
              <TeamCard data={obj} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
