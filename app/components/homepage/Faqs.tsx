"use client";
import React, { useState } from "react";
import { frequentQuestions } from "../common/Helper";

const Faqs = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(-1); // State to track expanded accordion item index

  // Function to toggle accordion items
  const toggleAccordion = (index: number) => {
    setExpandedQuestion(expandedQuestion === index ? -1 : index);
  };
  return (
    <div className='container mx-auto'>
      {frequentQuestions.map((value, index) => (
        <div key={index} className='mx-auto w-full max-w-[992px] pb-6'>
          {/* Accordion item container */}
          <div className='shadow-faq-card w-full rounded-2xl px-5 py-[21px]'>
            {/* Accordion button */}
            <button
              type='button'
              className='flex w-full items-center justify-between text-left text-lg font-normal !leading-[166%] text-black '
              onClick={() => toggleAccordion(index)}
              // aria-expanded={expandedQuestion === index}
              aria-controls={`faqs-text-${index}`}
            >
              {/* Title of the accordion item */}
              {value.question}
              <span
                className={`duration-300 ${expandedQuestion === index ? "rotate-180" : ""}`}
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM14.06 9.17L10.53 12.7C10.38 12.85 10.19 12.92 10 12.92C9.81 12.92 9.62 12.85 9.47 12.7L5.94 9.17C5.65 8.88 5.65 8.4 5.94 8.11C6.23 7.82 6.71 7.82 7 8.11L10 11.11L13 8.11C13.29 7.82 13.77 7.82 14.06 8.11C14.35 8.4 14.35 8.87 14.06 9.17Z'
                    fill='#FF0000'
                  />
                </svg>
              </span>
            </button>
            {/* Accordion content */}
            <div
              id={`faqs-text-${index}`}
              role='region'
              aria-labelledby={`faqs-title-${index}`}
              className={`grid overflow-hidden text-sm  text-slate-600 transition-all duration-300 ease-in-out ${
                expandedQuestion === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              {/* Description of the accordion item */}
              <div className='overflow-hidden'>
                <p className=' pt-3 text-base font-normal !leading-[140%]'>
                  {value.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
