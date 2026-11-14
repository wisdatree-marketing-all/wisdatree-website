import { CareTopic } from '../types';

export const CARE_PHONE = '919344010644';
export const CARE_PHONE_DISPLAY = '+91 93440 10644';

export const CARE_TOPICS: CareTopic[] = [
  {
    id: 'pregnancy-motherhood',
    title: 'Pregnancy & Motherhood',
    tagline: 'Empathetic prenatal education, trimester guidance, and gentle newborn care',
    description: 'Empowering expectant and new mothers with medically verified knowledge on nutrition, physical changes, labor preparation, emotional wellbeing, and postpartum healing.',
    icon: 'Baby',
    highlights: ['Trimester-by-trimester health milestones', 'Nutrition & safe prenatal exercise', 'Postpartum recovery and lactation education', 'Emotional wellness and partner support']
  },
  {
    id: 'womens-health',
    title: "Women's Health & Hormonal Balance",
    tagline: 'Navigating PCOS, menstrual wellness, fertility awareness, and menopause',
    description: 'Demystifying female reproductive health through clear, respectful medical education that equips women at every life stage to advocate for their health with confidence.',
    icon: 'HeartHandshake',
    highlights: ['PCOS & PCOD lifestyle management', 'Menstrual health and pain awareness', 'Thyroid and metabolic balance', 'Perimenopause and healthy aging']
  },
  {
    id: 'child-health',
    title: 'Child Health & Developmental Milestones',
    tagline: 'Nurturing physical growth, immunity, childhood nutrition, and routine screening',
    description: 'Practical, evidence-grounded guidance for parents on early childhood milestones, balanced nutrition, common pediatric conditions, vaccination schedules, and sleep routines.',
    icon: 'Sparkles',
    highlights: ['Early childhood growth benchmarks', 'Nutrition for picky eaters and immunity', 'Common allergies and illness prevention', 'Healthy screen-time and sleep hygiene']
  },
  {
    id: 'adolescent-health',
    title: 'Adolescent & Teen Wellbeing',
    tagline: 'Supporting youth through physical changes, emotional growth, and healthy habits',
    description: 'Age-appropriate education addressing puberty, hormonal transitions, skin health, body image, mental resilience, and stress management for teens and concerned parents.',
    icon: 'Smile',
    highlights: ['Pubertal transitions and body confidence', 'Acne and skin health facts', 'Managing academic pressure and exam anxiety', 'Open communication channels with parents']
  },
  {
    id: 'mens-health',
    title: "Men's Health & Preventive Fitness",
    tagline: 'Cardiovascular wellness, stress management, metabolic health, and vitality',
    description: 'Breaking down barriers to men seeking proactive care. Covering cardiac risk factors, workplace ergonomics, work-life balance, and routine annual preventive screening.',
    icon: 'Activity',
    highlights: ['Cardiovascular risk assessment', 'Desk posture, back health, and stamina', 'Stress and blood pressure management', 'Prostate health awareness for ages 40+']
  },
  {
    id: 'mental-wellbeing',
    title: 'Mental Wellbeing & Emotional Resilience',
    tagline: 'De-stigmatizing anxiety, burnout, sleep health, and mindful living',
    description: 'Fostering approachable conversations about mental wellness, coping mechanisms for everyday burnout, caregiver fatigue, mindfulness practices, and when to seek counseling.',
    icon: 'Brain',
    highlights: ['Coping with burnout and caregiver fatigue', 'Mindfulness and breathwork strategies', 'Sleep hygiene and insomnia management', 'Building compassionate family support']
  },
  {
    id: 'preventive-nutrition',
    title: 'Preventive Nutrition & Lifestyle Medicine',
    tagline: 'Whole-food nutrition, diabetes prevention, gut health, and family meal planning',
    description: 'Practical, culturally rooted nutrition education that translates clinical guidelines into delicious, accessible everyday family meals and preventative habits.',
    icon: 'Apple',
    highlights: ['Managing blood sugar through balanced plates', 'Gut microbiome and digestive wellness', 'Interpreting food labels and portion guides', 'Healthy traditional Indian food choices']
  },
  {
    id: 'hospital-partnerships',
    title: 'Hospital & Healthcare Expert Collaborations',
    tagline: 'Bridging medical expertise with community awareness and corporate wellness',
    description: 'Partnering with accredited healthcare institutions, senior gynecologists, pediatricians, and psychologists to deliver interactive public webinars and workplace health drives.',
    icon: 'Building2',
    highlights: ['Specialist-moderated live interactive Q&A sessions', 'Corporate employee wellness workshops', 'Community public health seminars', 'Patient education literature co-creation']
  }
];

export interface WebinarEvent {
  id: string;
  series: string;
  title: string;
  dateStr: string;
  dayNumber: string;
  monthShort: string;
  time: string;
  status: 'conducted' | 'upcoming';
  statusBadge: string;
  topicHighlights: string[];
  speakers: string;
  actionText: string;
}

export const WEBINAR_CALENDAR: WebinarEvent[] = [
  {
    id: 'webinar-nov-1',
    series: 'Motherhood Diaries · Edition 1',
    title: 'Conception, Trimester Milestones & Maternal Mindset',
    dateStr: 'November 1, 2026',
    dayNumber: '01',
    monthShort: 'NOV',
    time: '11:00 AM IST',
    status: 'conducted',
    statusBadge: 'Premiered Live on Nov 1 · Successfully Completed',
    topicHighlights: [
      'Trimester 1 & 2 scan interpretation and clinical routine screenings',
      'Evidence-based maternal nutrition & managing nausea with kitchen foods',
      'Overcoming early pregnancy anxiety with gentle mindfulness'
    ],
    speakers: 'Handled & Designed by Certified Obstetricians & Medical Practitioners',
    actionText: 'Request Nov 1 Session Recap on WhatsApp'
  }
];

export const WEBINAR_FEATURE = {
  title: 'Motherhood Diaries',
  badge: 'WisdaCare Signature Series',
  tagline: "Let's talk, her health.",
  subtitle: 'Evidence-Based Maternal Education Designed by Certified Doctors',
  description: 'WisdaCare health webinars and educational sessions are handled and designed exclusively by certified doctors and medical practitioners grounded in peer-reviewed scientific proof. No myths, no unverified hearsay—just trusted, empathetic medical literacy.',
  points: [
    'Handled & designed by certified doctors and registered medical practitioners with scientific proofs',
    'Live Q&A: Have your personal maternal wellness questions addressed by verified medical faculty',
    'Clinical facts without judgment: clear, jargon-free explanations of ultrasound scans and prenatal tests',
    '100% Free educational registration via WhatsApp (+91 93440 10644)'
  ],
  image: '/assets/aistudio/Motherhood_Diaries_Wellness_Poster_c33e5d9c.png',
  calendar: WEBINAR_CALENDAR,
  nextNotice: 'Future session dates and upcoming topics will be announced soon. Connect with us on WhatsApp (+91 93440 10644) to be notified first or request the Nov 1 session highlights.'
};


