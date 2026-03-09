
'use client';

import Link from "next/link";
import { APP_CONFIG } from "@/lib/constants";
import Image from "next/image";

import { usePathname } from "next/navigation";

export function Navbar() {

  const pathname = usePathname();

  console.log('pathname',pathname);

  return (
    <header className="rounded-xl flex flex-row justify-between  items-center bg-white px-6 py-8 h-12">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-sm font-semibold"
        >
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>

        <nav className="flex items-center gap-8 text-xs sm:text-sm">
          {APP_CONFIG.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-semibold transition-colors py-2 px-4 rounded-xl hover:bg-red-500 hover:text-white ${pathname ==item.href ? "bg-red-500 text-white":""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <span>
          <Image src="/images/avatar.png" alt="Avatar" width={30} height={30} />
        </span>
    </header>
  );
}
