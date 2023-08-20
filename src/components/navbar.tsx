import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image
            width={130}
            height={29}
            src="/images/header-logo.svg"
            alt="Logo"
          />
        </Link>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((linkItem) => (
            <li key={linkItem.label}>
              <Link
                href={linkItem.href}
                className="font-montserrat leading-nornal text-lg text-slate-gray"
              >
                {linkItem.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <Image
            src="/icons/hamburger.svg"
            width={25}
            height={25}
            alt="hamburger"
          />
        </div>
      </nav>
    </header>
  );
}
