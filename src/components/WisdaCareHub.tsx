import React from 'react';
import { 
  HeartPulse, 
  MessageCircle, 
  Calendar, 
  ShieldAlert, 
  Baby, 
  Activity, 
  HeartHandshake, 
  Sparkles, 
  Smile, 
  Brain, 
  Apple, 
  Building2,
  CheckCircle2,
  ArrowRight,
  Radio,
  Clock,
  Play
} from 'lucide-react';
import { CARE_TOPICS, WEBINAR_FEATURE, CARE_PHONE_DISPLAY } from '../data/careData';
import { CareTopic, Division } from '../types';
import wisdacareLifecycleBanner from '../assets/images/wisdacare_lifecycle_banner.jpg';

interface WisdaCareHubProps {
  onOpenEnquiry: (division?: Division, interest?: string) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Baby: <Baby className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Smile: <Smile className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Apple: <Apple className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />
};

export const WisdaCareHub: React.FC<WisdaCareHubProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="wisdacare" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* WisdaCare Main Page Hero Header with Featured Lifecycle Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Mission & Doctor Guarantee */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0a2558]">
              <HeartPulse className="w-4 h-4 text-emerald-600" />
              <span>WisdaCare Hub · Evidence-Based Health Education &amp; Care</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a2558] tracking-tight leading-[1.15]">
              Doctor-guided care across every stage of family life.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              WisdaCare sessions and educational modules are <strong className="font-semibold text-slate-900">handled and designed exclusively by certified doctors and registered medical practitioners backed by clinical research and scientific proofs</strong>, making health conversations approachable, empathetic, and jargon-free.
            </p>

            {/* Doctor & Scientific Proof Guarantee Badge */}
            <div className="p-4 rounded-2xl bg-emerald-50/90 border border-emerald-200/90 flex items-start gap-3.5 text-xs text-emerald-950 font-medium">
              <div className="p-1.5 rounded-xl bg-emerald-600 text-white shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <strong className="block text-emerald-900 font-bold mb-0.5">Certified Clinical Faculty:</strong>
                <span>All webinars, trimester guides, and health conversations are led by qualified gynecologists, pediatricians, and certified medical professionals. Zero unverified hearsay.</span>
              </div>
            </div>

            {/* Direct Connect Action */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenEnquiry('WisdaCare')}
                className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#0a2558] hover:bg-[#081d45] shadow-xs transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact WisdaCare Doctors ({CARE_PHONE_DISPLAY})</span>
              </button>
            </div>
          </div>

          {/* Right Column: WisdaCare Lifecycle Picture */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-emerald-200/90 bg-white group">
              <img
                src={wisdacareLifecycleBanner}
                alt="WisdaCare full lifecycle maternal, newborn, pediatric, and family health guidance with certified doctor"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                loading="eager"
              />
              <div className="p-3.5 bg-white/95 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#0a2558] block">WisdaCare Family Continuum</span>
                  <span className="text-[11px] text-slate-500">Maternal · Newborn · Child · Doctor Telehealth</span>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-[#168038]">
                  Evidence-Based
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Core Health Education Focus Areas */}
        <div className="pt-4">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <div>
              <h3 className="text-2xl font-bold text-[#0a2558]">
                Health Education Focus Areas
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Doctor-guided topics designed for practical understanding and proactive family care
              </p>
            </div>
            <button
              onClick={() => onOpenEnquiry('WisdaCare')}
              className="text-xs font-bold text-[#168038] hover:text-[#0a2558] transition-colors flex items-center gap-1"
            >
              <span>Request custom awareness workshop</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {CARE_TOPICS.map((topic: CareTopic) => (
              <div
                key={topic.id}
                className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-[#168038] hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="p-2.5 rounded-xl bg-white text-[#168038] border border-slate-200 w-fit shadow-2xs group-hover:bg-[#168038] group-hover:text-white transition-colors">
                    {ICON_MAP[topic.icon] || <HeartPulse className="w-5 h-5" />}
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {topic.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {topic.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {topic.description}
                  </p>

                  <div className="pt-2 border-t border-slate-200/60 space-y-1">
                    {topic.highlights.slice(0, 3).map((h, hIdx) => (
                      <div key={hIdx} className="text-[11px] text-slate-500 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-emerald-600 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-2">
                  <button
                    onClick={() => onOpenEnquiry('WisdaCare', topic.title)}
                    className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-[#0a2558] bg-white border border-slate-300 hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Enquire Topic</span>
                    <ArrowRight className="w-3 h-3 text-[#168038]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Webseries Section: Motherhood Diaries Under WisdaCare */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-300/80 bg-gradient-to-br from-emerald-50/80 via-white to-blue-50/50 shadow-md p-6 sm:p-10">
          {/* Section Header: Clearly Identifies Motherhood Diaries as a Webseries Under WisdaCare */}
          <div className="space-y-2 mb-8 max-w-3xl">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-600 text-white shadow-2xs">
                WisdaCare Webseries
              </span>
              <span className="text-xs text-emerald-800 font-semibold italic">
                "{WEBINAR_FEATURE.tagline}"
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a2558] tracking-tight">
                {WEBINAR_FEATURE.title}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-emerald-800 mt-1">
                {WEBINAR_FEATURE.subtitle}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                A dedicated, doctor-led interactive webinar series hosted under the WisdaCare umbrella, created specifically for expectant mothers, new parents, and women's wellness.
              </p>
            </div>
          </div>

          {/* Grid with Poster Image on Left + Details & Calendar on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* The Poster Image positioned directly below the heading */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-emerald-100 max-w-sm w-full bg-white group">
                <img
                  src={WEBINAR_FEATURE.image}
                  alt="Wisdacare Motherhood Diaries - Let's talk, her health poster"
                  className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
                  loading="eager"
                />
                <div className="p-3 bg-white/95 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-[#168038] font-bold">
                    <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                    <span>Live Series · Edition 1: Nov 1</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Free Entry</span>
                </div>
              </div>
            </div>

            {/* Right Column: Webinar Details & Broadcast Timeline */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {WEBINAR_FEATURE.description}
              </p>

              {/* Webinar Key Features */}
              <div className="space-y-2 pt-1">
                {WEBINAR_FEATURE.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#168038] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Calendar Visual & Webinar Schedule (Nov 1 completed) */}
              <div className="pt-2 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0a2558] flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#168038]" />
                    <span>Webinar Broadcast History</span>
                  </span>
                  <span className="text-[11px] text-emerald-800 font-semibold bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                    Completed Live on Nov 1
                  </span>
                </div>

                <div className="space-y-3">
                  {WEBINAR_FEATURE.calendar.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl border border-emerald-300 bg-white shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="flex items-start gap-3.5">
                        {/* Calendar Date Visual Tile */}
                        <div className="w-14 h-14 rounded-2xl shrink-0 flex flex-col items-center justify-center border text-center shadow-2xs bg-[#168038] border-emerald-700 text-white">
                          <span className="text-[10px] font-bold uppercase tracking-wider leading-none">
                            {item.monthShort}
                          </span>
                          <span className="text-xl font-extrabold leading-none mt-1">
                            {item.dayNumber}
                          </span>
                        </div>

                        {/* Session Info */}
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300">
                              {item.statusBadge}
                            </span>
                            <span className="text-xs text-slate-500 flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              {item.time}
                            </span>
                          </div>
                          <h5 className="font-bold text-slate-900 text-sm">
                            {item.title}
                          </h5>
                          <p className="text-xs text-emerald-800 font-medium">
                            {item.speakers}
                          </p>
                          <div className="pt-1 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-600">
                            {item.topicHighlights.map((th, thIdx) => (
                              <span key={thIdx} className="flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-emerald-600" />
                                <span>{th}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Completed Status Pill */}
                      <div className="shrink-0 flex items-center gap-2">
                        <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-emerald-50 text-[#168038] border border-emerald-200 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Successfully Concluded</span>
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Future Sessions Upcoming Notice */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
                    <Radio className="w-4 h-4 text-[#168038] shrink-0 mt-0.5 animate-pulse" />
                    <div>
                      <strong className="text-slate-800 block">Upcoming Live Sessions:</strong>
                      <span>{WEBINAR_FEATURE.nextNotice}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA to Reserve on WhatsApp */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenEnquiry('WisdaCare', 'Pregnancy & Motherhood (Motherhood Diaries)')}
                  className="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#168038] hover:bg-[#136e2f] shadow-md shadow-emerald-700/20 active:scale-[0.99] transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Reserve Seat on WhatsApp ({CARE_PHONE_DISPLAY}) ↗</span>
                </button>

                <button
                  onClick={() => onOpenEnquiry('WisdaCare', 'General Health Education Enquiry')}
                  className="px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
                >
                  Submit Question for Doctors
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Prominent Medical Disclaimer Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-950 flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm">
            <span className="font-bold text-amber-900 block">
              WisdaCare Medical &amp; Clinical Notice
            </span>
            <p className="leading-relaxed text-amber-900/90">
              WisdaCare provides general health education, awareness webinars, and lifestyle literacy. We do not provide individual medical diagnosis, prescriptions, or emergency clinical interventions. Please consult a licensed physician or specialist for any personal medical conditions, and never disregard professional medical advice based on educational content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
