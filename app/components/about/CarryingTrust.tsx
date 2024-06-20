import React from "react";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Paragraph from "../custom-ui/Paragraph";
import Image from "next/image";

const CarryingTrust = () => {
  return (
    <section className='pb-20 sm:pb-24 lg:pb-[140px]'>
      <div className='container mx-auto w-full px-6 md:px-5 xl:max-w-[1180px]'>
        <div className='relative z-[1] rounded-6 bg-red p-6 sm:p-8 md:p-12 lg:pb-[134px] lg:pl-16 lg:pr-[479px] lg:pt-16'>
          <PrimaryHeading
            maxWidth={575}
            className='pr-10 lg:pr-0'
            left
            white='white'
          >
            Carrying the Trust of thousands
          </PrimaryHeading>
          <Paragraph maxWidth={584} left white className='mt-4'>
            Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
            primasofi dede facebooka: förutom tivaligt. Fejkade nyheter
            eurosamma sol: teroktig,
          </Paragraph>
          <div className='right-[111px] top-[71px] mt-8 flex flex-col items-end gap-6 md:gap-7 lg:absolute lg:mt-0 lg:gap-9 xl:gap-[46px]'>
            <Image
              width={229}
              height={80}
              src='/assets/images/homepage/google-review-card.webp'
              alt='google-review'
            />
            <Image
              className='mx-auto flex md:-translate-x-11 xl:-translate-x-[53px]'
              width={229}
              height={80}
              src='/assets/images/homepage/trust-reviw-card.webp'
              alt='google-review'
            />
            <div className='mr-auto flex w-full items-center justify-start gap-6 lg:-translate-x-32 xl:-translate-x-40'>
              <Image
                width={80}
                height={80}
                src='/assets/images/homepage/tile-insaller-certificat.webp'
                alt='google-review'
              />
              <Image
                width={80}
                height={80}
                src='/assets/images/homepage/quality-business-award.webp'
                alt='google-review'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarryingTrust;
