import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Mail, CheckCircle2, Copy, AlertCircle, ShieldCheck, HeartPulse, GraduationCap } from 'lucide-react';
import { Division, EnquiryData } from '../types';
import { CARE_PHONE, CARE_PHONE_DISPLAY } from '../data/careData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDivision?: Division;
  defaultInterest?: string;
}

export const SCHOOL_PHONE = '917010100644';
export const SCHOOL_PHONE_DISPLAY = '+91 70101 00644';
export const BUSINESS_EMAIL = 'marketing@wisdatree.com';

const DIVISION_INTERESTS: Record<'WisdaSchool' | 'WisdaCare', string[]> = {
  WisdaSchool: [
    'Tamil Language Course',
    'Hindi Language Course',
    'Malayalam Language Course',
    'Bharatanatyam Classical Dance',
    'Carnatic Music (Vocal)',
    'Mathematics Foundations & Olympiad',
    'Experiential Science Discovery',
    'General WisdaSchool Admissions Enquiry'
  ],
  WisdaCare: [
    'Motherhood Diaries (Signature Webseries & Webinars)',
    'Pregnancy & Maternal Trimester Wellness',
    "Women's Health & Hormonal Balance (PCOS/Thyroid)",
    'Child Health & Developmental Milestones',
    'Adolescent & Teen Wellbeing',
    "Men's Health & Preventive Fitness",
    'Mental Wellbeing & Emotional Resilience',
    'Preventive Nutrition & Lifestyle Medicine',
    'General WisdaCare Health Enquiry'
  ]
};

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultDivision = 'General',
  defaultInterest = ''
}) => {
  // Normalize division to either WisdaSchool or WisdaCare for the form
  const initialDivision: 'WisdaSchool' | 'WisdaCare' =
    defaultDivision === 'WisdaCare' ? 'WisdaCare' : 'WisdaSchool';

  const [division, setDivision] = useState<'WisdaSchool' | 'WisdaCare'>(initialDivision);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [interest, setInterest] = useState(defaultInterest);
  const [learnerAge, setLearnerAge] = useState('');
  const [message, setMessage] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'info' | 'error'; text: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const [preparedMessage, setPreparedMessage] = useState('');
  const [showSuccessCheckmark, setShowSuccessCheckmark] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const activeDiv: 'WisdaSchool' | 'WisdaCare' =
        defaultDivision === 'WisdaCare' ? 'WisdaCare' : 'WisdaSchool';
      setDivision(activeDiv);

      const availableInterests = DIVISION_INTERESTS[activeDiv] || [];
      if (defaultInterest && availableInterests.includes(defaultInterest)) {
        setInterest(defaultInterest);
      } else if (availableInterests.length > 0) {
        setInterest(availableInterests[0]);
      }
      setStatusMessage(null);
      setCopied(false);
      setPreparedMessage('');
      setShowSuccessCheckmark(false);
    }
  }, [isOpen, defaultDivision, defaultInterest]);

  // Handle division switch inside modal
  const handleDivisionChange = (newDiv: 'WisdaSchool' | 'WisdaCare') => {
    setDivision(newDiv);
    const interests = DIVISION_INTERESTS[newDiv] || [];
    setInterest(interests[0] || '');
  };

  if (!isOpen) return null;

  const targetPhoneNumber = division === 'WisdaCare' ? CARE_PHONE : SCHOOL_PHONE;
  const targetPhoneDisplay = division === 'WisdaCare' ? CARE_PHONE_DISPLAY : SCHOOL_PHONE_DISPLAY;

  const isGeneralModal = defaultDivision === 'General' || !defaultDivision;

  const constructFormattedMessage = (): string => {
    const greeting = division === 'WisdaCare' ? 'WisdaCare Team' : 'WisdaSchool Team';
    return `Hello ${greeting}, I would like to make an enquiry with Wisdatree.

• Division: ${division}
• Programme / Topic: ${interest || 'General'}
• Full Name: ${name}
• WhatsApp / Phone: ${phone}
• Email: ${email}
• Country: ${country || 'Not specified'}
• City: ${city || 'Not specified'}${division === 'WisdaSchool' && learnerAge ? `\n• Learner Age / Grade: ${learnerAge}` : ''}${message ? `\n• Message / Requirements: ${message}` : ''}

Looking forward to hearing from your team. Thank you!`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !email.trim()) {
      setShowSuccessCheckmark(false);
      setStatusMessage({
        type: 'error',
        text: 'Please complete your name, phone/WhatsApp number, and email address.'
      });
      return;
    }

    const textPayload = constructFormattedMessage();
    setPreparedMessage(textPayload);
    setShowSuccessCheckmark(true);

    if (deliveryMethod === 'whatsapp') {
      const waUrl = `https://wa.me/${targetPhoneNumber}?text=${encodeURIComponent(textPayload)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setStatusMessage({
        type: 'success',
        text: `Your enquiry has been prepared for ${division} WhatsApp (${targetPhoneDisplay}). Please tap "Send" in your WhatsApp chat window to complete delivery.`
      });
    } else {
      const subject = `[Wisdatree Enquiry] ${division} - ${interest || 'General'}`;
      const mailtoUrl = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(textPayload)}`;
      window.location.href = mailtoUrl;
      setStatusMessage({
        type: 'info',
        text: `Your default email app is opening with your details addressed to ${BUSINESS_EMAIL}. Please tap "Send" to finalize your message.`
      });
    }
  };

  const handleCopyMessage = () => {
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
        {/* Header Bar */}
        <div className="relative bg-gradient-to-r from-[#0a2558] via-[#0d3472] to-[#168038] px-6 py-5 text-white">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200">
                Wisdatree Direct Connect
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-0.5">
                {isGeneralModal
                  ? 'Enquire with Wisdatree'
                  : division === 'WisdaCare'
                  ? 'Connect with WisdaCare'
                  : 'Enquire with WisdaSchool'}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-hidden"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-lg">
            {isGeneralModal
              ? 'Select WisdaSchool or WisdaCare below to submit your enquiry directly to the dedicated department.'
              : division === 'WisdaCare'
              ? 'Health awareness webinars, motherhood guidance & clinical literacy.'
              : 'Interactive spoken languages, Bharatanatyam, Carnatic vocal & STEM.'}
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Step 1: Simple Dropdown to Choose WisdaSchool / WisdaCare */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                Select Programme / Department <span className="text-red-500">*</span>
              </label>
              <span className="text-[11px] font-semibold text-emerald-800">
                Direct WhatsApp Route
              </span>
            </div>

            <select
              value={division}
              onChange={(e) => handleDivisionChange(e.target.value as 'WisdaSchool' | 'WisdaCare')}
              className="w-full px-3.5 py-2.5 rounded-xl border-2 border-emerald-600 bg-white text-slate-900 font-bold text-sm focus:ring-2 focus:ring-[#168038]/20 focus:outline-hidden transition-all shadow-xs cursor-pointer"
            >
              <option value="WisdaSchool">🎓 WisdaSchool — Online Languages, Classical Arts &amp; STEM</option>
              <option value="WisdaCare">🩺 WisdaCare — Doctor-Guided Family &amp; Maternal Health</option>
            </select>

            {/* Dynamic Routing Info Banner */}
            <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white border border-emerald-200 text-xs">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#168038]" />
                <span className="text-slate-600">Routes to WhatsApp:</span>
                <strong className="text-[#0a2558] font-bold text-xs sm:text-sm">{targetPhoneDisplay}</strong>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-[#168038]">
                {division === 'WisdaCare' ? 'WisdaCare Healthcare' : 'WisdaSchool Admissions'}
              </span>
            </div>
          </div>

          {/* Respective Course / Topic Selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              {division === 'WisdaCare' ? 'Choose Health Topic / Webseries' : 'Choose Subject / Course'}{' '}
              <span className="text-red-500">*</span>
            </label>
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-800 text-sm focus:border-[#168038] focus:ring-2 focus:ring-[#168038]/20 focus:bg-white focus:outline-hidden transition-all"
              required
            >
              {DIVISION_INTERESTS[division]?.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* WisdaCare Doctor Assurance Notice */}
          {division === 'WisdaCare' && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-center gap-2">
              <HeartPulse className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>
                <strong>Doctor Guarantee:</strong> Sessions handled and designed exclusively by certified doctors and medical practitioners with scientific proofs.
              </span>
            </div>
          )}

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Ananya Raman"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-[#168038] focus:ring-2 focus:ring-[#168038]/20 focus:outline-hidden transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                WhatsApp / Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g., +91 98765 43210"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-[#168038] focus:ring-2 focus:ring-[#168038]/20 focus:outline-hidden transition-all"
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
                placeholder="you@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-[#168038] focus:ring-2 focus:ring-[#168038]/20 focus:outline-hidden transition-all"
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
                placeholder="India, UAE, USA..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-[#168038] focus:ring-2 focus:ring-[#168038]/20 focus:outline-hidden transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                City / Town
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Chennai, Dubai, London..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-[#168038] focus:ring-2 focus:ring-[#168038]/20 focus:outline-hidden transition-all"
              />
            </div>
          </div>

          {/* Learner Age (shown for WisdaSchool) */}
          {division === 'WisdaSchool' && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Learner's Age or Current Grade (Optional)
              </label>
              <input
                type="text"
                value={learnerAge}
                onChange={(e) => setLearnerAge(e.target.value)}
                placeholder="e.g., 7 years old / Grade 3, or Adult learner"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-[#168038] focus:ring-2 focus:ring-[#168038]/20 focus:outline-hidden transition-all"
              />
            </div>
          )}

          {/* Message / Details */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Your Message or Preferred Timings (Optional)
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                division === 'WisdaCare'
                  ? 'Tell us your questions for our doctors, preferred webinar topics, or health education queries...'
                  : 'Tell us what you hope to achieve, preferred weekday/weekend times, or specific questions...'
              }
              rows={2}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-[#168038] focus:ring-2 focus:ring-[#168038]/20 focus:outline-hidden transition-all"
            />
          </div>

          {/* Delivery Method Choice - Highlighted WhatsApp vs Dulled Email */}
          <div className="pt-2">
            <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
              Choose Delivery Channel <span className="text-red-500">*</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* WhatsApp Option - Prominently highlighted as preferred */}
              <label
                className={`relative flex items-start gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                  deliveryMethod === 'whatsapp'
                    ? 'border-[#168038] bg-emerald-50/70 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-emerald-300'
                }`}
              >
                <input
                  type="radio"
                  name="delivery_method"
                  value="whatsapp"
                  checked={deliveryMethod === 'whatsapp'}
                  onChange={() => setDeliveryMethod('whatsapp')}
                  className="mt-1 text-[#168038] focus:ring-[#168038]"
                />
                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-sm font-bold text-slate-900 flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 text-[#168038] fill-[#168038]/20" />
                      WhatsApp
                    </span>
                    <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                      Recommended · Fastest Replies
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Pre-fills your message directly to {division} ({targetPhoneDisplay}). Instant confirmation.
                  </p>
                </div>
              </label>

              {/* Email Option - Dulled / subtle styling */}
              <label
                className={`relative flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                  deliveryMethod === 'email'
                    ? 'border-slate-400 bg-slate-100/90 text-slate-900'
                    : 'border-slate-200 bg-slate-50/50 text-slate-500 hover:bg-slate-100/50 opacity-70 hover:opacity-100'
                }`}
              >
                <input
                  type="radio"
                  name="delivery_method"
                  value="email"
                  checked={deliveryMethod === 'email'}
                  onChange={() => setDeliveryMethod('email')}
                  className="mt-1 text-slate-600 focus:ring-slate-500"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-medium text-slate-700 flex items-center gap-1">
                      <Mail className="w-4 h-4 text-slate-500" />
                      Email App
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">(Alternative)</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Opens your Gmail or default mobile mail app with enquiry formatted to {BUSINESS_EMAIL}.
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Privacy & Medical note */}
          <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              By submitting, you agree to be contacted regarding your enquiry. Wisdatree never shares contact details with third parties. {division === 'WisdaCare' && 'Please do not include confidential medical records or emergency concerns.'}
            </span>
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
                    {deliveryMethod === 'whatsapp' ? 'Enquiry Prepared for WhatsApp!' : 'Email Client Launched!'}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#168038] text-white">
                    Action Prepared
                  </span>
                </div>
                <p className="text-xs text-emerald-900 mt-0.5 font-medium leading-relaxed">
                  {deliveryMethod === 'whatsapp'
                    ? `Your enquiry for ${division} has been composed. Tap "Send" in WhatsApp to deliver directly to ${targetPhoneDisplay}.`
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
                      onClick={handleCopyMessage}
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

          {/* Submit Action Button */}
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
                  <span>Send to {division} WhatsApp ({targetPhoneDisplay}) ↗</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  <span>Open Email App ↗ ({BUSINESS_EMAIL})</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
