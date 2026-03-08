"use client";

import { useState } from "react";
import Link from "next/link";

type Step = "welcome" | 1 | 2 | 3 | 4 | "success";

interface FormData {
  degree: string;
  englishLevel: string;
  startDate: string;
  name: string;
  email: string;
  phone: string;
}

export default function EvaluationPage() {
  const [step, setStep] = useState<Step>("welcome");
  const [formData, setFormData] = useState<FormData>({
    degree: "",
    englishLevel: "",
    startDate: "",
    name: "",
    email: "",
    phone: "",
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step === "welcome") setStep(1);
    else if (typeof step === "number" && step < 4)
      setStep((step + 1) as Step);
    else if (step === 4) setStep("success");
  };

  const prevStep = () => {
    if (typeof step === "number" && step > 1)
      setStep((step - 1) as Step);
    else if (step === 1) setStep("welcome");
  };

  const progress =
    typeof step === "number"
      ? (step / 4) * 100
      : step === "success"
      ? 100
      : 0;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center text-navy-900">

      {/* Header */}
      <header className="w-full px-6 py-8 flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex-shrink-0">
  <img
    src="/logouni.png"
    alt="UniJump"
    className="h-18 w-auto"
  />
</Link>

        {step !== "welcome" && step !== "success" && (
          <button
            onClick={prevStep}
            className="text-navy-900 hover:text-primary transition-colors flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest"
          >
            <span className="material-symbols-outlined text-lg">
              arrow_back
            </span>
            Atrás
          </button>
        )}
      </header>

      {/* Progress Bar */}
      {typeof step === "number" && (
        <div className="w-full max-w-md px-6 mt-4">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
              Paso {step} de 4
            </span>
            <span className="text-[10px] font-bold text-navy-900 opacity-60 uppercase tracking-[0.2em]">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Form Container */}
      <main className="flex-1 w-full max-w-2xl px-6 flex flex-col justify-center pb-20 mt-10">

        {/* WELCOME */}
        {step === "welcome" && (
          <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-20 h-20 bg-primary/5 rounded-[2rem] flex items-center justify-center mx-auto border border-primary/10">
  <img
    src="/logouni.png"
    alt="UniJump"
    className="h-14 w-auto"
  />
</div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 tracking-tight">
                Evaluación Académica Rápida
              </h1>

              <p className="text-navy-900 text-lg font-medium opacity-80">
                Descubre si puedes acceder a una universidad internacional en
                menos de 1 minuto.
              </p>
            </div>

            <button
              onClick={nextStep}
              className="bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-secondary hover:translate-y-[-2px] transition-all shadow-xl shadow-primary/20 inline-flex items-center gap-3"
            >
              Comenzar
              <span className="material-symbols-outlined">play_arrow</span>
            </button>
          </div>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-bold text-navy-900 tracking-tight">
              ¿Qué Grado Superior has estudiado?
            </h2>

            <div className="grid grid-cols-1 gap-3">
              {[
                "Administración y Finanzas",
                "Marketing y Publicidad",
                "Comercio Internacional",
                "Gestión de Ventas y Espacios Comerciales",
                "Asistencia a la Dirección",
                "DAM",
                "DAW",
                "ASIR",
                "Otro Grado Superior",
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    updateFormData("degree", option);
                    nextStep();
                  }}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all font-bold text-sm flex items-center justify-between group ${
                    formData.degree === option
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-slate-200 bg-white text-navy-900 hover:border-primary/20 hover:bg-white"
                  }`}
                >
                  {option}

                  <span
                    className={`material-symbols-outlined text-lg transition-transform group-hover:translate-x-1 ${
                      formData.degree === option
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    arrow_forward
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-navy-900 tracking-tight">
                ¿Cuál es tu nivel aproximado de inglés?
              </h2>

              <p className="text-navy-900 text-sm font-medium opacity-60">
                No necesitas certificado en este momento.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {["Bajo", "Intermedio", "Alto"].map((level) => (
                <button
                  key={level}
                  onClick={() => {
                    updateFormData("englishLevel", level);
                    nextStep();
                  }}
                  className={`w-full p-6 rounded-[24px] border-2 transition-all font-bold text-lg flex items-center gap-5 ${
                    formData.englishLevel === level
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-slate-200 bg-white text-navy-900 hover:border-primary/20 hover:bg-white"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      formData.englishLevel === level
                        ? "bg-primary text-white"
                        : "bg-slate-100 text-navy-900 opacity-60"
                    }`}
                  >
                    <span className="material-symbols-outlined text-xl">
                      translate
                    </span>
                  </div>

                  {level}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-bold text-navy-900 tracking-tight">
              ¿Cuándo te gustaría empezar?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Este año", icon: "calendar_today" },
                { label: "El próximo curso", icon: "event" },
                { label: "En 1 año", icon: "schedule" },
                { label: "Solo quiero información", icon: "info" },
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => {
                    updateFormData("startDate", opt.label);
                    nextStep();
                  }}
                  className={`flex flex-col gap-4 p-8 rounded-[32px] border-2 transition-all text-left group ${
                    formData.startDate === opt.label
                      ? "border-primary bg-primary/5"
                      : "border-slate-200 bg-white hover:border-primary/20 hover:bg-white"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      formData.startDate === opt.label
                        ? "bg-primary text-white"
                        : "bg-slate-100 text-navy-900 opacity-40"
                    }`}
                  >
                    <span className="material-symbols-outlined">
                      {opt.icon}
                    </span>
                  </div>

                  <span
                    className={`font-bold text-lg ${
                      formData.startDate === opt.label
                        ? "text-primary"
                        : "text-navy-900"
                    }`}
                  >
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">

            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-navy-900 tracking-tight">
                Recibe tu evaluación personalizada
              </h2>

              <p className="text-navy-900 text-sm font-medium opacity-60">
                Te contactaremos en menos de 24 horas.
              </p>
            </div>

            <form
              className="space-y-5"
              onSubmit={async (e) => {
                e.preventDefault();

                try {
                  const res = await fetch("/api/evaluations", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                  });

                  const data = await res.json();

                  if (data.success) {
                    nextStep();
                  } else {
                    alert("Something went wrong");
                  }

                } catch (error) {
                  console.error("Submit Error:", error);
                  alert("Server error");
                }
              }}
            >

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-navy-900 uppercase tracking-widest pl-1">
                  Nombre Completo
                </label>

                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    updateFormData("name", e.target.value)
                  }
                  placeholder="Tu nombre"
                  className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary focus:bg-white transition-all text-navy-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-navy-900 uppercase tracking-widest pl-1">
                  Email Académico
                </label>

                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    updateFormData("email", e.target.value)
                  }
                  placeholder="ejemplo@email.com"
                  className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary focus:bg-white transition-all text-navy-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-navy-900 uppercase tracking-widest pl-1">
                  Teléfono (WhatsApp)
                </label>

                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    updateFormData("phone", e.target.value)
                  }
                  placeholder="+34 000 000 000"
                  className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary focus:bg-white transition-all text-navy-900"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-base mt-4 hover:bg-secondary hover:translate-y-[-2px] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 uppercase tracking-widest"
              >
                Enviar Solicitud
                <span className="material-symbols-outlined">send</span>
              </button>

            </form>
          </div>
        )}

        {/* SUCCESS */}
        {step === "success" && (
          <div className="text-center space-y-10 animate-in zoom-in duration-500">

            <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm border border-green-100">
              <span className="material-symbols-outlined text-5xl">
                verified
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-navy-900 tracking-tight">
                ¡Evaluación Recibida!
              </h2>

              <p className="text-navy-900 text-lg font-medium max-w-md mx-auto leading-relaxed opacity-80">
                Hemos recibido tu perfil. Un asesor académico revisará
                tu caso y te contactará en breve con tus opciones.
              </p>
            </div>

            <div className="flex flex-col gap-4 max-w-sm mx-auto">

              <a
                href="https://wa.me/yourwhatsappnumber"
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-white py-5 rounded-2xl font-bold text-base flex items-center justify-center gap-3 hover:translate-y-[-2px] transition-all shadow-xl shadow-green-100"
              >
                <span className="material-symbols-outlined">
                  chat
                </span>
                Hablar por WhatsApp ahora
              </a>

              <Link
                href="/"
                className="text-navy-900 font-bold text-[11px] uppercase tracking-[0.2em] hover:text-primary transition-colors pt-4 opacity-60"
              >
                Volver al inicio
              </Link>

            </div>

          </div>
        )}

      </main>

    </div>
  );
}