import Image from "next/image";
import React from "react";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      width={58}
      height={61}
      alt="logo"
      src="/logo.svg"
    />
  );
}
