"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary/10">
      <Header />

      {/* SECCIÓN: LA COMUNIDAD UNIJUMP */}
      <main className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            La comunidad UniJump
          </h1>
          <p className="text-navy-900 text-lg md:text-xl font-medium max-w-2xl mx-auto opacity-80">
            Alumni UniJump que ya han completado su grado universitario en destinos de primer nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              name: "Cesar Baraona",
              fp: "Marketing y Publicidad",
              uni: "Irlanda – Dublin",
              program: "Business Management",
              phrase:
                "“Continuar mis estudios en el extranjero fue el siguiente paso natural en mi carrera.”",
              img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=500",
            },
            {
              name: "Lucía Fernández",
              fp: "Administración y Finanzas",
              uni: "Reino Unido",
              program: "International Marketing",
              phrase:
                "“El proceso de convalidación fue increíblemente sencillo gracias al equipo de UniJump.”",
              img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=500",
            },
            {
              name: "Guillermo Garnés",
              fp: "Comercio Internacional",
              uni: "Irlanda – Dublin",
              program: "Finance & Fintech",
              phrase:
                "“Vivir y estudiar en una capital europea ha cambiado totalmente mi perspectiva profesional.”",
              img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=500",
            },
          ].map((student, i) => (
            <div key={i} className="group flex flex-col gap-8">
              <div className="aspect-[4/5] rounded-[32px] overflow-hidden bg-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-slate-200/50">
                <img
                  src={student.img}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                  alt={student.name}
                />
              </div>

              <div className="space-y-6 px-2">
                <div className="space-y-1">
                  <p className="text-[11px] font-bold text-primary uppercase tracking-[0.15em]">
                    {student.fp}
                  </p>
                  <h3 className="text-2xl font-bold text-navy-900">
                    {student.name}
                  </h3>
                </div>

                <div className="flex flex-col gap-2 text-sm text-navy-900 font-medium opacity-70">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">
                      location_on
                    </span>
                    {student.uni}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">
                      school
                    </span>
                    {student.program}
                  </div>
                </div>

                <p className="text-base text-navy-900 italic leading-relaxed font-medium opacity-90">
                  {student.phrase}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-center gap-8 text-center">
          <p className="text-xl md:text-2xl font-bold text-navy-900">
            ¿Quieres ser el siguiente?
          </p>

          <Link
            href="/evaluate"
            className="bg-primary text-white px-12 py-5 rounded-2xl font-bold text-base hover:bg-secondary hover:translate-y-[-2px] transition-all shadow-xl shadow-primary/20 flex items-center gap-3 uppercase tracking-widest"
          >
            Evaluar mi perfil ahora
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