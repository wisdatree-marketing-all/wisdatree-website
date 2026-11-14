import React from 'react';
import { Sparkles, Heart, GraduationCap, Compass, Globe2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenEnquiry: () => void;
  onOpenCareers: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquiry, onOpenCareers }) => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Logo & Symbolism */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <div className="p-4 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs max-w-xs">
              <img
                src="/assets/aistudio/Primary_Logo_b9e40a38.png"
                alt="Wisdatree Primary Logo - Nurture Your Future"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="text-xs text-slate-500 max-w-sm">
              The Wisdatree emblem represents an aspiring human blossoming into a tree of knowledge—anchored in deep roots, reaching towards enlightenment and vitality.
            </div>
          </div>

          {/* Philosophy Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#168038]">
              <Sparkles className="w-4 h-4" />
              <span>About Wisdatree · Global Knowledge &amp; Care</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2558] tracking-tight">
              Nurturing potential. Creating possibilities.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Wisdatree is a global knowledge ecosystem connecting trusted healthcare educators, inspiring teachers, cultural practitioners, and curious learners worldwide. We believe that true lifelong development requires both a curious, grounded mind and a nourished, healthy body.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-[#168038] text-sm">
                  <GraduationCap className="w-4 h-4" />
                  <span>Cultural &amp; Academic Roots</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Preserving mother-tongue heritage across the global Indian diaspora while fostering analytical mathematical and scientific intuition.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-[#0a2558] text-sm">
                  <Heart className="w-4 h-4" />
                  <span>Compassionate Wellbeing</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Providing safe, doctor-moderated forums for women, expectant mothers, and families to demystify health and prevent illness early.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenEnquiry}
                className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#0a2558] hover:bg-[#081d45] transition-colors"
              >
                Connect with Our Team
              </button>
              <button
                onClick={() => onOpenCareers()}
                className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Explore Career Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
