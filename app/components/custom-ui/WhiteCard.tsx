import React from 'react'
type WhiteCardProps = React.ComponentPropsWithoutRef<"div"> & {
  children: React.ReactNode;
};
const WhiteCard = ({ children, className, ...rest }: WhiteCardProps) => {
  return (
    <div className={`${className} bg-white p-6 rounded-[20px]`}> {children}</div>
  )
}

export default WhiteCard