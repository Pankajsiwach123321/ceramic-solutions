"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Mail, Telephone } from "./Icons";
import { footerLinks, socialMediaLinks } from "./Helper";
import { subscribe } from "diagnostics_channel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [emailInput, setEmailInput] = useState("");
  const subscribeEmailhandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(emailInput);
    setEmailInput("");
    toast("Subscribed Successfully");
  };
  return (
    <>
      <div className='container flex justify-between pb-11'>
        <div className='w-[182px]'>
          <Link href='/'>
            <Image
              width={175}
              height={86}
              src='/assets/images/homepage/logo.svg'
              alt='ceramic-solutions'
            />
          </Link>
          <Link
            href='mailto:help@Dealzip.com'
            className='text-dark-metal mb-4 mt-5 flex items-center gap-2.5 text-base font-normal capitalize'
          >
            <Mail /> help@Dealzip.com
          </Link>
          <Link
            href='tel:+1 234 456 678 89'
            className='mb-6 flex items-center gap-2.5'
          >
            <Telephone /> +1 234 456 678 89
          </Link>
          <div className='flex items-center gap-2'>
            {socialMediaLinks.map((value, index) => {
              return (
                <Link
                  key={index}
                  href={value.url}
                  className='bg-red flex h-8 w-8 items-center justify-center rounded-full'
                >
                  {value.icon}
                </Link>
              );
            })}
          </div>
        </div>
        <div className='flex w-full max-w-[832px] justify-between'>
          {footerLinks.map((value, index) => {
            return (
              <div key={index}>
                <h3 className='text-dark-metal leading-160 text-xl font-semibold capitalize'>
                  {value.heading}
                </h3>
                <div className='flex flex-col gap-y-3 pt-5'>
                  {value.links.map((subvalue, subindex) => {
                    return (
                      <Link
                        key={subindex}
                        href={subvalue.url}
                        className='text-dark-metal leading-160 hover:text-red text-base font-normal capitalize duration-300'
                      >
                        {subvalue.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div>
            <h3 className='text-dark-metal leading-160 text-xl font-semibold capitalize '>
              Newsletter
            </h3>
            <div className='flex flex-col gap-y-3 pt-5'>
              <Link
                href='/'
                className='text-dark-metal leading-160 hover:text-red text-base font-normal capitalize duration-300'
              >
                Stay up to date
              </Link>
            </div>
            <form
              onSubmit={subscribeEmailhandler}
              className='max-w-[340px] pt-3'
            >
              <label
                htmlFor='email'
                className='shadow-footer-input flex items-center rounded-full border border-black border-opacity-15 px-2.5 py-2 hover:border-red duration-300'
              >
                <input
                  required
                  type='email'
                  value={emailInput}
                  placeholder='Your email '
                  className='h-full w-full px-4 outline-none'
                  id='email'
                  onChange={(e) => {
                    setEmailInput(e.target.value);
                  }}
                />
                <button
                  type='submit'
                  className='bg-red leading-160 rounded-full px-10 py-[15px] text-base font-semibold text-white'
                >
                  Subscribe
                </button>
              </label>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div className='bg-footer-border-gradient h-[1px]'></div>
      <div className='text-dark-metal leading-160 px-6 py-4 text-center text-base font-normal capitalize'>
        Copyright 2024 ceramicsolutions.com all rights reserved
      </div>
    </>
  );
};

export default Footer;
