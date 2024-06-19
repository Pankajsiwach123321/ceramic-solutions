import React from 'react'
type PrimaryHeadingProps = {
  children: String;
  className?:String;
  left?: Boolean,
  right?:  Boolean,
  maxWidth?: number
};
const PrimaryHeading = ({ children, className,left,right,maxWidth,}: PrimaryHeadingProps) => {
  return (
    <h2 style={{maxWidth:`${maxWidth && maxWidth}px`}} className={`${className && className} ${left?" text-left ml-0 mr-auto":right?" mr-0 ml-auto text-right":"text-center mx-auto"} font-semibold text-black text-[clamp(32px,5.46875vw,56px)] capitalize`}>{children}</h2>
  )
}

export default PrimaryHeading