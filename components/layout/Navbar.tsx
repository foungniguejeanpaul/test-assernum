import Link from "next/link";
import { APP_CONFIG } from "@/lib/constants";
import { Container } from "./Container";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="rounded-xl bg-white px-4">
      <Container className="flex h-14 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold"
        >
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={150}
            height={150}
          />{" "}
        </Link>

        <nav className="flex items-center gap-8 text-xs sm:text-sm">
          {APP_CONFIG.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-semibold transition-colors py-2 px-4 rounded-xl hover:text-foreground hover:bg-red-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <span>
          <Image src="/images/avatar.png" alt="Avatar" width={20} height={20} />
        </span>
      </Container>
    </header>
  );
}
