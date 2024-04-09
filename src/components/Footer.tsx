import Link from "next/link";
import { Button } from "./ui/moving-border";

// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-slate-800 text-ghost-white p-2 flex flex-col gap-2 justify-center items-center">
      
      <Link href="https://www.linkedin.com/in/-hammad/" target="_blank">
          <Button
            borderRadius="1.75rem"
            // containerClassName=""
            className=" bg-slate-700 text-ghost-white border-neutral-200"
          >
            Lets Connect
          </Button>
      </Link>
      <h6 className="text-slate-300 text-sm tracking-tighter">
       Developed By Muhammad Hammad.
      </h6>
    </footer>
  );
}
