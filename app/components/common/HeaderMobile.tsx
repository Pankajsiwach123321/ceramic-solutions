import React from 'react'
import { navLinksList } from './Helper';
import { CommonButton } from './CommonButton';
import Link from 'next/link';
import { CallIcon } from './Icons';
type HeaderMobileProps = {
  isNavVisible: boolean;
  setIsNavVisible: (isVisible: boolean) => void;
};

const HeaderMobile = ({isNavVisible,setIsNavVisible} :HeaderMobileProps) => {
  return (
   <div className={`fixed h-full w-full left-0 top-0 transition-all duration-300 ease-linear bg-white flex flex-col pt-36 gap-y-9 ${isNavVisible ? "translate-y-0" : " -translate-y-full"}`}>
    <div className=" flex gap-x-7 items-center flex-col gap-y-5" >
     {navLinksList.map((obj, index) => <Link onClick={()=>setIsNavVisible(false)} href={`/${obj.toLowerCase().replace(/ /g, "-")}`} className="text-black font-normal text-xl leading-160" key={index}> {obj}</Link>)}
          </div>
         <div className='text-center'> <CommonButton header href="tel:(865)621-1717" className="group"><CallIcon svgClassName="group-hover:fill-black transition-all duration-300 ease-linear"/> (865) 621-1717</CommonButton></div>
   </div>
  )
}

export default HeaderMobile