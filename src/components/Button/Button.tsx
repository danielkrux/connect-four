import clsx from "clsx";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  children: string;
  className?: string;
  variant?: "yellow" | "white" | "purple";
  href?: string;
};

export default function Button({
  children,
  variant = "yellow",
  className,
  href,
}: ButtonProps) {
  const cls = clsx(
    className,
    "p-5 rounded-2xl border-black border-3 shadow-container uppercase flex self-stretch text-m",
    {
      "bg-yellow": variant === "yellow",
      "bg-white": variant === "white",
      "bg-purple": variant === "purple",
    }
  );

  const Component = href ? Link : "button";

  return (
    <Component href={href ?? ""} className={cls}>
      {children}
    </Component>
  );
}
