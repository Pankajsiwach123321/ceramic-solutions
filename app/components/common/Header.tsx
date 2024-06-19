import React from "react";
import { CommonButton } from "./CommonButton";
import Link from "next/link";
import Image from "next/image";
import { navLinksList } from "./Helper";

const Header = () => {
  return (
    <>
      <div className="container mx-auto fixed left-1/2 -translate-x-1/2 top-6">
      <nav className='flex items-center justify-between rounded-6 bg-white p-4'>
        
        <Link href='/'>
          
          <Image
            src='/assets/images/homepage/logo.svg'
            height={52}
            width={106}
            alt='page logo'
          />
        </Link>
        <div className=" flex gap-x-7 items-center">
          
          {navLinksList.map((obj, index) => <Link href={`/${obj.toLowerCase().replace(/ /g,"-")}`} className="text-black font-normal leading-160" key={index}> {obj}</Link>)}
          </div>
          <CommonButton header href="tel:(865)621-1717">(865) 621-1717</CommonButton>
      </nav></div>
    </>
  );
};

export default Header;
