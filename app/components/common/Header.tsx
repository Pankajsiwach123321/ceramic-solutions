import React from "react";
import { CommonButton } from "./CommonButton";
import Link from "next/link";
import Image from "next/image";
import { navLinksList } from "./Helper";

const Header = () => {
  return (
    <>
      <nav className='flex items-center justify-between rounded-6 bg-white'>
        
        <Link href='/'>
          
          <Image
            src='/assets/images/homepage/logo.svg'
            height={52}
            width={106}
            alt='page logo'
          />
        </Link>
        <div className=" flex">
          
          {navLinksList.map((obj, index) => <Link href="" key={index}> {obj}</Link>)}
        </div>
      </nav>
    </>
  );
};

export default Header;
