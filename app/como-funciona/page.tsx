"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary/10">
      <Header />

      {/* Main Content */}
      <main className="py-16 md:py-24 lg:py-32 px-6 max-w-7xl mx-auto min-h-[60vh] flex flex-col justify-center">

        <div className="text-center space-y-4 mb-16 md:mb-24">
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            Cómo funciona
          </h1>

          <p className="text-navy-900/60 text-base md:text-xl font-medium max-w-2xl mx-auto">
            Un proceso estructurado para acompañarte en cada etapa.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {[
            {
              id: "01",
              title: "Evaluación de perfil",
              desc: "Analizamos tu Grado Superior y definimos la mejor ruta académica.",
            },
            {
              id: "02",
              title: "Aplicación universitaria",
              desc: "Preparamos y gestionamos tu solicitud con la documentación necesaria.",
            },
            {
              id: "03",
              title: "Oferta y confirmación",
              desc: "Te guiamos en la aceptación de la oferta y los trámites de matrícula.",
            },
            {
              id: "04",
              title: "Preparación final",
              desc: "Te acompañamos en los pasos previos al inicio: inscripción y organización.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="group p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col gap-6 min-h-[220px]"
            >

              <div className="flex items-center gap-4">
                <span className="text-4xl font-black text-primary md:text-navy-900/5 md:group-hover:text-primary transition-colors duration-500 tracking-tighter">
  {step.id}
</span>

                <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-primary transition-colors duration-500"></div>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-navy-900 leading-tight">
                {step.title}
              </h3>

              {/* Mobile par visible, desktop par hover */}
              <p className="text-sm md:text-base text-navy-900/60 leading-relaxed md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 font-medium">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-24 flex justify-center">
          <Link
            href="/evaluate"
            className="bg-primary text-white px-10 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-sm md:text-base hover:bg-secondary hover:translate-y-[-2px] transition-all shadow-xl shadow-primary/20 flex items-center gap-3 uppercase tracking-widest"
          >
            Iniciar evaluación
            <span className="material-symbols-outlined text-xl">
              arrow_forward
            </span>
          </Link>
        </div>

      </main>

      {/* Footer Component */}
      <Footer />

    </div>
  );
}