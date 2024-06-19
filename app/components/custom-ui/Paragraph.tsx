import React from 'react'
type ParagraphProps = {
  children:string,
  left?:Boolean,
  className?:String,
  right?:Boolean,
  maxWidth?:Number,
  small?:Boolean,
  white?:Boolean,
}
const Paragraph = ({children,className,left,right,maxWidth,small,white}:ParagraphProps) => {
  return (
    <p style={{maxWidth:`${maxWidth && maxWidth}px`}} className={`${className && className} ${left?" text-left ml-0 mr-auto":right?" mr-0 ml-auto text-right":"text-center mx-auto"} ${small ?"text-sm md:text-base":"text-base md:text-lg"} ${white ?"text-white":"text-black"} font-normal !leading-160 `}>{children}</p>
  )
}

export default Paragraph