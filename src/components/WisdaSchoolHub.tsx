import React, { useState } from 'react';
import { 
  GraduationCap, 
  MessageCircle, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Clock, 
  Users, 
  Layers, 
  CheckCircle,
  Music,
  Compass,
  ArrowRight
} from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { Course, CourseCategory, Division } from '../types';
import { SCHOOL_PHONE_DISPLAY } from './EnquiryModal';

interface WisdaSchoolHubProps {
  onOpenEnquiry: (division?: Division, interest?: string) => void;
}

export const WisdaSchoolHub: React.FC<WisdaSchoolHubProps> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>('all');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>('tamil');

  const filteredCourses = selectedCategory === 'all'
    ? COURSES_DATA
    : COURSES_DATA.filter((c) => c.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedCourseId(expandedCourseId === id ? null : id);
  };

  return (
    <section id="wisdaschool" className="py-12 sm:py-16 lg:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#168038] mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>WisdaSchool Hub · Comprehensive Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2558] tracking-tight">
            Language pathways, classical arts &amp; conceptual STEM.
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
            Live online instruction with structured learning stages, cultural depth, and experienced mentors. We currently offer <strong className="text-slate-900 font-semibold">Tamil, Hindi, Malayalam, Bharatanatyam, Carnatic Music, Mathematics, and Science</strong>.
          </p>
        </div>

        {/* Category Filter Tabs (Segmented Button Control) */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-200/70 rounded-2xl w-fit mb-8 overflow-x-auto max-w-full">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-white text-[#0a2558] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All 7 Subjects ({COURSES_DATA.length})
          </button>
          <button
            onClick={() => setSelectedCategory('languages')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              selectedCategory === 'languages'
                ? 'bg-white text-[#168038] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Languages (Tamil, Hindi, Malayalam)
          </button>
          <button
            onClick={() => setSelectedCategory('arts')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              selectedCategory === 'arts'
                ? 'bg-white text-[#b91c1c] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Classical Performing Arts
          </button>
          <button
            onClick={() => setSelectedCategory('stem')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              selectedCategory === 'stem'
                ? 'bg-white text-[#0284c7] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            STEM &amp; Reasoning
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="space-y-6">
          {filteredCourses.map((course: Course) => {
            const isExpanded = expandedCourseId === course.id;

            return (
              <div
                key={course.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all overflow-hidden"
              >
                {/* Main Card Header Bar */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="flex-1 space-y-3">
                      {/* Native Script Badge & Category */}
                      <div className="flex items-center gap-3 flex-wrap">
                        {course.nativeName && (
                          <span
                            className="text-base sm:text-lg font-bold px-3 py-1 rounded-xl bg-slate-100 text-slate-800 tracking-wide"
                            style={{ borderLeft: `3px solid ${course.accentColor}` }}
                          >
                            {course.nativeName}
                          </span>
                        )}
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          {course.kicker}
                        </span>
                        <span className="text-xs text-slate-400">·</span>
                        <span className="text-xs font-medium text-slate-600">
                          {course.levelCount}
                        </span>
                        <span className="text-xs text-slate-400">·</span>
                        <span className="text-xs font-medium text-slate-600">
                          {course.totalSessions}
                        </span>
                      </div>

                      {/* Course Title & Tagline */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a2558] tracking-tight">
                          {course.name}
                        </h3>
                        <p className="text-sm sm:text-base font-medium text-slate-600 mt-1">
                          {course.tagline}
                        </p>
                      </div>

                      {/* Paragraph Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                        {course.description}
                      </p>

                      {/* Key Facts Pill-Free Row */}
                      <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Users className="w-4 h-4 text-slate-400" />
                          <span>{course.ageGroup}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-slate-400" />
                          <span>{course.deliveryMode}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Layers className="w-4 h-4 text-slate-400" />
                          <span>{course.levels.length} Graded Syllabus Stages</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Block */}
                    <div className="flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end gap-3 shrink-0 pt-2 lg:pt-0">
                      <button
                        onClick={() => onOpenEnquiry('WisdaSchool', `${course.name} Course`)}
                        className="px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#168038] hover:bg-[#136e2f] shadow-xs active:scale-[0.98] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Enquire on WhatsApp ↗</span>
                      </button>

                      <button
                        onClick={() => toggleExpand(course.id)}
                        className="px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>{isExpanded ? 'Hide Syllabus Stages' : 'View Syllabus Stages'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Progressive Stages Overview Strip (Always visible preview) */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                      Progressive Learning Stages:
                    </span>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      {course.levels.map((lvl, idx) => (
                        <React.Fragment key={idx}>
                          <span className="font-semibold text-slate-800 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">
                            {lvl.name.split(':')[1]?.trim() || lvl.name}
                          </span>
                          {idx < course.levels.length - 1 && (
                            <span className="text-slate-300 font-bold">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Expanded Syllabus Breakdown Drawer */}
                {isExpanded && (
                  <div className="bg-slate-50/80 border-t border-slate-200/80 p-6 sm:p-8 space-y-6 animate-in slide-in-from-top-2 duration-150">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-[#0a2558] mb-3">
                        Detailed Curriculum Breakdown &amp; Learning Milestones
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {course.levels.map((level, lIdx) => (
                          <div
                            key={lIdx}
                            className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-1.5"
                          >
                            <div className="flex items-center gap-2">
                              <span
                                className="w-2 h-2 rounded-full shrink-0"
                                style={{ backgroundColor: course.accentColor }}
                              />
                              <h5 className="font-bold text-slate-900 text-xs sm:text-sm">
                                {level.name}
                              </h5>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed pl-4">
                              {level.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Course Features */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                        Instructional Methodology &amp; Student Support
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {course.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#168038] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA within expanded view */}
                    <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
                      <p className="text-xs text-slate-500">
                        Sessions are scheduled in convenient weekend and evening slots to accommodate global time zones (IST, GST, GMT, EST, PST).
                      </p>
                      <button
                        onClick={() => onOpenEnquiry('WisdaSchool', `${course.name} Course`)}
                        className="px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-[#0a2558] hover:bg-[#081d45] transition-colors flex items-center gap-1.5"
                      >
                        <span>Request Free Trial / Schedule ({SCHOOL_PHONE_DISPLAY})</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
