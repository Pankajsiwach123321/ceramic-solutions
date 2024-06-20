import React from "react";
type PrimaryHeadingProps = {
  children: String;
  className?: String;
  left?: Boolean;
  right?: Boolean;
  maxWidth?: number; 
  white?: string; 
};
const PrimaryHeading = ({
  children,
  className,
  left,
  right,
  maxWidth,white
}: PrimaryHeadingProps) => {
  return (
    <h2 style={{maxWidth:`${maxWidth && maxWidth}px`}} className={`${className && className} ${left?" text-left ml-0 mr-auto":right?" mr-0 ml-auto text-right":"text-center mx-auto"} ${white?"text-white":"text-black"} font-semibold  text-[clamp(32px,5.46875vw,56px)] capitalize !leading-126`}>{children}</h2>
  )
}

export default PrimaryHeading;
