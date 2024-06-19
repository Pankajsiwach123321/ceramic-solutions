"use client";
import React, { useState } from "react";
import { frequentQuestions } from "../common/Helper";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Paragraph from "../custom-ui/Paragraph";
import { FaqArrow } from "../common/Icons";

const Faqs = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(-1); // State to track expanded accordion item index

  // Function to toggle accordion items
  const toggleAccordion = (index: number) => {
    setExpandedQuestion(expandedQuestion === index ? -1 : index);
  };
  return (
    <div className='container py-20 sm:py-24 lg:py-[140px]'>
      <PrimaryHeading>Frequently Asked Questions</PrimaryHeading>
      <Paragraph className='max-w-[592px] pb-2 pt-5 sm:pb-8'>
        Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
        primasofi dede facebooka: förutom tivaligt. Fejkade
      </Paragraph>
      {frequentQuestions.map((value, index) => (
        <div key={index} className='mx-auto w-full max-w-[992px] pt-4 md:pt-6'>
          {/* Accordion item container */}
          <div className='shadow-faq-card w-full rounded-2xl px-4 py-2 sm:py-[21px] md:px-5'>
            {/* Accordion button */}
            <button
              type='button'
              className='flex min-h-[78px] w-full items-center justify-between gap-4 text-left text-base font-normal !leading-[166%] text-black sm:min-h-0 sm:text-lg '
              onClick={() => toggleAccordion(index)}
              // aria-expanded={expandedQuestion === index}
              aria-controls={`faqs-text-${index}`}
            >
              {/* Title of the accordion item */}
              {value.question}
              <span
                className={`duration-300 ${expandedQuestion === index ? "rotate-180" : ""}`}
              >
                <FaqArrow />
              </span>
            </button>
            {/* Accordion content */}
            <div
              id={`faqs-text-${index}`}
              role='region'
              aria-labelledby={`faqs-title-${index}`}
              className={`grid overflow-hidden text-base  text-slate-600 transition-all duration-300 ease-in-out ${
                expandedQuestion === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              {/* Description of the accordion item */}
              <div className='overflow-hidden'>
                <p className=' pt-3 text-sm font-normal !leading-[140%] sm:text-base'>
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
