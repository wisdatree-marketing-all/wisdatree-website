/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WisdaSchoolHub } from './components/WisdaSchoolHub';
import { WisdaCareHub } from './components/WisdaCareHub';
import { CareersSection } from './components/CareersSection';
import { AboutSection } from './components/AboutSection';
import { SocialFeedSection } from './components/SocialFeedSection';
import { Footer } from './components/Footer';
import { EnquiryModal, SCHOOL_PHONE_DISPLAY } from './components/EnquiryModal';
import { CareersModal } from './components/CareersModal';
import { PolicyModal } from './components/PolicyModal';
import { Division } from './types';
import { MessageCircle, HeartPulse, GraduationCap, ArrowUp } from 'lucide-react';
import { CARE_PHONE_DISPLAY } from './data/careData';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'school' | 'care' | 'about' | 'careers'>('home');
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryDivision, setEnquiryDivision] = useState<Division>('WisdaSchool');
  const [enquiryInterest, setEnquiryInterest] = useState<string>('');
  const [careersOpen, setCareersOpen] = useState(false);
  const [careersRole, setCareersRole] = useState<string>('Tamil Language Educator / Tutor');
  const [policyKey, setPolicyKey] = useState<'rescheduling' | 'refund' | 'privacy' | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync hash routing if visitor uses URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('school')) setActiveView('school');
      else if (hash.includes('care')) setActiveView('care');
      else if (hash.includes('career')) setActiveView('careers');
      else if (hash.includes('about')) setActiveView('about');
      else if (hash.includes('home')) setActiveView('home');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (view: 'home' | 'school' | 'care' | 'about' | 'careers') => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (view === 'home') window.location.hash = '';
    else window.location.hash = `#${view}`;
  };

  const handleOpenEnquiry = (division: Division = 'General', interest: string = '') => {
    setEnquiryDivision(division);
    setEnquiryInterest(interest);
    setEnquiryOpen(true);
  };

  const handleOpenCareers = (role: string = 'Tamil Language Educator / Tutor') => {
    setCareersRole(role);
    setCareersOpen(true);
  };

  const handleOpenPolicy = (key: 'rescheduling' | 'refund' | 'privacy') => {
    setPolicyKey(key);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfc] text-slate-800 selection:bg-[#168038] selection:text-white">
      {/* Top Banner Notice */}
      <div className="bg-[#0a2558] text-white text-[11px] sm:text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-3 flex-wrap">
        <span>✨ Welcome to the new Wisdatree ecosystem portal!</span>
        <span className="hidden sm:inline text-emerald-300">·</span>
        <span className="hidden sm:inline text-slate-200">
          WisdaSchool: {SCHOOL_PHONE_DISPLAY} · WisdaCare: {CARE_PHONE_DISPLAY}
        </span>
        <span className="hidden md:inline text-emerald-300">·</span>
        <a
          href="/wisdatree-website.zip"
          download="wisdatree-website.zip"
          className="text-emerald-300 hover:text-white underline font-semibold transition-colors"
        >
          Download Code (.zip) 📥
        </a>
      </div>

      {/* Navigation */}
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
        onOpenCareers={() => handleOpenCareers()}
        onOpenPolicy={handleOpenPolicy}
      />

      {/* Main Content Area based on View */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            <HeroSection
              onNavigate={handleNavigate}
              onOpenEnquiry={handleOpenEnquiry}
            />
            <WisdaSchoolHub onOpenEnquiry={handleOpenEnquiry} />
            <WisdaCareHub onOpenEnquiry={handleOpenEnquiry} />
            <SocialFeedSection />
            <CareersSection onOpenCareers={handleOpenCareers} />
            <AboutSection
              onOpenEnquiry={() => handleOpenEnquiry('General')}
              onOpenCareers={() => handleOpenCareers()}
            />
          </>
        )}

        {activeView === 'school' && (
          <>
            {/* Dedicated WisdaSchool Hub View */}
            <div className="bg-emerald-50/40 py-8 border-b border-emerald-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#168038]">
                    <GraduationCap className="w-4 h-4" />
                    <span>WisdaSchool Dedicated Hub</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0a2558] mt-1">
                    Live Online Courses &amp; Structured Syllabi
                  </h1>
                </div>
                <button
                  onClick={() => handleOpenEnquiry('WisdaSchool')}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#168038] hover:bg-[#136e2f] shadow-xs flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp ({SCHOOL_PHONE_DISPLAY})</span>
                </button>
              </div>
            </div>
            <WisdaSchoolHub onOpenEnquiry={handleOpenEnquiry} />
          </>
        )}

        {activeView === 'care' && (
          <>
            {/* Dedicated WisdaCare Hub View */}
            <div className="bg-blue-50/40 py-8 border-b border-blue-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0a2558]">
                    <HeartPulse className="w-4 h-4 text-emerald-600" />
                    <span>WisdaCare Dedicated Hub</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0a2558] mt-1">
                    Maternal Health, Wellness &amp; Doctor Q&amp;As
                  </h1>
                </div>
                <button
                  onClick={() => handleOpenEnquiry('WisdaCare')}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#168038] hover:bg-[#136e2f] shadow-xs flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect with WisdaCare ({CARE_PHONE_DISPLAY})</span>
                </button>
              </div>
            </div>
            <WisdaCareHub onOpenEnquiry={handleOpenEnquiry} />
            <SocialFeedSection />
          </>
        )}

        {activeView === 'careers' && (
          <>
            {/* Dedicated Careers Hub View */}
            <div className="bg-amber-50/40 py-8 border-b border-amber-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    Wisdatree Faculty Recruitment
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0a2558] mt-1">
                    Join Our Teaching &amp; Content Team
                  </h1>
                </div>
                <button
                  onClick={() => handleOpenCareers()}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#168038] hover:bg-[#136e2f] shadow-xs flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Submit Application via WhatsApp</span>
                </button>
              </div>
            </div>
            <CareersSection onOpenCareers={handleOpenCareers} />
          </>
        )}

        {activeView === 'about' && (
          <>
            <AboutSection
              onOpenEnquiry={() => handleOpenEnquiry('General')}
              onOpenCareers={() => handleOpenCareers()}
            />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
        onOpenCareers={() => handleOpenCareers()}
        onOpenPolicy={handleOpenPolicy}
      />

      {/* Floating Action WhatsApp Button at Bottom Right */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white text-slate-700 shadow-md border border-slate-200 hover:bg-slate-50 transition-all hover:-translate-y-0.5"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={() => handleOpenEnquiry(activeView === 'care' ? 'WisdaCare' : 'WisdaSchool')}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#168038] hover:bg-[#136e2f] text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-900/25 active:scale-95 transition-all group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white/20" />
          <span className="hidden sm:inline">Chat on WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </button>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultDivision={enquiryDivision}
        defaultInterest={enquiryInterest}
      />

      {/* Careers Modal */}
      <CareersModal
        isOpen={careersOpen}
        onClose={() => setCareersOpen(false)}
        defaultRole={careersRole}
      />

      {/* Policy Reader Modal */}
      <PolicyModal
        policyKey={policyKey}
        onClose={() => setPolicyKey(null)}
        onSelectPolicy={handleOpenPolicy}
      />
    </div>
  );
}
