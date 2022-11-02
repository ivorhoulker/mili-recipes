import type { AnchorHTMLAttributes } from "react";
import NextLink from "next/link";
import { clsx } from "clsx";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  onClick?: () => void;
  active?: boolean;
  href: string;
}

const Link = (props: Props) => {
  const { href, children, active, ...rest } = props;
  if (!href?.startsWith("http")) {
    return (
      <>
        <NextLink
          {...rest}
          href={href}
          className={clsx(
            "transition-color duration-300 ease-out",
            !active && "cursor-pointer hover:text-blue-400",
            active && "cursor-default py-3 font-bold"
          )}
        >
          {children}
        </NextLink>
      </>
    );
  }
  return (
    <a {...rest} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default Link;
