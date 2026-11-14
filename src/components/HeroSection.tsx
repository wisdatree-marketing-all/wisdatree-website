import React from 'react';
import { GraduationCap, HeartPulse, ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { Division } from '../types';
import wisdatreeEcosystemBanner from '../assets/images/wisdatree_ecosystem_banner.jpg';

interface HeroSectionProps {
  onNavigate: (view: 'home' | 'school' | 'care' | 'about' | 'careers') => void;
  onOpenEnquiry: (division?: Division, interest?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenEnquiry
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/40 via-white to-slate-50/60 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/80">
      {/* Decorative ambient subtle background glows using brand colors */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Brand Message & Vision */}
          <div className="lg:col-span-7 space-y-6">
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200 text-xs font-semibold text-emerald-900 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#168038]" />
              <span>WISDATREE GLOBAL ECOSYSTEM · NURTURE YOUR FUTURE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-[#0a2558] leading-[1.15] text-balance">
              Where heritage language, classical arts &amp; family wellbeing grow together.
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Wisdatree connects global families and curious minds with two dedicated pillars: <strong className="font-semibold text-slate-800">WisdaSchool</strong> for live online language pathways, classical Indian arts, and conceptual STEM; and <strong className="font-semibold text-slate-800">WisdaCare</strong> for doctor-guided maternal and community health education.
            </p>

            {/* Quick Hub Jump Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {/* WisdaSchool Hub Card */}
              <div
                onClick={() => onNavigate('school')}
                className="group relative p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#168038] shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-xl bg-emerald-50 text-[#168038] group-hover:bg-[#168038] group-hover:text-white transition-colors">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#168038] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Explore Hub <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base">WisdaSchool</h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Tamil, Hindi, Malayalam, Bharatanatyam, Carnatic Vocal, Math &amp; Science.
                </p>
                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center gap-2 text-[11px] text-emerald-800 font-medium">
                  <span>7 Subjects</span>
                  <span>·</span>
                  <span>Live Online Sessions</span>
                </div>
              </div>

              {/* WisdaCare Hub Card */}
              <div
                onClick={() => onNavigate('care')}
                className="group relative p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#0a2558] shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-xl bg-blue-50 text-[#0a2558] group-hover:bg-[#0a2558] group-hover:text-white transition-colors">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#0a2558] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Explore Hub <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base">WisdaCare</h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  Motherhood Diaries, doctor-led live Q&amp;As, women's health &amp; wellbeing.
                </p>
                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center gap-2 text-[11px] text-blue-800 font-medium">
                  <span>Free Webinars</span>
                  <span>·</span>
                  <span>Verified Experts</span>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => onOpenEnquiry('WisdaSchool')}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-[#168038] hover:bg-[#136e2f] shadow-md shadow-emerald-700/20 active:scale-[0.99] transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire via WhatsApp ↗</span>
              </button>

              <button
                onClick={() => onNavigate('school')}
                className="px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors"
              >
                View 7 Course Syllabi
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 bg-slate-100 group">
              <img
                src={wisdatreeEcosystemBanner}
                alt="Wisdatree overarching ecosystem bringing together education, wellness, and careers"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Inset Photo Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#168038]">
                      Global Ecosystem
                    </span>
                    <h4 className="text-sm font-bold text-[#0a2558]">
                      Wisdatree · Nurture Your Future
                    </h4>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-[#168038]">
                      Education &amp; Care
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-xs text-slate-600 flex items-center gap-2 flex-wrap">
                  <span className="font-medium text-slate-800">WisdaSchool (7 Subjects)</span>
                  <span>·</span>
                  <span className="font-medium text-slate-800">WisdaCare (Health &amp; Wellness)</span>
                  <span>·</span>
                  <span className="font-medium text-slate-800">Careers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Adjacency Trust Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <div className="text-2xl font-extrabold text-[#0a2558] tabular-nums">7 Courses</div>
            <p className="text-xs text-slate-500">Structured syllabi across languages, classical arts &amp; STEM</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-extrabold text-[#168038] tabular-nums">350+ Classes</div>
            <p className="text-xs text-slate-500">Live online learning stages with certified native mentors</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-extrabold text-[#f59e0b] tabular-nums">1-on-1 Focus</div>
            <p className="text-xs text-slate-500">Personalized attention &amp; small cohorts for maximum engagement</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-extrabold text-[#1a73e8] tabular-nums">Direct Connect</div>
            <p className="text-xs text-slate-500">Instant WhatsApp enquiry routing straight to department coordinators</p>
          </div>
        </div>
      </div>
    </section>
  );
};
