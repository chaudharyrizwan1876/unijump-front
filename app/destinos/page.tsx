"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DestinationsPage() {
  const countries = [
    { 
      country: "Irlanda", 
      img: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=600",
      info: "Programas internacionales de alta calidad en inglés." 
    },
    { 
      country: "Reino Unido", 
      img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600",
      info: "Prestigio académico mundial y capital financiera global." 
    },
    { 
      country: "Países Bajos", 
      img: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&q=80&w=600",
      info: "Líder europeo en innovación, diseño y multiculturalidad." 
    },
    { 
      country: "Alemania", 
      img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=600",
      info: "Excelencia en ingeniería, tecnología y empleabilidad." 
    },

    {
      country: "Malta",
      img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=600",
      info: "Obtén tu Bachelor europeo en un entorno internacional, 100% en inglés y con acceso directo a una comunidad académica global."
    },

    { 
      country: "Italia", 
      img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=600",
      info: "Estudia tu grado universitario en uno de los países con mayor tradición académica de Europa, combinando excelencia, cultura y proyección internacional." 
    },

    { 
      country: "Dinamarca", 
      img: "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?auto=format&fit=crop&q=80&w=600",
      info: "Fórmate en un sistema educativo innovador, práctico y reconocido por su alto nivel académico y enfoque global." 
    },

    {
      country: "Bélgica",
      img: "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&q=80&w=600",
      info: "Consigue tu título universitario en el corazón institucional de Europa, con una educación estratégica y orientada al ámbito internacional."
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary/10">
      <Header />

      {/* Main Content */}
      <main className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-10 mb-20">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              Red académica en Europa
            </h1>
            <p className="text-navy-900/60 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Universidades asociadas en ciudades estratégicas europeas.
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="/evaluate"
              className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-base hover:bg-secondary hover:translate-y-[-2px] transition-all shadow-xl shadow-primary/20 flex items-center gap-3 uppercase tracking-widest"
            >
              DESCUBRE TU DESTINO
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((dest, i) => (
            <div
              key={i}
              className="group bg-white rounded-[28px] overflow-hidden transition-all flex flex-col shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/40"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={dest.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  alt={dest.country}
                />
                <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors"></div>
              </div>

              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-navy-900 tracking-tight">
                  {dest.country}
                </h3>
                <p className="text-[14px] text-navy-900/60 leading-relaxed font-medium">
                  {dest.info}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}