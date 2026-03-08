"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `transition-colors ${
      pathname === path
        ? "text-primary font-bold"
        : "hover:text-primary text-navy-900"
    }`;

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logouni.png"
            alt="UniJump"
            className="w-[60px] md:w-[60px] lg:w-[70px] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-semibold">

          <Link href="/about" className={linkClass("/about")}>
            Sobre UniJump
          </Link>

          <Link href="/destinos" className={linkClass("/destinos")}>
            Destinos
          </Link>

          <Link href="/como-funciona" className={linkClass("/como-funciona")}>
            Cómo funciona
          </Link>

          <Link href="/testimonios" className={linkClass("/testimonios")}>
            Testimonios
          </Link>

          <Link href="/login" className={linkClass("/login")}>
            Login
          </Link>

        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/evaluate"
            className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-secondary transition-all shadow-lg shadow-primary/20"
          >
            Evaluar perfil
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center"
        >
          <span className="material-symbols-outlined text-3xl text-navy-900">
            menu
          </span>
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-6 flex flex-col gap-5 font-semibold">

          <Link href="/about" className={linkClass("/about")}>
            Sobre UniJump
          </Link>

          <Link href="/destinos" className={linkClass("/destinos")}>
            Destinos
          </Link>

          <Link href="/como-funciona" className={linkClass("/como-funciona")}>
            Cómo funciona
          </Link>

          <Link href="/testimonios" className={linkClass("/testimonios")}>
            Testimonios
          </Link>

          <Link href="/login" className={linkClass("/login")}>
            Login
          </Link>

          <Link
            href="/evaluate"
            className="bg-primary text-white px-6 py-4 rounded-xl text-center font-bold mt-3"
          >
            Evaluar perfil
          </Link>

        </div>
      )}
    </header>
  );
}