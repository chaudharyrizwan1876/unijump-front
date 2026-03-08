"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-20">
        <div className="space-y-8">
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/logouni.png"
                alt="UniJump"
                className="w-[60px] md:w-[60px] lg:w-[70px]"
              />
            </Link>
          </div>

          <p className="text-[13px] text-navy-900 leading-relaxed font-medium">
            Transformamos el futuro de los estudiantes de FP a través de la
            educación internacional y la convalidación de créditos.
          </p>
        </div>

        <div className="space-y-6">
          <h5 className="font-bold text-navy-900 text-[13px] uppercase tracking-widest">
            Plataforma
          </h5>

          <ul className="text-[13px] text-navy-900 space-y-4 font-semibold">
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                Sobre UniJump
              </Link>
            </li>

            <li>
              <Link href="/destinos" className="hover:text-primary transition-colors">
                Destinos
              </Link>
            </li>

            <li>
              <Link href="/como-funciona" className="hover:text-primary transition-colors">
                Cómo funciona
              </Link>
            </li>

            <li>
              <Link href="/testimonios" className="hover:text-primary transition-colors">
                Testimonios
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="font-bold text-navy-900 text-[13px] uppercase tracking-widest">
            Soporte
          </h5>

          <ul className="text-[13px] text-navy-900 space-y-4 font-semibold">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Ayuda y FAQ
              </a>
            </li>

            <li>
              <a
                href="mailto:info@unijump.es"
                className="hover:text-primary transition-colors"
              >
                info@unijump.es
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="font-bold text-navy-900 text-[13px] uppercase tracking-widest">
            Newsletter
          </h5>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-slate-100 border border-slate-200 rounded-xl px-5 py-3 text-[13px] focus:outline-none focus:border-primary/40 focus:bg-white transition-all"
            />

            <button className="bg-primary text-white w-12 h-12 flex items-center justify-center rounded-xl hover:bg-secondary transition-all shadow-md shadow-primary/10">
              <span className="material-symbols-outlined text-lg">
                send
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-navy-900 font-bold uppercase tracking-widest">
        <p>© 2024 UniJump. All rights reserved.</p>

        <div className="flex gap-8">
          <a href="#" className="hover:text-navy-900 transition-colors">
            Privacidad
          </a>

          <a href="#" className="hover:text-navy-900 transition-colors">
            Términos
          </a>

          <a href="#" className="hover:text-navy-900 transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}