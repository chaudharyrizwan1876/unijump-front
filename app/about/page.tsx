"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary/10 font-sans">
      <Header />

      {/* Main Content */}
      <main className="pt-8 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center">

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center w-full mb-20">
          <div className="mb-6 flex justify-center">
            <Image
              src="/logouni.png"
              alt="UniJump Logo"
              width={80}
              height={40}
              className="w-[60px] md:w-[60px] lg:w-[70px] h-auto"
              priority
            />
          </div>

          <div className="w-full">
            <h1 className="text-xl md:text-3xl lg:text-[2.2rem] font-bold text-navy-900 leading-[1.25] tracking-tight max-w-3xl mx-auto">
              Agencia especialista en educación internacional y convalidación de créditos
            </h1>

            <h2 className="mt-8 md:mt-10 text-base md:text-lg lg:text-xl font-medium text-navy-900/80 tracking-tight">
              Queremos redefinir el acceso a la universidad
            </h2>
          </div>

          <div className="w-full flex justify-center mt-14">
            <div className="max-w-2xl border-l-[1px] border-primary/50 pl-6 py-1 text-left">
              <p className="text-base md:text-lg lg:text-xl font-normal text-navy-900/90 leading-[1.8] italic">
                Transformamos el futuro de los estudiantes de FP con educación internacional y convalidación de créditos, impulsando una nueva forma de construir una carrera universitaria.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="w-full space-y-12 mb-28 pt-16 border-t border-slate-200">
          <h2 className="text-[11px] font-bold text-navy-900 uppercase tracking-[0.4em] opacity-40 text-center">
            Nuestro enfoque
          </h2>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-lg font-bold text-navy-900">Educación internacional</h3>
              <p className="text-[15px] text-navy-900/60 leading-relaxed font-medium">
                Conectamos graduados de FP con universidades europeas seleccionadas estratégicamente.
              </p>
            </div>

            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-lg font-bold text-navy-900">Convalidación estructurada</h3>
              <p className="text-[15px] text-navy-900/60 leading-relaxed font-medium">
                Aprovechamos la formación previa para que el estudiante no tenga que empezar desde cero.
              </p>
            </div>

            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-lg font-bold text-navy-900">Ruta clara y acompañada</h3>
              <p className="text-[15px] text-navy-900/60 leading-relaxed font-medium">
                Un proceso académico definido, transparente y profesional.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="w-full bg-white/50 backdrop-blur-sm rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-sm space-y-12">
          <h2 className="text-3xl font-bold text-navy-900 tracking-tight text-center">
            Qué nos diferencia
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
            {[
              "Especialización exclusiva en graduados de FP",
              "Proceso académico estructurado",
              "Selección estratégica de universidades",
              "Acompañamiento personalizado",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    check
                  </span>
                </div>
                <span className="text-base md:text-lg font-bold text-navy-900 opacity-80">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}   