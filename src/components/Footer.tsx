import Link from "next/link";
import { Button } from "./ui/moving-border";
import Image from "next/image";

// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-slate-800 text-ghost-white text-center p-5">
      <div className="flex justify-center gap-2 m-2">
        <Link
          href="https://www.linkedin.com/in/-hammad/"
          target="_blank"
          className="icon inline-flex flex-shrink-0 justify-center items-center"
        >
          <Image src="/linkedin.png" alt="linkedIn" width={25} height={25} />
        </Link>
        <Link
          href="https://github.com/DevHammad0"
          className="icon inline-flex flex-shrink-0 justify-center items-center"
          target="_blank"
        >
          <Image src="/github.png" alt="linkedIn" width={25} height={25} />
        </Link>
      </div>

      <h6 className="text-slate-300 text-sm tracking-tighter">
        Developed By Muhammad Hammad.
      </h6>
    </footer>
  );
}
