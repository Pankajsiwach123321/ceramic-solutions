import Link from "next/link";
import { cn } from "@/app/utils/helpers";

interface NextLinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

export function CommonButton({
  children,
  className,
  href,
  ...rest
}: NextLinkButtonProps) {
  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        "flex h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        className,
      )}
    >
      {children}
    </Link>
  );
}
