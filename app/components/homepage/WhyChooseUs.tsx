import React from "react";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Paragraph from "../custom-ui/Paragraph";
import { chooseUsListData } from "../common/Helper";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <>
      <div className='bg-light-pink py-[100px]'>
        <div className='container mx-auto px-6 md:px-5 xl:max-w-[1180px] flex'>
          <div className='w-1/2'>
            <PrimaryHeading left>Why Choose us?</PrimaryHeading>
            <Paragraph left className='pt-4'>
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
                  <Paragraph left small className='w-[370px] pt-3'>
                    {obj.description}
                  </Paragraph>
                </div>
              </div>
            ))}
          </div>
          <div className='w-1/2'>
            <Image
              src='/assets/images/homepage/why-choose-home-img.webp'
              width={469}
              height={523}
              alt='Picture of the author'
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
