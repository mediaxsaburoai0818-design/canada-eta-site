"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Strona główna", href: "/" },
    { label: "Czym jest eTA?", href: "/eta-info/what-is-eta/" },
    { label: "Jak złożyć wniosek", href: "/eta-info/application/" },
    { label: "Opłaty", href: "/eta-info/fee/" },
    { label: "FAQ", href: "/faq/" },
  ];

  return (
    <header className="bg-[#8B0000] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
            🍁
          </div>
          <div>
            <span className="text-xl font-bold tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              Canada eTA Online
            </span>
            <span className="hidden sm:block text-xs text-white/70">
              Elektroniczna Autoryzacja Podróży
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/eta-info/application/"
            className="ml-3 px-5 py-2 bg-white text-[#8B0000] rounded-md text-sm font-bold hover:bg-white/90 transition-colors shadow-md"
          >
            Złóż wniosek eTA
          </Link>
        </nav>

        <button
          className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <nav className="lg:hidden bg-[#6B0000] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-3 text-sm font-medium hover:bg-white/10 rounded-md transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/eta-info/application/"
              className="block mt-2 mb-2 px-5 py-3 bg-white text-[#8B0000] rounded-md text-sm font-bold text-center hover:bg-white/90 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Złóż wniosek eTA
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
