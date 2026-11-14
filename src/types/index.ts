export type Division = 'WisdaSchool' | 'WisdaCare' | 'WisdaWorks' | 'Careers' | 'General';

export type CourseCategory = 'all' | 'languages' | 'arts' | 'stem';

export interface CourseLevel {
  name: string;
  nativeName?: string;
  description: string;
}

export interface Course {
  id: string;
  name: string;
  nativeName?: string;
  category: 'languages' | 'arts' | 'stem';
  kicker: string;
  tagline: string;
  description: string;
  totalSessions: string;
  levelCount: string;
  deliveryMode: string;
  levels: CourseLevel[];
  features: string[];
  ageGroup: string;
  accentColor: string;
  bannerImage?: string;
}

export interface CareTopic {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface EnquiryData {
  division: Division;
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  interest: string;
  learnerAge?: string;
  message?: string;
  deliveryMethod: 'whatsapp' | 'email';
}

export interface CareerApplicantData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  role: string;
  experienceYears: string;
  qualification: string;
  portfolioUrl?: string;
  notes?: string;
  deliveryMethod: 'whatsapp' | 'email';
}
