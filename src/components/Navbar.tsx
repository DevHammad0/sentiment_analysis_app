import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="transition-all delay-300 text-ghost-white pl-5 pr-8 py-3 flex items-center justify-between bg-slate-800 border-neutral-200">
      <Link href="/">
        <Image
          src="/sa_logo.jpeg"
          width={50}
          height={50}
          className="rounded-full"
          alt="logo"
        />
      </Link>
      <div className="flex gap-6 text-slate-200">
      <Link href="/about" className="hover:text-slate-50">About</Link>
      <Link href="/" className="hover:text-slate-50">Try it!</Link>
      </div>
    </nav>
  );
};

export default Navbar;
