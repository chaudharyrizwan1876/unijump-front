"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-navy-900">
      {/* Header with Logo */}
      <header className="pl-6 pt-4 pr-8 pb-2">
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/logouni.png"
            alt="UniJump Logo"
            width={70}
            height={40}
            className="object-contain"
            priority
          />
        </Link>
      </header>

      {/* Login Content */}
      <main className="flex-1 flex items-center justify-center px-6 pb-20">
        <div className="w-full max-w-md space-y-10">
          <div className="space-y-2 text-center sm:text-left">
            <h1 className="text-3xl font-bold text-navy-900 tracking-tight">
              Iniciar sesión
            </h1>
            <p className="text-navy-900 font-medium opacity-80">
              Accede a tu portal académico.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  className="block text-[11px] font-bold text-navy-900 uppercase tracking-widest mb-2 px-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-primary focus:bg-white transition-all text-navy-900"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-[11px] font-bold text-navy-900 uppercase tracking-widest mb-2 px-1"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-primary focus:bg-white transition-all text-navy-900"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-base hover:bg-secondary hover:translate-y-[-2px] transition-all shadow-xl shadow-primary/20"
            >
              Iniciar sesión
            </button>
          </form>

          <div className="text-center">
            <p className="text-sm text-navy-900 font-medium opacity-80">
              ¿Aún no tienes cuenta?{" "}
              <Link
                href="/evaluate"
                className="text-primary font-bold hover:text-secondary hover:underline transition-colors"
              >
                Evalúa tu perfil
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}