"use client";

import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-navy-900">
      <Sidebar />

      <main className="flex-1 ml-72">
        {/* Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 px-10 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="text-xl font-bold text-navy-900 tracking-tight">
              Estado de la Aplicación
            </h1>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              <p className="text-[10px] text-navy-900 opacity-60 font-bold uppercase tracking-wider">
                ID de Estudiante: #UJ-9842
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-navy-900 opacity-60 hover:text-primary hover:opacity-100 transition-colors bg-slate-100/50 rounded-lg">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full ring-2 ring-white"></span>
            </button>

            <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
              <div className="text-right">
                <p className="text-sm font-bold text-navy-900">
                  Mateo Rodríguez
                </p>
                <p className="text-[10px] text-primary font-bold uppercase tracking-[0.1em]">
                  Grado Superior
                </p>
              </div>
              <img
                className="w-10 h-10 rounded-full ring-2 ring-primary/20"
                src="https://picsum.photos/seed/student/100"
                alt="Profile"
              />
            </div>
          </div>
        </header>

        <div className="p-10 max-w-7xl mx-auto space-y-8">
          {/* Stepper */}
          <section className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex justify-between relative">
              <div className="absolute top-5 left-0 w-full h-[2px] bg-slate-50"></div>
              <div className="absolute top-5 left-0 w-[20%] h-[2px] bg-primary"></div>

              <Step icon="check" label="Completado" title="Perfil Creado" completed />
              <Step icon="history_edu" label="Actual" title="Documentación" active />
              <Step icon="send" label="Paso 3" title="Envío Solicitud" disabled />
              <Step icon="account_balance" label="Paso 4" title="Revisión Uni" disabled />
              <Step icon="emoji_events" label="Paso 5" title="Oferta" disabled />
              <Step icon="task_alt" label="Paso 6" title="Confirmación" disabled />
              <Step icon="airplane_ticket" label="Paso 7" title="Viaje" disabled />
            </div>
          </section>

          <div className="grid grid-cols-12 gap-8">
            {/* LEFT */}
            <div className="col-span-8 space-y-8">
              {/* CTA */}
              <div className="bg-navy-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group shadow-2xl shadow-navy-900/10">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/10 text-white opacity-80 border border-white/20 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    Acción requerida
                  </div>

                  <h2 className="text-3xl font-bold mb-3 tracking-tight">
                    Subir certificado académico
                  </h2>

                  <p className="text-white opacity-80 max-w-lg mb-8 text-lg font-medium">
                    Tu perfil está al 40%. Sube tu certificado de notas oficial para que la universidad pueda validar tu acceso.
                  </p>

                  <Link
                    href="/dashboard/documents"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-3 transition-all transform hover:scale-[1.02] shadow-lg shadow-primary/20"
                  >
                    <span className="material-symbols-outlined">
                      upload_file
                    </span>
                    Subir Documento Ahora
                  </Link>
                </div>

                <div className="absolute right-12 bottom-12 opacity-5">
                  <span className="material-symbols-outlined text-[160px]">
                    description
                  </span>
                </div>
              </div>

              {/* Documents Summary */}
              <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                  <h3 className="font-bold text-navy-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      fact_check
                    </span>
                    Listado de Documentación
                  </h3>
                  <span className="px-4 py-1.5 bg-slate-50 text-navy-900 opacity-60 text-[10px] font-bold uppercase tracking-wider rounded-full border border-slate-100">
                    En revisión
                  </span>
                </div>

                <div className="divide-y divide-slate-100">
                  <DocRow name="Copia del Pasaporte" info="Validado por UniJump el 12 de Oct, 2023" status="validated" />
                  <DocRow name="Carta de Motivación" info="En cola de revisión (Aprox. 24h)" status="pending" />
                  <DocRow name="Certificado Académico" info="Acción obligatoria para la admisión" status="required" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* Sub Components */

const Step = ({ icon, label, title, active, completed, disabled }: any) => (
  <div className={`relative z-10 flex flex-col items-center gap-3 w-28 ${disabled ? "opacity-30" : ""}`}>
    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
      completed ? "bg-primary text-white shadow-lg shadow-primary/20" :
      active ? "bg-primary text-white ring-4 ring-primary/10 scale-110 shadow-lg" :
      "bg-white border-2 border-slate-100 text-navy-900 opacity-40"
    }`}>
      <span className="material-symbols-outlined text-sm font-bold">
        {completed ? "check" : icon}
      </span>
    </div>
    <div className="text-center space-y-1">
      <p className={`text-[10px] font-bold uppercase tracking-[0.1em] ${active ? "text-primary" : "text-navy-900 opacity-40"}`}>
        {label}
      </p>
      <p className={`text-xs font-bold leading-tight ${active ? "text-primary" : "text-navy-900"}`}>
        {title}
      </p>
    </div>
  </div>
);

const DocRow = ({ name, info, status }: any) => {
  const isRequired = status === "required";

  return (
    <div className={`p-6 flex items-center justify-between hover:bg-slate-50 transition-colors ${isRequired ? "bg-primary/[0.02]" : ""}`}>
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
          status === "validated" ? "bg-green-50 text-green-600 border-green-100" :
          status === "pending" ? "bg-slate-100 text-navy-900 opacity-40 border-slate-100" :
          "bg-slate-50 border-dashed border-slate-200 text-navy-900 opacity-40"
        }`}>
          <span className="material-symbols-outlined">
            {status === "validated" ? "check_circle" : status === "pending" ? "pending" : "add_photo_alternate"}
          </span>
        </div>

        <div>
          <p className={`text-sm font-bold ${isRequired ? "text-navy-900 opacity-60" : "text-navy-900"}`}>
            {name}
          </p>
          <p className="text-[11px] text-navy-900 opacity-40 font-medium italic">
            {info}
          </p>
        </div>
      </div>

      {isRequired ? (
        <button className="bg-primary text-white px-5 py-2.5 rounded-xl text-[11px] font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20 uppercase tracking-widest">
          Subir ahora
        </button>
      ) : (
        <button className="text-[11px] font-bold text-primary hover:text-primary/70 hover:underline uppercase tracking-widest">
          {status === "validated" ? "Ver archivo" : "Editar"}
        </button>
      )}
    </div>
  );
};