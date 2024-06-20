import Image from "next/image";
import React from "react";
import Paragraph from "../custom-ui/Paragraph";
import Link from "next/link";
import { Facebook, Instagram, LinkedIn, XTwitter } from "../common/Icons";

interface IProps {
  data: {
    about: string;
    profession: string;
    name: string;
    image: string;
    facebook: string;
    instagram: string;
    xtwitter: string;
    linkedIn: string;
  };
}
const TeamCard = (props: IProps) => {
  const { data } = props;
  return (
    <>
      <Image
        className='h-[321px] w-full rounded-xl'
        src={data.image}
        width={316}
        height={321}
        sizes='100vw'
        alt='home-images'
      />
      <h2 className='tex-black mt-[26px] text-center text-xl font-semibold leading-[120%] md:text-2xl'>
        {data.name}
      </h2>
      <Paragraph small className='mt-[14px]'>
        {data.profession}
      </Paragraph>
      <Paragraph small className='mt-[14px] italic !leading-[160%]'>
        {data.about}
      </Paragraph>
      <div className='mt-[26px] flex items-center justify-center gap-2'>
        <Link className='group' href={data.facebook} target='_blank'>
          <Facebook />
        </Link>
        <Link className='group' href={data.instagram} target='_blank'>
          <Instagram />
        </Link>
        <Link className='group' href={data.xtwitter} target='_blank'>
          <XTwitter />
        </Link>
        <Link className='group' href={data.linkedIn} target='_blank'>
          <LinkedIn />
        </Link>
      </div>
    </>
  );
};

export default TeamCard;
