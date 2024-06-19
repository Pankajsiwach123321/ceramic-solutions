import React from "react";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Paragraph from "../custom-ui/Paragraph";
import { chooseUsListData } from "../common/Helper";
import Image from "next/image";
import { CommonButton } from "../common/CommonButton";

const WhyChooseUs = () => {
  return (
    <>
      <div className='bg-light-pink py-16 sm:py-20 lg:py-[100px]'>
        <div className='container mx-auto lg:flex justify-between px-6 md:px-5 xl:max-w-[1180px]'>
          <div className='lg:w-1/2'>
            <PrimaryHeading left>Why Choose us?</PrimaryHeading>
            <Paragraph left className='xl:w-[590px] pb-2 pt-4'>
              Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.
              Pregigt primasofi dede facebooka: förutom tivaligt.
            </Paragraph>
            {chooseUsListData.map((obj, index) => (
              <div key={index} className='flex gap-5 pt-6'>
                <span>{obj.icon}</span>
                <div>
                  <h3 className='text-natural-black text-xl font-semibold'>
                    {obj.title}
                  </h3>
                  <Paragraph left small className='lg:w-[370px] pt-3'>
                    {obj.description}
                  </Paragraph>
                </div>
              </div>
            ))}
            <div className='pt-9'>
              <CommonButton>Get a Quote</CommonButton>
            </div>
          </div>
          <div className='relative z-10 sm:w-1/2 flex xl:block mx-auto xl:mx-[unset] pt-10 lg:pt-0'>
            <div className='hidden xl:block rounded-6 absolute top-[33%] left-[4%] z-[-1] h-[396px] w-[300px] bg-red'></div>
            <Image
              className='mx-auto sm:ms-auto'
              src='/assets/images/homepage/why-choose-home-img.webp'
              width={469}
              height={523}
              alt='Picture of the author'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
