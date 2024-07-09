import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-x-4 h-10 hover:opacity-80 transition duration-300">
      <Image src="/logo.png" width={40} height={40} alt="Faruk Ipek" className="rounded-full" />
      <div className="flex flex-col h-full justify-between">
        <span className="font-semibold text-lg text-white leading-none w-max">Faruk Ipek</span>
        <span className="text-sm text-secondary leading-none w-max">Front-end Developer</span>
      </div>
    </Link>
  );
}
