import React from 'react'
type WhiteCardProps = React.ComponentPropsWithoutRef<"div"> & {
  children: React.ReactNode;
  border:Boolean
};
const WhiteCard = ({ children, className,border,...rest }: WhiteCardProps) => {
  return (
    <div className={`${className} bg-white p-6 rounded-6 ${border ? "border border-solid border-black/10 hover:border-transparent hover:shadow-cards": "border border-solid hover:border-black/10 border-transparent shadow-cards hover:shadow-none"}  transition-all duration-300 ease-linear`}> {children}</div>
  )
}

export default WhiteCard