export interface PolicyDocument {
  id: 'rescheduling' | 'refund' | 'privacy';
  title: string;
  lastUpdated: string;
  status: string;
  summary: string;
  sections: {
    heading: string;
    content: string[];
  }[];
}

export const POLICIES_DATA: Record<'rescheduling' | 'refund' | 'privacy', PolicyDocument> = {
  rescheduling: {
    id: 'rescheduling',
    title: 'Class Attendance & Rescheduling Policy (Draft)',
    lastUpdated: 'November 2026',
    status: 'Draft Pending Final Effective Dates',
    summary: 'Guidelines for attendance, advance notice requirements for class adjustments, educator cancellations, and make-up session scheduling across WisdaSchool programmes.',
    sections: [
      {
        heading: '1. Purpose & Guiding Principles',
        content: [
          'WisdaSchool is committed to continuous, high-quality learning while respecting the valuable time of both students and dedicated educators.',
          'Consistency in attendance ensures sustained progress, especially across language fluency, classical vocal, dance practice, and cumulative mathematical concepts.'
        ]
      },
      {
        heading: '2. Student-Requested Rescheduling (1-on-1 Sessions)',
        content: [
          'Notice Period: Families must notify WisdaSchool support at least 24 hours in advance via WhatsApp (+91 70101 00644) or email (marketing@wisdatree.com) to request a rescheduled session.',
          'Monthly Allowance: A maximum of two (2) rescheduled sessions per calendar month are permitted for 1-on-1 enrolled students with valid advance notice.',
          'Make-Up Window: Rescheduled classes must be completed within 30 days of the original scheduled date, subject to educator availability.'
        ]
      },
      {
        heading: '3. Group Classes & Small Cohorts',
        content: [
          'Due to the collaborative nature of cohort learning, group classes proceed according to the published schedule and cannot be rescheduled for individual absentees.',
          'Recorded class recaps, practice worksheets, and educator lesson notes will be shared with absent students to ensure continuity.'
        ]
      },
      {
        heading: '4. Educator-Initiated Cancellations',
        content: [
          'In the rare event that an instructor is indisposed due to illness or emergency, WisdaSchool will provide timely notification.',
          'A substitute specialist of equal qualification will be arranged or a guaranteed make-up session will be scheduled at a time mutually convenient to the family.'
        ]
      },
      {
        heading: '5. Technical Glitches & Internet Disruptions',
        content: [
          'If a session is interrupted due to platform or verified connectivity failure on either side exceeding 15 minutes, the remaining time will be credited or rescheduled without penalty.'
        ]
      }
    ]
  },
  refund: {
    id: 'refund',
    title: 'Fee Structure & Refund Policy (Draft)',
    lastUpdated: 'November 2026',
    status: 'Draft Pending Final Effective Dates',
    summary: 'Clear, transparent rules regarding course fee payments, trial class satisfaction guarantees, early withdrawal prorations, and refund request procedures.',
    sections: [
      {
        heading: '1. Transparency Commitment',
        content: [
          'All course fees, session counts, and study materials are disclosed upfront before enrolment confirmation with no hidden registration surcharges.',
          'Payment is processed securely in advance of each learning module or monthly cycle.'
        ]
      },
      {
        heading: '2. Trial Session & Initial 7-Day Guarantee',
        content: [
          'New students enrolled in WisdaSchool courses are eligible for a 100% money-back satisfaction guarantee if they withdraw within 7 days of their initial class or before their second scheduled session.',
          'This allows parents and learners to evaluate the teaching style, pacing, and online classroom interaction with complete peace of mind.'
        ]
      },
      {
        heading: '3. Mid-Course Withdrawals & Proration',
        content: [
          'If a student is unable to continue due to relocation, medical circumstances, or scheduling conflicts after the 7-day period, unutilized classes may be paused for up to 90 days.',
          'Alternatively, the family may request a pro-rated refund for remaining unconducted sessions, subject to a nominal administrative processing fee of 10%.'
        ]
      },
      {
        heading: '4. Non-Refundable Items',
        content: [
          'Custom physical learning kits (once dispatched) and completed instructional sessions are non-refundable.',
          'Webinar fees for WisdaCare community awareness drives, where applicable, are non-refundable once the event link is accessed (most general webinars are offered free of charge).'
        ]
      },
      {
        heading: '5. Refund Processing Timeline',
        content: [
          'Approved refunds are remitted to the original payment source within 7 to 10 business days of written confirmation from our billing desk.'
        ]
      }
    ]
  },
  privacy: {
    id: 'privacy',
    title: 'Wisdatree Privacy Notice & Data Protection',
    lastUpdated: 'November 2026',
    status: 'Active',
    summary: 'How Wisdatree collects, uses, and safeguards learner contact details, health enquiry information, and job applicant submissions.',
    sections: [
      {
        heading: '1. Data We Collect',
        content: [
          'We collect contact information voluntarily supplied by visitors, including full name, phone / WhatsApp number, email address, country, city, learner grade/age, and career qualifications.',
          'We DO NOT request or collect sensitive medical diagnoses, doctor prescriptions, or patient health charts through our public contact forms.'
        ]
      },
      {
        heading: '2. Purpose of Processing',
        content: [
          'To respond to course enquiries, coordinate trial classes, provide webinar access links, and evaluate job applicants for instructional roles.',
          'To send occasional curriculum updates and important class scheduling notifications.'
        ]
      },
      {
        heading: '3. Zero Third-Party Selling',
        content: [
          'Wisdatree never sells, rents, or monetizes user contact data to third-party marketing brokers.',
          'Data is handled strictly by authorized Wisdatree academic and wellness coordinators.'
        ]
      }
    ]
  }
};
