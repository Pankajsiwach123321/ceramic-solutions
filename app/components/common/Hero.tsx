import React from "react";
import Paragraph from "../custom-ui/Paragraph";
import { CommonButton } from "./CommonButton";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=' relative min-h-screen bg-[url(/assets/images/homepage/hero-bg.webp)] bg-cover bg-top'>
      {" "}
      <div className='absolute left-0 top-0 z-0 h-full w-full bg-black/55' />
      <div className='py-14'></div>
      <div className='container relative z-10 flex flex-col pt-20'>
        <h1 className='leading-126 max-w-[880px] text-[clamp(32px,6.25vw,64px)] font-semibold text-white'>
          Transform Your Space with Precision and Quality: Get a Free Quote
          Today!
        </h1>
        <Paragraph className= 'pb-7 md:pb-9 pt-4 md:pt-5' left maxWidth={742} white>
          Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
          primasofi dede facebooka: förutom tivaligt. Fejkade nyheter eurosamma
          sol: teroktig,
        </Paragraph>
        <div>
          <CommonButton  type="button">Get a Quote</CommonButton>
        </div>
        <div className="flex flex-wrap gap-6 pt-16 pb-[60px]">
          <Image className="max-[640px]:me-4" width={229} height={80} src="/assets/images/homepage/google-review-card.webp" alt="google-review"/>
          <Image className="max-[640px]:me-4" width={229} height={80} src="/assets/images/homepage/trust-reviw-card.webp" alt="google-review"/>
          <Image width={80} height={80} src="/assets/images/homepage/tile-insaller-certificat.webp" alt="google-review"/>
          <Image width={80} height={80} src="/assets/images/homepage/quality-business-award.webp" alt="google-review"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
