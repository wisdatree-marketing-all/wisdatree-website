import React from 'react';
import { X, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';
import { POLICIES_DATA, PolicyDocument } from '../data/policiesData';

interface PolicyModalProps {
  policyKey: 'rescheduling' | 'refund' | 'privacy' | null;
  onClose: () => void;
  onSelectPolicy: (key: 'rescheduling' | 'refund' | 'privacy') => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  policyKey,
  onClose,
  onSelectPolicy
}) => {
  if (!policyKey) return null;

  const currentPolicy: PolicyDocument = POLICIES_DATA[policyKey];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Header */}
        <div className="bg-[#0a2558] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-emerald-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                Official Wisdatree Documentation · {currentPolicy.status}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {currentPolicy.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Policy Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 py-2 gap-2 overflow-x-auto">
          <button
            onClick={() => onSelectPolicy('rescheduling')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              policyKey === 'rescheduling'
                ? 'bg-white text-[#0a2558] shadow-2xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Rescheduling Policy (Draft)
          </button>
          <button
            onClick={() => onSelectPolicy('refund')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              policyKey === 'refund'
                ? 'bg-white text-[#0a2558] shadow-2xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Refund Policy (Draft)
          </button>
          <button
            onClick={() => onSelectPolicy('privacy')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              policyKey === 'privacy'
                ? 'bg-white text-[#0a2558] shadow-2xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Privacy Notice
          </button>
        </div>

        {/* Policy Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Summary Box */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <span className="font-semibold text-slate-900 block mb-1">Executive Summary</span>
            {currentPolicy.summary}
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {currentPolicy.sections.map((section, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-[#0a2558] tracking-tight">
                  {section.heading}
                </h3>
                <div className="space-y-2 pl-1">
                  {section.content.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#168038] shrink-0 mt-2" />
                      <p className="flex-1">{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Notice Footer */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              These policies are provided in draft form for parent and student clarity. Final signed agreements and confirmation receipts will be issued upon formal course enrolment or admission.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-[#0a2558] text-white hover:bg-[#081d45] transition-colors"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
