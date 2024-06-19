import React from "react";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import { whatWeDoCardsData } from "../common/Helper";
import WhiteCard from "../custom-ui/WhiteCard";
import Image from "next/image";
import Paragraph from "../custom-ui/Paragraph";
import Link from "next/link";
import { ArrowIcon } from "../common/Icons";

const WhatWeDo = () => {
  return (
    <>
      <div className='py-20 sm:py-24 lg:py-[140px]'>
        <div className='container mx-auto px-6 md:px-5 xl:max-w-[1180px]'>
          <PrimaryHeading>What we do</PrimaryHeading>
          <div className='flex flex-wrap justify-between gap-6 pt-14'>
            {whatWeDoCardsData.map((obj, index) => (
              <div key={index} className='lg:w-[364px]'>
                <WhiteCard>
                  <Image
                    className='sm:rounded-xl'
                    src={obj.image}
                    width={316}
                    height={246}
                    alt='home-images'
                  />
                  <h3 className='pt-6 text-2xl font-semibold text-black'>
                    {obj.title}
                  </h3>
                  <Paragraph small left className='pt-3'>
                    {obj.description}
                  </Paragraph>
                  <Link
                    href='/'
                    className='pt-6 text-base font-semibold text-red flex items-center gap-[10px]'
                  >
                    Learn more
                    <ArrowIcon />
                  </Link>
                </WhiteCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
