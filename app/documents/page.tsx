"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import { DocStatus } from "@/types";

export default function DocumentsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 ml-72">
        <div className="p-10 max-w-7xl mx-auto space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              <span>Student Area</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span className="text-navy-900 opacity-40">Documents</span>
            </div>
            <h1 className="text-4xl font-extrabold text-navy-900 tracking-tight">
              Document Checklist & Management
            </h1>
            <p className="text-navy-900 text-lg leading-relaxed max-w-3xl opacity-80">
              Upload the required documents to move your application to{" "}
              <span className="text-primary font-bold">
                PHASE 3: UNIVERSITY PLACEMENT
              </span>
              . Make sure all scans are clear and readable.
            </p>
          </div>

          <div className="bg-white border-2 border-dashed border-primary/20 rounded-[2.5rem] p-16 flex flex-col items-center justify-center text-center space-y-6 hover:border-primary/40 transition-colors cursor-pointer group shadow-sm">
            <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-4xl">
                cloud_upload
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-navy-900">
                Drag & drop files here
              </h3>
              <p className="text-sm text-navy-900 opacity-60 font-medium">
                Supported formats: PDF, JPG, PNG (Max 10MB per file)
              </p>
            </div>
            <button className="bg-primary text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:bg-primary/90">
              Browse Files
            </button>
          </div>

          <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead className="bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                <tr>
                  <th className="px-8 py-4">Document Name</th>
                  <th className="px-8 py-4">Required</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4">Comments</th>
                  <th className="px-8 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                <DocumentRow
                  name="Academic Transcript"
                  icon="description"
                  required={true}
                  status={DocStatus.APPROVED}
                  comments="Verified by admissions officer on Oct 12."
                />
                <DocumentRow
                  name="Passport / ID"
                  icon="badge"
                  required={true}
                  status={DocStatus.UNDER_REVIEW}
                  comments="Processing usually takes 2-3 business days."
                />
                <DocumentRow
                  name="CV / Resume"
                  icon="contact_page"
                  required={true}
                  status={DocStatus.PENDING}
                  comments="No document uploaded yet."
                />
                <DocumentRow
                  name="Personal Statement"
                  icon="history_edu"
                  required={true}
                  status={DocStatus.REJECTED}
                  comments="Please include more details about your vocational project."
                  commentColor="text-dark-blue"
                />
                <DocumentRow
                  name="English Certificate"
                  icon="translate"
                  required={false}
                  status={DocStatus.PENDING}
                  comments="Upload IELTS or TOEFL if available."
                />
              </tbody>
            </table>
          </div>

          <div className="bg-navy-900 rounded-[2.5rem] p-10 flex items-center gap-10 text-white relative overflow-hidden">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-3xl">
                lock
              </span>
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Phase 3: University Selection
              </h2>
              <p className="text-sm text-white opacity-60 max-w-2xl leading-relaxed">
                This section remains locked until all mandatory documents are marked as{" "}
                <span className="text-primary font-bold">"APPROVED"</span>.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <HelpCard
              icon="smart_toy"
              title="Need Help?"
              text="Book a quick call with your advisor to discuss document requirements."
            />
            <HelpCard
              icon="fact_check"
              title="Guidelines"
              text="Download the Document Guidelines PDF for specific formatting rules."
            />
            <HelpCard
              icon="security"
              title="Safe Storage"
              text="All documents are encrypted and only accessible by authorized personnel."
            />
          </div>
        </div>
      </main>
    </div>
  );
}

const DocumentRow = ({ name, icon, required, status, comments, commentColor = "text-navy-900 opacity-60" }: any) => {
  const getStatusStyles = () => {
    switch (status) {
      case DocStatus.APPROVED:
        return "bg-green-50 text-green-600 border-green-100";
      case DocStatus.UNDER_REVIEW:
        return "bg-yellow-50 text-yellow-600 border-yellow-100";
      case DocStatus.REJECTED:
        return "bg-pastel-blue text-dark-blue border-pastel-blue";
      default:
        return "bg-slate-50 text-navy-900 opacity-40 border-slate-200";
    }
  };

  return (
    <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="px-8 py-6">
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getStatusStyles()}`}>
            <span className="material-symbols-outlined text-lg">{icon}</span>
          </div>
          <span className="text-sm font-extrabold text-navy-900">{name}</span>
        </div>
      </td>
      <td className="px-8 py-6">
        <span className="text-[10px] font-bold uppercase tracking-wider">
          {required ? "Mandatory" : "Optional"}
        </span>
      </td>
      <td className="px-8 py-6">
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${getStatusStyles()}`}>
          {status}
        </span>
      </td>
      <td className={`px-8 py-6 text-xs italic ${commentColor}`}>
        {comments}
      </td>
      <td className="px-8 py-6 text-right">
        <button className="text-xs font-extrabold text-primary uppercase tracking-widest">
          Action
        </button>
      </td>
    </tr>
  );
};

const HelpCard = ({ icon, title, text }: any) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-200 flex items-start gap-5">
    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-primary shadow-sm flex-shrink-0">
      <span className="material-symbols-outlined text-2xl">{icon}</span>
    </div>
    <div className="space-y-1">
      <h4 className="font-extrabold text-navy-900">{title}</h4>
      <p className="text-xs text-navy-900 opacity-60 leading-relaxed">{text}</p>
    </div>
  </div>
);