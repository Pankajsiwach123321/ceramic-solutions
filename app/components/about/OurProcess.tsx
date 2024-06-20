import React from "react";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Paragraph from "../custom-ui/Paragraph";
import { chooseUsListData } from "../common/Helper";
import WhiteCard from "../custom-ui/WhiteCard";
import { CommonButton } from "../common/CommonButton";

const OurProcess = () => {
  return (
    <div className='bg-light-pink py-16 sm:py-20 lg:py-[100px]'>
      <div className='container mx-auto px-6 md:px-5 xl:max-w-[1180px]'>
        <PrimaryHeading>Our Process</PrimaryHeading>
        <Paragraph className='pt-4 xl:w-[590px]'>
          Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
          primasofi dede facebooka: förutom tivaligt.
        </Paragraph>
        <div className='relative -mx-3 mt-8 flex flex-wrap justify-center gap-y-8 lg:mt-14'>
          {chooseUsListData.map((obj, index) => (
            <div
              key={index}
              className='relative z-10 w-full px-3 sm:w-5/6 md:w-1/2 xl:w-2/6'
            >
              <div className='mx-auto mb-8 flex h-[88px] w-[88px] items-center justify-center rounded-full bg-red md:mb-0 xl:mb-9'>
                <p className='text-custom-3xl font-semibold leading-126 text-white'>
                  0{index + 1}
                </p>
              </div>
              <div className='mx-auto hidden h-8 w-0 border-l-2 border-dashed border-black md:block xl:hidden'></div>
              <WhiteCard className='mx-auto max-md:p-4 max-sm:max-w-[364px]'>
                <span>{obj.icon}</span>
                <h3 className='mt-4 text-xl font-semibold !leading-160 text-natural-black sm:text-2xl md:mt-6'>
                  {obj.title}
                </h3>
                <Paragraph left small className='pt-3'>
                  {obj.description}
                </Paragraph>
              </WhiteCard>
            </div>
          ))}
          <div className='absolute bottom-0 left-0 right-0 top-0 mx-auto h-[70%] w-1 border-dashed border-black max-md:border-l-2 md:hidden xl:top-[13%] xl:block xl:w-[70%] xl:border-t-2'></div>
        </div>
        <div className='mt-8 text-center xl:mt-9'>
          <CommonButton>Get a Quote</CommonButton>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
