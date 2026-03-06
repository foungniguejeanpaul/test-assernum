import React from "react";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-red-500 overflow-hidden">
      <Image
        src="/images/background-image.png"
        alt="background vector"
        fill
        priority
        className="object-contain opacity-40 pointer-events-none"
      />

      <div className="relative w-100">
        <div className="absolute inset-0 rounded-2xl bg-red-300 translate-x-3 translate-y-3"></div>
        <div className="relative z-10 bg-white rounded-full">
          {children}
        </div>
      </div>
    </div>
  );
}
