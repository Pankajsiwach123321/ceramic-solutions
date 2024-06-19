import React from "react";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Paragraph from "../custom-ui/Paragraph";
import WhiteCard from "../custom-ui/WhiteCard";
import { ServicesLocation } from "./Icons";
import { serviceAreasList } from "./Helper";

const ServiceAreas = () => {
  return (
    <div className='container pb-20 sm:pb-24 lg:pb-[140px]'>
      <PrimaryHeading left={true} className='max-w-[589px]'>
        We provide services in these areas
      </PrimaryHeading>
      <Paragraph
        left={true}
        className='max-w-[589px] pb-8 pt-4 sm:pb-14 sm:pt-5'
      >
        Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
        primasofi dede facebooka: förutom tivaligt. Fejkade
      </Paragraph>
      <div className='flex flex-wrap justify-center gap-5 max-[389px]:gap-3 md:gap-6'>
        {serviceAreasList.map((value, index) => {
          return (
            <div
              key={index}
              className='w-[calc(50%-10px)] max-[389px]:w-[calc(50%-6px)] md:w-[calc(33.3%-16px)]'
            >
              <WhiteCard className='md:!rounded-6 !rounded-4 flex items-center gap-3 px-[15px] py-3 max-[450px]:gap-2 max-[389px]:px-2 sm:p-5 lg:p-6'>
                <ServicesLocation className='h-auto w-10 min-w-7 max-[450px]:w-7 md:w-12' />{" "}
                <span className='ms:text-xl text-lg font-semibold text-black max-[450px]:text-sm lg:text-2xl'>
                  {value}
                </span>
              </WhiteCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceAreas;
