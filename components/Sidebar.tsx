"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const getLinkClasses = (path: string, exact: boolean = false) => {
    const isActive = exact
      ? pathname === path
      : pathname.startsWith(path);

    return `flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] font-bold transition-all ${
      isActive
        ? "text-white bg-white/10"
        : "text-white/60 hover:bg-white/5 hover:text-white"
    }`;
  };

  return (
    <aside className="w-72 bg-navy-800 border-r border-white/10 flex flex-col fixed h-full z-20">
      <div className="pl-6 pt-8 pr-8 pb-8">
        <div className="flex flex-col items-start gap-1">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white tracking-tight">
              UniJump
            </span>
          </Link>
          <span className="text-[10px] font-bold text-white/50 tracking-[0.2em] uppercase pl-1 mt-2">
            Student Portal
          </span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <Link
          href="/dashboard"
          className={getLinkClasses("/dashboard", true)}
        >
          <span className="material-symbols-outlined text-lg">
            dashboard
          </span>
          Dashboard
        </Link>

        <Link
          href="/dashboard/documents"
          className={getLinkClasses("/dashboard/documents")}
        >
          <span className="material-symbols-outlined text-lg">
            description
          </span>
          Documentos
        </Link>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-white/60 hover:bg-white/5 hover:text-white rounded-xl text-[13px] font-bold transition-all group"
        >
          <span className="material-symbols-outlined text-white/30 group-hover:text-white transition-colors text-lg">
            payments
          </span>
          Pagos
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-white/60 hover:bg-white/5 hover:text-white rounded-xl text-[13px] font-bold transition-all group"
        >
          <span className="material-symbols-outlined text-white/30 group-hover:text-white transition-colors text-lg">
            assignment_turned_in
          </span>
          Checklist
        </a>
      </nav>

      <div className="p-6 border-t border-white/10">
        <div className="bg-white/5 rounded-2xl p-4 flex items-center gap-3 border border-white/10">
          <img
            className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10"
            src="https://picsum.photos/seed/counselor/100"
            alt="Counselor"
          />
          <div>
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider">
              Asesor asignado
            </p>
            <p className="text-sm font-bold text-white">
              Elena Martínez
            </p>
          </div>
        </div>

        <button className="mt-4 w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-xl font-bold text-[12px] transition-all shadow-lg shadow-green-900/20 uppercase tracking-widest">
          <span className="material-symbols-outlined text-lg">chat</span>
          WhatsApp Soporte
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;