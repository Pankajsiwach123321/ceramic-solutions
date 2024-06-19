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
        <div className='container mx-auto justify-between px-6 md:px-5 lg:flex xl:max-w-[1180px]'>
          <div className='lg:w-1/2'>
            <PrimaryHeading left>Why Choose us?</PrimaryHeading>
            <Paragraph left className='pb-2 pt-4 xl:w-[590px]'>
              Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.
              Pregigt primasofi dede facebooka: förutom tivaligt.
            </Paragraph>
            {chooseUsListData.map((obj, index) => (
              <div key={index} className='flex gap-5 pt-6'>
                <span>{obj.icon}</span>
                <div>
                  <h3 className='text-xl font-semibold text-natural-black'>
                    {obj.title}
                  </h3>
                  <Paragraph left small className='pt-3 lg:w-[370px]'>
                    {obj.description}
                  </Paragraph>
                </div>
              </div>
            ))}
            <div className='pt-8 sm:pt-9'>
              <CommonButton>Get a Quote</CommonButton>
            </div>
          </div>
          <div className='relative z-10 mx-auto flex pt-10 sm:w-1/2 lg:pt-0 xl:mx-[unset] xl:block'>
            <div className='absolute left-[4%] top-[33%] z-[-1] hidden h-[396px] w-[300px] rounded-6 bg-red xl:block'></div>
            <Image
              className='mx-auto sm:rounded-6 sm:me-0 sm:ms-auto'
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
