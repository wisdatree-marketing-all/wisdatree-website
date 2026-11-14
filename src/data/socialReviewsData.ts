export interface SocialPost {
  id: string;
  division: 'WisdaCare' | 'WisdaSchool';
  platform: 'Instagram' | 'Facebook' | 'YouTube';
  title: string;
  excerpt: string;
  date: string;
  url: string;
  category: string;
  image?: string;
  likes?: string;
}

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: 'wc-post-1',
    division: 'WisdaCare',
    platform: 'Instagram',
    title: 'Motherhood Diaries — Trimester 1 & 2 Nutrition Guide',
    excerpt: 'Key micronutrients every expectant mother needs: folate, iron balance, and managing early morning sickness with everyday kitchen foods.',
    date: 'Nov 3, 2026',
    url: 'https://www.instagram.com/wisda_care/',
    category: 'Maternal Nutrition',
    image: '/assets/aistudio/Motherhood_Diaries_Wellness_Poster_c33e5d9c.png',
    likes: '142 likes'
  },
  {
    id: 'ws-post-1',
    division: 'WisdaSchool',
    platform: 'Facebook',
    title: 'Tamil Aathichudi in the Living Room',
    excerpt: 'How our young diaspora learners in London & Dubai are memorizing Avvaiyar’s 109 moral verses through melody and daily storytelling.',
    date: 'Nov 2, 2026',
    url: 'https://www.facebook.com/profile.php?id=61595978941076',
    category: 'Tamil Heritage',
    image: '/src/assets/images/hero_wisdatree_learning_1793991991489.jpg',
    likes: '89 reactions'
  },
  {
    id: 'wc-post-2',
    division: 'WisdaCare',
    platform: 'YouTube',
    title: 'Doctor Q&A: Overcoming Postpartum Fatigue & Breastfeeding Myths',
    excerpt: 'Senior obstetrician and lactation educator break down practical latching techniques and gentle partner support strategies.',
    date: 'Nov 1, 2026',
    url: 'https://www.youtube.com/@Wisdacare',
    category: 'Doctor Explainer',
    image: '/src/assets/images/wisdacare_motherhood_wellness_1793991992482.jpg',
    likes: '480 views'
  },
  {
    id: 'ws-post-2',
    division: 'WisdaSchool',
    platform: 'Facebook',
    title: 'Bharatanatyam Adavu Precision Masterclass',
    excerpt: 'From Natta Adavu footwork to subtle hastha mudra expression: a glimpse into our online live weekend coaching sessions.',
    date: 'Oct 30, 2026',
    url: 'https://www.facebook.com/profile.php?id=61595978941076',
    category: 'Classical Arts',
    image: '/src/assets/images/wisdaschool_arts_culture_1793991991522.jpg',
    likes: '112 reactions'
  },
  {
    id: 'wc-post-3',
    division: 'WisdaCare',
    platform: 'Facebook',
    title: 'Understanding Thyroid & Hormonal Imbalances in Women',
    excerpt: 'Common signs of Hashimoto’s and hypothyroid often mistaken for routine fatigue. When to get your TSH, FT3, and FT4 tested.',
    date: 'Oct 28, 2026',
    url: 'https://www.facebook.com/wisdacare/',
    category: 'Hormonal Wellness',
    image: '/assets/aistudio/Motherhood_Diaries_Wellness_Poster_c33e5d9c.png',
    likes: '95 reactions'
  },
  {
    id: 'ws-post-3',
    division: 'WisdaSchool',
    platform: 'Facebook',
    title: 'Making Science Conceptual: Refracting Light at Home',
    excerpt: 'Our Grade 4-6 students exploring light spectrums with household prisms and water glasses before diving into physics formulas.',
    date: 'Oct 26, 2026',
    url: 'https://www.facebook.com/profile.php?id=61595978941076',
    category: 'STEM Discovery',
    image: '/src/assets/images/wisdaschool_stem_inquiry_1793991993088.jpg',
    likes: '74 reactions'
  }
];
