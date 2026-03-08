"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary/10">
      <Header />

      {/* Hero Section */}
      <section className="px-6 md:px-12 pt-28 pb-40 max-w-7xl mx-auto text-center relative">
        <div className="relative z-10 flex flex-col items-center space-y-12">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-navy-900">
            <span className="material-symbols-outlined text-[14px]">
              public
            </span>
            Tu pasaporte al éxito global
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-navy-900 leading-[1.1] tracking-tight">
              De Grado Superior a una <br />
              <span className="text-primary">
                Universidad Internacional
              </span>
            </h1>
            <p className="text-lg md:text-xl text-navy-900 max-w-2xl mx-auto leading-relaxed font-medium">
              Convalida tus estudios de FP y accede a una titulación
              universitaria europea en tiempo récord, sin empezar desde cero.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4 w-full sm:w-auto">
            <Link
              href="/evaluate"
              className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-bold text-base flex items-center justify-center gap-3 hover:bg-secondary hover:translate-y-[-2px] transition-all shadow-xl shadow-primary/20"
            >
              Evaluar mi perfil gratis
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </Link>

            <Link
              href="/destinos"
              className="w-full sm:w-auto bg-white text-navy-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold text-base hover:bg-slate-100 transition-colors inline-block text-center"
            >
              Ver destinos
            </Link>
          </div>

          <div className="flex flex-col items-center gap-5 pt-12">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/${i + 50}/100`}
                  className="w-11 h-11 rounded-full border-2 border-white shadow-sm object-cover"
                  alt="Student"
                />
              ))}
              <div className="w-11 h-11 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center shadow-sm text-navy-900">
                <span className="text-[10px] font-bold">+500</span>
              </div>
            </div>
            <p className="text-[13px] font-semibold text-navy-900 tracking-wide">
              Estudiantes que ya han saltado con{" "}
              <span className="text-navy-900 font-bold">UniJump</span>
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-0 right-[10%] w-72 h-72 bg-primary/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-[10%] w-72 h-72 bg-secondary/5 rounded-full blur-[100px]"></div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}