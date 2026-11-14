import React from 'react';
import { MessageCircle, Mail, Phone, ExternalLink, ShieldCheck, HeartPulse, GraduationCap } from 'lucide-react';
import { SCHOOL_PHONE_DISPLAY, BUSINESS_EMAIL } from './EnquiryModal';
import { CARE_PHONE_DISPLAY } from '../data/careData';

interface FooterProps {
  onNavigate: (view: 'home' | 'school' | 'care' | 'about' | 'careers') => void;
  onOpenEnquiry: (division?: any, interest?: string) => void;
  onOpenCareers: () => void;
  onOpenPolicy: (key: 'rescheduling' | 'refund' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenEnquiry,
  onOpenCareers,
  onOpenPolicy
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand Info & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-hidden"
            >
              <img
                src="/assets/aistudio/Horizontal_Logo_e5936cb8.png"
                alt="Wisdatree - Nurture Your Future"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </button>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              A global knowledge and wellbeing ecosystem connecting heritage languages, performing arts, conceptual STEM coaching, and doctor-guided health awareness.
            </p>
            <div className="pt-2 text-xs text-emerald-400 font-semibold tracking-wider uppercase">
              Nurture Your Future
            </div>
          </div>

          {/* Col 2: Divisions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Ecosystem Hubs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('school')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WisdaSchool (7 Subjects)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('care')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <HeartPulse className="w-3.5 h-3.5 text-blue-400" />
                  <span>WisdaCare (Wellness &amp; Q&amp;A)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('careers')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Join Our Team (Careers)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Wisdatree
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Policies & Governance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Policies &amp; Trust
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenPolicy('refund')}
                  className="hover:text-white transition-colors"
                >
                  Refund Policy (Draft)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('rescheduling')}
                  className="hover:text-white transition-colors"
                >
                  Class Rescheduling Policy (Draft)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('privacy')}
                  className="hover:text-white transition-colors"
                >
                  Privacy Notice
                </button>
              </li>
              <li>
                <span className="text-[11px] text-slate-500 block pt-1">
                  100% Satisfaction 7-Day Guarantee on initial sessions.
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Social & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Official Channels
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.facebook.com/wisdacare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>WisdaCare Facebook</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/wisda_care/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>WisdaCare Instagram</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@Wisdacare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>WisdaCare YouTube</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61595978941076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>WisdaSchool Facebook</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>

            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <div>
                <strong className="text-slate-300">School / Careers:</strong>{' '}
                <a href={`https://wa.me/917010100644`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
                  {SCHOOL_PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <strong className="text-slate-300">WisdaCare:</strong>{' '}
                <a href={`https://wa.me/919344010644`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
                  {CARE_PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <strong className="text-slate-300">Email:</strong>{' '}
                <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-emerald-400">
                  {BUSINESS_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Wisdatree. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <button onClick={() => onOpenPolicy('privacy')} className="hover:text-slate-300">
              Privacy Policy
            </button>
            <span>·</span>
            <button onClick={() => onOpenPolicy('refund')} className="hover:text-slate-300">
              Refund Terms
            </button>
            <span>·</span>
            <button onClick={() => onOpenPolicy('rescheduling')} className="hover:text-slate-300">
              Rescheduling Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
