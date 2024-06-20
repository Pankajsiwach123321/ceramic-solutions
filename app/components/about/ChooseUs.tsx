import React from "react";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Paragraph from "../custom-ui/Paragraph";
import WhiteCard from "../custom-ui/WhiteCard";
import { chooseUsListData } from "../common/Helper";

const ChooseUs = () => {
  return (
    <div className='container mx-auto px-6 py-20 sm:py-24 xl:px-5 lg:py-[140px] xl:max-w-[1180px] '>
      <PrimaryHeading>Why Choose us?</PrimaryHeading>
      <Paragraph small className='pt-4 lg:pt-5 xl:w-[590px]'>
        Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
        primasofi dede facebooka: förutom tivaligt.
      </Paragraph>
      <div className='-mx-3 mt-9 flex flex-wrap justify-center md:gap-y-6 gap-y-4 lg:mt-14'>
        {chooseUsListData.map((obj, index) => (
          <div key={index} className='w-full px-3 sm:w-5/6 md:w-1/2 xl:w-2/6'>
            <WhiteCard className='mx-auto max-md:p-4 max-sm:max-w-[364px]'>
              <span>{obj.icon}</span>
              <h3 className='mt-4 text-xl font-semibold !leading-160 text-natural-black sm:text-2xl md:mt-6'>
                {obj.title}
              </h3>
              <Paragraph left small className='pt-3'>
                {obj.description}
              </Paragraph>
            </WhiteCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
