import React, { useState } from 'react';
import { X, Briefcase, MessageCircle, Mail, CheckCircle2, Copy, AlertCircle, Sparkles } from 'lucide-react';
import { CareerApplicantData } from '../types';
import { SCHOOL_PHONE, SCHOOL_PHONE_DISPLAY, BUSINESS_EMAIL } from './EnquiryModal';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: string;
}

const OPEN_ROLES = [
  'Tamil Language Educator / Tutor',
  'Hindi Language Educator / Tutor',
  'Malayalam Language Educator / Tutor',
  'Bharatanatyam Dance Guru',
  'Carnatic Vocal Music Teacher',
  'Mathematics Educator (Foundations & Olympiad)',
  'Experiential Science Tutor',
  'Maternal & Health Education Content Creator',
  'Academic Program Coordinator',
  'Student Experience & Community Specialist'
];

export const CareersModal: React.FC<CareersModalProps> = ({
  isOpen,
  onClose,
  defaultRole = 'Tamil Language Educator / Tutor'
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [role, setRole] = useState(defaultRole);
  const [experienceYears, setExperienceYears] = useState('1-3 years');
  const [qualification, setQualification] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [notes, setNotes] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'info' | 'error'; text: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const [preparedMessage, setPreparedMessage] = useState('');
  const [showSuccessCheckmark, setShowSuccessCheckmark] = useState(false);

  if (!isOpen) return null;

  const constructCareerMessage = (): string => {
    return `Hello Wisdatree Recruitment Team, I am submitting my application to join the team.

• Applying For Role: ${role}
• Full Name: ${fullName}
• Phone / WhatsApp: ${phone}
• Email: ${email}
• Location: ${city ? `${city}, ` : ''}${country || 'Not specified'}
• Experience: ${experienceYears}
• Highest Qualification: ${qualification || 'Not specified'}${portfolioUrl ? `\n• Portfolio / LinkedIn / Resume Link: ${portfolioUrl}` : ''}${notes ? `\n• Why Wisdatree / Summary: ${notes}` : ''}

I look forward to discussing how my skills can contribute to Wisdatree. Thank you!`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      setShowSuccessCheckmark(false);
      setStatusMessage({
        type: 'error',
        text: 'Please provide your full name, phone/WhatsApp number, and email.'
      });
      return;
    }

    const textPayload = constructCareerMessage();
    setPreparedMessage(textPayload);
    setShowSuccessCheckmark(true);

    if (deliveryMethod === 'whatsapp') {
      const waUrl = `https://wa.me/${SCHOOL_PHONE}?text=${encodeURIComponent(textPayload)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setStatusMessage({
        type: 'success',
        text: `Your career application has been prepared for WhatsApp (${SCHOOL_PHONE_DISPLAY}). Please tap "Send" in WhatsApp to submit.`
      });
    } else {
      const subject = `[Career Application] ${role} - ${fullName}`;
      const mailtoUrl = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(textPayload)}`;
      window.location.href = mailtoUrl;
      setStatusMessage({
        type: 'info',
        text: `Your email client is opening addressed to ${BUSINESS_EMAIL}. Please tap "Send" in your mail app to submit your application.`
      });
    }
  };

  const handleCopy = () => {
    if (preparedMessage) {
      navigator.clipboard.writeText(preparedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0a2558] to-[#168038] px-6 py-5 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-white/10 text-emerald-300">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200">
                  Join The Wisdatree Faculty &amp; Team
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Career Application
                </h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-hidden"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 mt-2">
            We are always seeking passionate language educators, classical arts teachers, STEM coaches, and health communicators.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Target Role */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Select Position Applied For <span className="text-red-500">*</span>
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-800 text-sm focus:border-[#168038] focus:ring-2 focus:ring-[#168038]/20 focus:bg-white focus:outline-hidden"
              required
            >
              {OPEN_ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          {/* Full Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g., Sundar Rajan"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-[#168038] focus:ring-2 focus:ring-[#168038]/20 focus:outline-hidden"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                WhatsApp / Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g., +91 98400 12345"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-[#168038] focus:ring-2 focus:ring-[#168038]/20 focus:outline-hidden"
                required
              />
            </div>
          </div>

          {/* Email, Country & City */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-1">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-[#168038] focus:ring-2 focus:ring-[#168038]/20 focus:outline-hidden"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Country
              </label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="e.g., India"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-[#168038] focus:ring-2 focus:ring-[#168038]/20 focus:outline-hidden"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                City / Base
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g., Chennai"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-[#168038] focus:ring-2 focus:ring-[#168038]/20 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Experience & Qualification */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Years of Teaching / Professional Experience
              </label>
              <select
                value={experienceYears}
                onChange={(e) => setExperienceYears(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-sm focus:border-[#168038] focus:ring-2 focus:ring-[#168038]/20 focus:outline-hidden"
              >
                <option value="Fresher / Passionate Entry">Fresher / Passionate Entry</option>
                <option value="1-3 years">1 - 3 years</option>
                <option value="4-7 years">4 - 7 years</option>
                <option value="8+ years (Senior Faculty)">8+ years (Senior Faculty)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Educational / Arts Qualification
              </label>
              <input
                type="text"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                placeholder="e.g., M.A. Tamil / Arangetram / B.Ed / M.Sc"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-[#168038] focus:ring-2 focus:ring-[#168038]/20 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Portfolio / LinkedIn / Resume URL */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Resume Link / LinkedIn / Video Sample Link (Optional)
            </label>
            <input
              type="url"
              value={portfolioUrl}
              onChange={(e) => setPortfolioUrl(e.target.value)}
              placeholder="https://linkedin.com/in/... or Google Drive link"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-[#168038] focus:ring-2 focus:ring-[#168038]/20 focus:outline-hidden"
            />
          </div>

          {/* Statement of Interest */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Brief Introduction &amp; Teaching Philosophy (Optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Share a short note about your instructional style, passion for teaching, or why you want to join Wisdatree..."
              rows={2}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-[#168038] focus:ring-2 focus:ring-[#168038]/20 focus:outline-hidden"
            />
          </div>

          {/* Delivery Method Choice - WhatsApp Highlighted vs Dulled Email */}
          <div className="pt-2">
            <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
              Submission Channel <span className="text-red-500">*</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* WhatsApp - Highlighted */}
              <label
                className={`relative flex items-start gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                  deliveryMethod === 'whatsapp'
                    ? 'border-[#168038] bg-emerald-50/70 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-emerald-300'
                }`}
              >
                <input
                  type="radio"
                  name="career_delivery"
                  value="whatsapp"
                  checked={deliveryMethod === 'whatsapp'}
                  onChange={() => setDeliveryMethod('whatsapp')}
                  className="mt-1 text-[#168038] focus:ring-[#168038]"
                />
                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-sm font-bold text-slate-900 flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 text-[#168038] fill-[#168038]/20" />
                      WhatsApp Application
                    </span>
                    <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                      Recommended · Fastest Response
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Direct dispatch to Wisdatree Careers desk at {SCHOOL_PHONE_DISPLAY}.
                  </p>
                </div>
              </label>

              {/* Email - Dulled */}
              <label
                className={`relative flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                  deliveryMethod === 'email'
                    ? 'border-slate-400 bg-slate-100/90 text-slate-900'
                    : 'border-slate-200 bg-slate-50/50 text-slate-500 hover:bg-slate-100/50 opacity-70 hover:opacity-100'
                }`}
              >
                <input
                  type="radio"
                  name="career_delivery"
                  value="email"
                  checked={deliveryMethod === 'email'}
                  onChange={() => setDeliveryMethod('email')}
                  className="mt-1 text-slate-600 focus:ring-slate-500"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-medium text-slate-700 flex items-center gap-1">
                      <Mail className="w-4 h-4 text-slate-500" />
                      Email Application
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">(Alternative)</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Opens default mail app addressed to {BUSINESS_EMAIL}.
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Subtle Success Checkmark Animation Banner */}
          {showSuccessCheckmark && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-emerald-100/60 to-emerald-50 border-2 border-emerald-500/80 shadow-md shadow-emerald-700/10 flex flex-col sm:flex-row items-center gap-3.5 animate-in zoom-in-95 duration-300">
              <div className="relative flex items-center justify-center shrink-0">
                <div className="absolute w-12 h-12 rounded-full bg-emerald-400/40 animate-ping" />
                <div className="w-10 h-10 rounded-full bg-[#168038] text-white flex items-center justify-center shadow-md">
                  <svg
                    className="w-6 h-6 stroke-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      className="animate-checkmark-path"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-center sm:text-left flex-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="font-extrabold text-sm text-[#0a2558]">
                    {deliveryMethod === 'whatsapp' ? 'Application Ready for WhatsApp!' : 'Email Application Prepared!'}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#168038] text-white">
                    Action Prepared
                  </span>
                </div>
                <p className="text-xs text-emerald-900 mt-0.5 font-medium leading-relaxed">
                  {deliveryMethod === 'whatsapp'
                    ? `Your application for ${role} is formatted. Please tap "Send" in WhatsApp to deliver directly to ${SCHOOL_PHONE_DISPLAY}.`
                    : `Your default email app is opening addressed to ${BUSINESS_EMAIL}. Please tap "Send" to finalize.`}
                </p>
              </div>
            </div>
          )}

          {/* Status Message */}
          {statusMessage && (
            <div
              className={`p-3 rounded-xl text-xs flex items-start gap-2 ${
                statusMessage.type === 'success'
                  ? 'bg-emerald-100/80 text-emerald-950 border border-emerald-300'
                  : statusMessage.type === 'error'
                  ? 'bg-red-100/80 text-red-950 border border-red-300'
                  : 'bg-blue-100/80 text-blue-950 border border-blue-300'
              }`}
            >
              {statusMessage.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              ) : statusMessage.type === 'error' ? (
                <AlertCircle className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              )}
              <div className="flex-1">
                <p>{statusMessage.text}</p>
                {preparedMessage && (
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-800 bg-white px-2.5 py-1 rounded-md border border-slate-300 shadow-2xs hover:bg-slate-50"
                    >
                      <Copy className="w-3 h-3" />
                      {copied ? 'Copied to Clipboard!' : 'Copy Formatted Text'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="pt-2 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>

            <button
              type="submit"
              className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 ${
                deliveryMethod === 'whatsapp'
                  ? 'bg-[#168038] hover:bg-[#136e2f] text-white shadow-emerald-700/20 active:scale-[0.99]'
                  : 'bg-[#0a2558] hover:bg-[#081d45] text-white active:scale-[0.99]'
              }`}
            >
              {deliveryMethod === 'whatsapp' ? (
                <>
                  <MessageCircle className="w-4 h-4" />
                  <span>Submit Application via WhatsApp ({SCHOOL_PHONE_DISPLAY}) ↗</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  <span>Submit Application via Email ↗</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
