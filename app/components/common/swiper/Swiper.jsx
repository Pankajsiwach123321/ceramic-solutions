"use client";
import { useEffect, useRef } from "react";
import { injectStyle } from "react-toastify/dist/inject-style";
import { register } from "swiper/element/bundle";

export default function Swiper(props) {
  const swiperRef = useRef(null);
  const { children, ...rest } = props;

  useEffect(() => {
    // Register Swiper web component
    register();

    // pass component props to parameters
    const params = {
      ...rest,
      injectStyles: [
        `.swiper-pagination-bullet {
          opacity: 1 !important;
        }

        .swiper-pagination-bullet-active {
          background: linear-gradient(
            83.69deg,
            #00bcd4 -9.02%,
            #3145ec 149.26%
          ) !important;
          opacity: 1 !important;
          width: 12px !important;
          height: 12px !important;
          border: transparent !important;
        }

        .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          opacity: 1 !important;
          color: transparent !important;
          border-radius: 25px !important;
          border: 0.5px solid #00bcd4;
          position: unset !important;
          transform: unset !important;
        }
        .swiper-pagination {
          position: absolute;
          text-align: center;
          margin-bottom: -8px;
          transition: 300ms opacity;
          transform: translate3d(0, 0, 0);
          z-index: 10;
        }
        .swiper {
          padding-bottom: 68px !important;
        }

        .swiper-wrapper {
          display: flex !important;
          align-items: center !important;
        }
        `,
      ],
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  });

  return (
    <swiper-container init='false' ref={swiperRef}>
      {children}
    </swiper-container>
  );
}

export function SwiperSlides(props) {
  const { children, ...rest } = props;

  return <swiper-slide {...rest}>{children}</swiper-slide>;
}
