import React from "react";
type PrimaryHeadingProps = {
  children: String;
  className?: String;
  left?: Boolean;
  right?: Boolean;
  maxWidth?: number;
};
const PrimaryHeading = ({
  children,
  className,
  left,
  right,
  maxWidth,
}: PrimaryHeadingProps) => {
  return (
    <h2
      style={{ maxWidth: `${maxWidth && maxWidth}px` }}
      className={`${className && className} ${left ? " ml-0 mr-auto text-left" : right ? " ml-auto mr-0 text-right" : "mx-auto text-center"} text-[clamp(32px,5.46875vw,56px)] font-semibold capitalize text-black`}
    >
      {children}
    </h2>
  );
};

export default PrimaryHeading;
