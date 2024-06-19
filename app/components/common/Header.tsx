"use client"
import React, { useEffect, useState } from "react";
import { CommonButton } from "./CommonButton";
import Link from "next/link";
import Image from "next/image";
import { navLinksList } from "./Helper";
import { CallIcon } from "./Icons";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1024) {
        if (isNavVisible) {
          document.documentElement.classList.add("overflow-hidden")
        }
        else {
          document.documentElement.classList.remove("overflow-hidden")
        }
      }
      else{setIsNavVisible(false)}
    }
    handleResize()
    window.addEventListener("resize",handleResize)
  }, [isNavVisible])
  
  return (
    <div className=" relative z-50">
      <div className="container mx-auto fixed left-1/2 -translate-x-1/2 top-8 md:top-6 z-10">
      <nav className='flex items-center justify-between rounded-6 bg-white p-3.5 md:p-4 shadow-cards'>
        <Link href='/'>
          <Image className="w-[97px] h-12 md:width-[106px] md:h-[52px]"
            src='/assets/images/homepage/logo.svg'
            height={52}
            width={106}
            alt='page logo'
          />
          </Link>
          <div onClick={()=> setIsNavVisible(!isNavVisible)} className=" size-[26px] sm:size-8 md:size-9 relative lg:hidden">
            <Image className={`transition-all duration-300 ease-linear absolute h-full w-full top-0 left-0 ${isNavVisible?" opacity-0":"opacity-100"}`} height={26} width={26} src="/assets/images/homepage/open-toggle.svg" alt="nav-toggle-open" />
            <Image className={`transition-all duration-300 ease-linear absolute h-full w-full top-0 left-0 ${isNavVisible?" opacity-100":"opacity-0"}`} height={26} width={26} src="/assets/images/homepage/cross-icon.svg" alt="nav-toggle-close" />
          </div>
        <div className="hidden lg:flex gap-x-7 items-center " >
          {navLinksList.map((obj, index) => <Link href={`/${obj.toLowerCase().replace(/ /g,"-")}`} className="text-black font-normal text-base leading-160 transition-all duration-100 ease-linear hover:scale-105 hover:text-red text_stroke_1" key={index}> {obj}</Link>)}
          </div>
          <CommonButton header href="tel:(865)621-1717" className="group !hidden lg:!flex"><CallIcon svgClassName="group-hover:fill-black transition-all duration-300 ease-linear"/> (865) 621-1717</CommonButton>
        </nav>
      </div>
      <HeaderMobile isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} />
    </div>
  );
};

export default Header;
