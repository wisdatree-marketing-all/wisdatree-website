import React, { useState } from 'react';
import { MessageCircle, Menu, X, Sparkles, HeartPulse, GraduationCap, Briefcase, FileText } from 'lucide-react';
import { Division } from '../types';

interface NavbarProps {
  activeView: 'home' | 'school' | 'care' | 'about' | 'careers';
  onNavigate: (view: 'home' | 'school' | 'care' | 'about' | 'careers') => void;
  onOpenEnquiry: (division?: Division, interest?: string) => void;
  onOpenCareers: () => void;
  onOpenPolicy: (key: 'rescheduling' | 'refund' | 'privacy') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigate,
  onOpenEnquiry,
  onOpenCareers,
  onOpenPolicy
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (view: 'home' | 'school' | 'care' | 'about' | 'careers') => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          {/* Zone 1: Brand Wordmark / Logo */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-3 group focus:outline-hidden text-left"
              aria-label="Wisdatree Home"
            >
              <img
                src="/assets/aistudio/Horizontal_Logo_e5936cb8.png"
                alt="Wisdatree - Nurture Your Future"
                className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </button>
          </div>

          {/* Zone 2: Navigation Links (single line, clean typography) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <button
              onClick={() => handleLinkClick('school')}
              className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeView === 'school'
                  ? 'border-[#168038] text-[#168038] font-semibold'
                  : 'border-transparent hover:text-[#0a2558] hover:border-slate-300'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-[#168038]" />
              <span>WisdaSchool</span>
            </button>

            <button
              onClick={() => handleLinkClick('care')}
              className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeView === 'care'
                  ? 'border-[#0a2558] text-[#0a2558] font-semibold'
                  : 'border-transparent hover:text-[#0a2558] hover:border-slate-300'
              }`}
            >
              <HeartPulse className="w-4 h-4 text-emerald-600" />
              <span>WisdaCare</span>
            </button>

            <button
              onClick={() => handleLinkClick('about')}
              className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeView === 'about'
                  ? 'border-[#0a2558] text-[#0a2558] font-semibold'
                  : 'border-transparent hover:text-[#0a2558] hover:border-slate-300'
              }`}
            >
              About Wisdatree
            </button>

            <button
              onClick={() => handleLinkClick('careers')}
              className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeView === 'careers'
                  ? 'border-[#f59e0b] text-[#0a2558] font-semibold'
                  : 'border-transparent hover:text-[#0a2558] hover:border-slate-300'
              }`}
            >
              <Briefcase className="w-4 h-4 text-amber-600" />
              <span>Careers</span>
            </button>

            <button
              onClick={() => onOpenPolicy('refund')}
              className="text-slate-500 hover:text-slate-800 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Policies
            </button>
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenEnquiry('WisdaSchool')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#168038] hover:bg-[#136e2f] transition-all shadow-xs shadow-emerald-700/20 active:scale-[0.98] whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire on WhatsApp ↗</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenEnquiry('WisdaSchool')}
              className="p-2 rounded-xl text-white bg-[#168038] hover:bg-[#136e2f] transition-colors"
              aria-label="Quick WhatsApp Enquiry"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <button
              onClick={() => handleLinkClick('school')}
              className={`p-3 rounded-xl border flex flex-col items-start gap-1 transition-all ${
                activeView === 'school'
                  ? 'border-[#168038] bg-emerald-50 text-[#168038]'
                  : 'border-slate-200 bg-slate-50 text-slate-700'
              }`}
            >
              <GraduationCap className="w-5 h-5 text-[#168038]" />
              <span className="text-sm font-bold">WisdaSchool</span>
              <span className="text-[11px] text-slate-500">7 Courses &amp; Arts</span>
            </button>

            <button
              onClick={() => handleLinkClick('care')}
              className={`p-3 rounded-xl border flex flex-col items-start gap-1 transition-all ${
                activeView === 'care'
                  ? 'border-[#0a2558] bg-blue-50 text-[#0a2558]'
                  : 'border-slate-200 bg-slate-50 text-slate-700'
              }`}
            >
              <HeartPulse className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-bold">WisdaCare</span>
              <span className="text-[11px] text-slate-500">Wellness &amp; Webinars</span>
            </button>
          </div>

          <div className="space-y-1">
            <button
              onClick={() => handleLinkClick('home')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Ecosystem Overview
            </button>
            <button
              onClick={() => handleLinkClick('about')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              About Wisdatree
            </button>
            <button
              onClick={() => handleLinkClick('careers')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg flex items-center justify-between"
            >
              <span>Join Our Team (Careers)</span>
              <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                Hiring
              </span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPolicy('refund');
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 rounded-lg"
            >
              Refund &amp; Rescheduling Policies
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry('WisdaSchool');
              }}
              className="w-full py-3 px-4 rounded-xl text-center text-sm font-bold text-white bg-[#168038] hover:bg-[#136e2f] shadow-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire via WhatsApp ↗</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
