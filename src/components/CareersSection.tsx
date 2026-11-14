import React from 'react';
import { Briefcase, MessageCircle, Sparkles, CheckCircle2, ArrowRight, HeartHandshake } from 'lucide-react';
import { SCHOOL_PHONE_DISPLAY } from './EnquiryModal';

interface CareersSectionProps {
  onOpenCareers: (role?: string) => void;
}

const ROLES_LIST = [
  {
    title: 'Tamil Language Educator',
    dept: 'WisdaSchool',
    type: 'Online Remote · Part-time / Full-time',
    desc: 'Teach conversational Tamil, Aathichudi, and literature to young diaspora learners and adults across flexible evening and weekend batches.'
  },
  {
    title: 'Hindi & Malayalam Tutors',
    dept: 'WisdaSchool',
    type: 'Online Remote · Cohorts',
    desc: 'Empower bilingual fluency through engaging phonetics, Devanagari/Malayalam literacy, and conversational games.'
  },
  {
    title: 'Bharatanatyam Dance Guru',
    dept: 'WisdaSchool Classical Arts',
    type: 'Online Masterclasses',
    desc: 'Guide dedicated students through foundational Araimandi, Adavus, Hastas, and complete Margam repertoire.'
  },
  {
    title: 'Carnatic Vocal Music Teacher',
    dept: 'WisdaSchool Classical Arts',
    type: 'Online Vocal Sessions',
    desc: 'Train budding singers in shruti discipline, Sarali to Varnams, and Trinity kritis with patience and devotion.'
  },
  {
    title: 'Mathematics & Science Mentors',
    dept: 'WisdaSchool STEM',
    type: 'Online Guided Problem Solving',
    desc: 'Ignite curiosity through interactive models, Olympiad reasoning, and hands-on experiments for grades 2 through 10.'
  },
  {
    title: 'Maternal & Health Education Specialist',
    dept: 'WisdaCare Community',
    type: 'Webinar Host & Content Creator',
    desc: 'Collaborate with obstetricians and doctors to create approachable explainers and host live maternal Q&A sessions.'
  }
];

export const CareersSection: React.FC<CareersSectionProps> = ({ onOpenCareers }) => {
  return (
    <section id="careers" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-emerald-50/30 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            <Briefcase className="w-4 h-4 text-amber-600" />
            <span>Wisdatree Careers · Join Our Global Faculty</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2558] tracking-tight">
            Nurture young minds &amp; inspire community wellbeing.
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
            We are looking for dedicated educators, classical artists, STEM coaches, and health communicators who believe in compassionate, patient instruction. Work remotely from anywhere in the world.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ROLES_LIST.map((role, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#168038] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    {role.dept}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {role.type.split('·')[0]}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0a2558] transition-colors">
                  {role.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {role.desc}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">Flexible Scheduling</span>
                <button
                  onClick={() => onOpenCareers(role.title)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#168038] hover:bg-emerald-50 transition-colors flex items-center gap-1"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Strip for Career Submissions */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0a2558] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-300">
              Immediate Review &amp; Onboarding
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Passionate about a subject not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We welcome open applications from passionate instructors and mentors. Submit your profile directly to our recruitment desk at {SCHOOL_PHONE_DISPLAY}.
            </p>
          </div>

          <button
            onClick={() => onOpenCareers('General Faculty / Staff Application')}
            className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#0a2558] bg-white hover:bg-slate-100 transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#168038]" />
            <span>Open Application Form ↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};
