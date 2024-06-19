import Link from "next/link";
import { cn } from "@/app/utils/helpers";
type NextLinkButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  header?: boolean;
}

export function CommonButton({
  children,
  className,
  href,
  header,
}: NextLinkButtonProps) {
  const buttonHeader =
    "py-[13px] px-5 !leading-126 inline-flex justify-center items-center gap-x-2.5";
  const ctaClass = `${className && className} capitalize font-bold text-white rounded-14 bg-red hover:text-black transition-all duration-300 ease-linear hover:shadow-[0_-64px_0_0_#ffffff_inset] border border-solid border-transparent hover:border-red
       ${header ? buttonHeader : "text-lg px-8 py-5 !leading-120 inline-block"}`;
  return (
    <>
      {href ? (
        <Link  href={href} className={ctaClass} >
     {children}
        </Link>
      ) : (
        <button className={ctaClass}>{children}</button>
      )}
    </>
  );
}
