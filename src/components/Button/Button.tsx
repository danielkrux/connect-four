import clsx from "clsx";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  children: string;
  className?: string;
  variant?: "yellow" | "white" | "purple" | "pink";
  href?: string;
} & React.ComponentProps<"button">;

export default function Button({
  children,
  variant = "yellow",
  className,
  href,
  ...props
}: ButtonProps) {
  const cls = clsx(
    className,
    "p-5 rounded border-black border-3 shadow-container uppercase flex self-stretch text-m",
    {
      "bg-yellow": variant === "yellow",
      "bg-white": variant === "white",
      "bg-purple": variant === "purple",
      "bg-pink": variant === "pink",
    }
  );

  if (!href) {
    return (
      <button {...props} className={cls}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href ?? ""} className={cls}>
      {children}
    </Link>
  );
}
