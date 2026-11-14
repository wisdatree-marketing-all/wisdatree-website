import { Course } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'tamil',
    name: 'Tamil',
    nativeName: 'தமிழ் (அ)',
    category: 'languages',
    kicker: 'LANGUAGE PATHWAY',
    tagline: 'Connect to rich heritage, classical literature, and everyday spoken fluency',
    description: 'A comprehensive 45-session core spoken Tamil programme extending into 7 structured learning stages covering phonetics, Thirukkural couplets, Aathichudi moral verses, storytelling, and conversational confidence for children and youth.',
    totalSessions: '350 total sessions across stages',
    levelCount: '7 structured levels',
    deliveryMode: 'Live 1-on-1 & small interactive online cohorts',
    ageGroup: 'Ages 5 to 16+ & Adults',
    accentColor: '#168038',
    levels: [
      { name: 'Level 1: Arumbu (அரும்பு - The Bud)', description: 'Uyir & Mei Ezhuthukkal sounds, basic greetings, naming family, animals, colors, and everyday objects.' },
      { name: 'Level 2: Mottu (மொட்டு - Sprouting Flower)', description: 'Uyirmei combinations, short 2-3 word sentences, simple question formulation, and nursery rhymes.' },
      { name: 'Level 3: Mugai (முகை - Blossom Form)', description: 'Spoken daily dialogues, past/present/future tense usage, simple Aathichudi verses by Avvaiyar.' },
      { name: 'Level 4: Malar (மலர் - In Bloom)', description: 'Story narration, picture composition, reading short paragraphs, practical conversational fluency.' },
      { name: 'Level 5: Alar (அலர் - Full Bloom)', description: 'Expressive discourse, debate, Thirukkural memorization with meaning, and cultural traditions.' },
      { name: 'Level 6: Vee (வீ - Deep Wisdom)', description: 'Advanced literature exposure, poetry recitation, creative writing, and formal spoken Tamil.' },
      { name: 'Level 7: Semmal (செம்மல் - Ripened Mastery)', description: 'Classical prose comprehension, critical analysis, elocution, and lifelong linguistic pride.' },
    ],
    features: [
      'Interactive flashcards, rhymes, and audio-guided pronounciation',
      'Avvaiyar Aathichudi & Thirukkural morals woven into lessons',
      'Small cohorts (maximum 4-5 students) for personalized attention',
      'Progressive certificates at completion of each stage'
    ]
  },
  {
    id: 'hindi',
    name: 'Hindi',
    nativeName: 'हिन्दी (अ)',
    category: 'languages',
    kicker: 'LANGUAGE PATHWAY',
    tagline: 'Master spoken Hindi with Devanagari script, grammar, and natural conversational flair',
    description: '40-session spoken Hindi core foundation leading across 4 structured levels and 115 live sessions. Designed to build effortless conversational skills, Devanagari reading, vocabulary, and situational role plays.',
    totalSessions: '115 sessions across 4 levels',
    levelCount: '4 progressive stages',
    deliveryMode: 'Live online classes with interactive exercises',
    ageGroup: 'Ages 6 to 16+ & Adults',
    accentColor: '#d97706',
    levels: [
      { name: 'Level 1: Aadhaar (आधार - The Foundation)', description: 'Swar and Vyanjan sounds, Matras, foundational greetings, daily vocabulary, numbers, and basic requests.' },
      { name: 'Level 2: Kali (कली - Budding Speaker)', description: 'Sentence structure (Karta-Karma-Kriya), gender rules (ling/vachan), prepositions, and routine role plays.' },
      { name: 'Level 3: Pushp (पुष्प - Flowering Fluency)', description: 'Conversational fluency, past and future tenses, storytelling, reading storybooks, and expressing opinions.' },
      { name: 'Level 4: Poorna Pushpa (पूर्ण पुष्प - Full Mastery)', description: 'Complex sentence mastery, idiomatic phrases (muhavare), presentation skills, and public speaking in Hindi.' },
    ],
    features: [
      'Devanagari script reading and writing worksheets',
      'Practical role plays (market, travel, school, social gatherings)',
      'Rich vocabulary builders and weekly audio speech practice',
      'Flexible scheduling for international timezones'
    ]
  },
  {
    id: 'malayalam',
    name: 'Malayalam',
    nativeName: 'മലയാളം (അ)',
    category: 'languages',
    kicker: 'LANGUAGE PATHWAY',
    tagline: 'Discover the rhythm of Malayalam through listening, authentic accent, and literacy',
    description: '40-session spoken Malayalam core syllabus across 4 levels and 115 sessions. Emphasizes authentic tongue placement, Malayalam script, traditional folk songs, and warm conversational bonds with family and homeland.',
    totalSessions: '115 sessions across 4 levels',
    levelCount: '4 progressive stages',
    deliveryMode: 'Live interactive online coaching',
    ageGroup: 'Ages 5 to 16+ & Heritage Learners',
    accentColor: '#059669',
    levels: [
      { name: 'Level 1: Koombu (കൂമ്പ് - The Sprout)', description: 'Vowels (Swarangal), consonants (Vyanjanangal), basic household terms, greetings, and common phrases.' },
      { name: 'Level 2: Viriyal (വിരിയൽ - Opening Petals)', description: 'Koottaksharangal (conjunct letters), simple everyday dialogues, family discussions, and children songs.' },
      { name: 'Level 3: Pushpam (പുഷ്പം - The Flower)', description: 'Fluent sentence construction, reading short stories, narrating experiences, and colloquial Malayalam.' },
      { name: 'Level 4: Poornapushpam (പൂർണ്ണപുഷ്പം - Blooming Eloquence)', description: 'Literary appreciation, expressive storytelling, formal writing, and nuanced Kerala cultural idioms.' },
    ],
    features: [
      'Native Malayalam-speaking certified educators',
      'Special focus on clear pronunciation of unique Malayalam consonants (ഴ, ള, ற, ണ)',
      'Heritage cultural context, festive vocabulary (Onam, Vishu), and moral tales',
      'Continuous recorded class recaps and home practice modules'
    ]
  },
  {
    id: 'bharatanatyam',
    name: 'Bharatanatyam',
    nativeName: 'பரதநாட்டியம்',
    category: 'arts',
    kicker: 'CLASSICAL ARTS PATHWAY',
    tagline: 'Timeless temple tradition, geometric precision, soulful abhinaya, and rhythmic nritta',
    description: 'Structured classical dance syllabus rooted in the Natyashastra and Abhinaya Darpana. Students master basic adavus, mudras (hastha prayoga), tala rhythmic cycles, and expressiveness, preparing for stage repertoire.',
    totalSessions: '120 live guided sessions across 4 levels',
    levelCount: '4 structured stages',
    deliveryMode: 'Live 1-on-1 and small group masterclasses with posture correction',
    ageGroup: 'Ages 6 to Adult',
    accentColor: '#b91c1c',
    bannerImage: '/src/assets/images/wisdaschool_arts_culture_1793991991522.jpg',
    levels: [
      { name: 'Stage 1: Arambha (ஆரம்பம் - Foundational Adavus)', description: 'Namaskaram, posture alignment (Araimandi), Tatta Adavu, Natta Adavu, Kuditta Metti, and basic Asamyuta Hastas.' },
      { name: 'Stage 2: Madhyama (மத்திமம் - Rhythmic Coordination)', description: 'Paraval, Sarikal, Kudittu Thattal Adavus, Samyuta Hastas, Bhedas (Shiro, Drishti, Greeva), and Alarippu introduction.' },
      { name: 'Stage 3: Praveena (பிரவீணம் - Expression & Repertoire)', description: 'Jathiswaram, Shabdam, introduction to Navarasas, lyrical Abhinaya, and foundational Varnam segments.' },
      { name: 'Stage 4: Vidwat (வித்வத் - Margam & Mastery)', description: 'Complete Varnam mastery, Padams, Keerthanams, dynamic Tillana, Mangalam, and Arangetram readiness.' },
    ],
    features: [
      'Precise real-time posture, footwork, and Araimandi feedback over high-definition video',
      'Theory worksheets covering Natyashastra slokas and Tala structures',
      'Live music accompaniment tracks and rhythmic Sollukattu practice',
      'Annual student recital showcases and graduation certificates'
    ]
  },
  {
    id: 'carnatic-music',
    name: 'Carnatic Music',
    nativeName: 'கர்நாடக சங்கீதம்',
    category: 'arts',
    kicker: 'CLASSICAL MUSIC PATHWAY',
    tagline: 'Vocal swara discipline, shruti alignment, melodic ragas, and soulful bhakti',
    description: 'Authentic classical vocal training following the venerable Purandara Dasa pedagogical system. Students cultivate breath control, steady shruti fidelity, tala keeping, gamakas, geethams, varnams, and soulful kritis.',
    totalSessions: '130 sessions across 4 progressive tiers',
    levelCount: '4 graded tiers',
    deliveryMode: 'Live 1-on-1 online vocal sessions with electronic tambura alignment',
    ageGroup: 'Ages 5 to Adult',
    accentColor: '#c2410c',
    bannerImage: '/src/assets/images/wisdaschool_arts_culture_1793991991522.jpg',
    levels: [
      { name: 'Tier 1: Prarambha (ஆரம்பப் பயிற்சிகள் - Foundations)', description: 'Shruti pitching with Tambura, Sarali Varisai in 3 speeds, Jantai Varisai, and Dhatu Varisai.' },
      { name: 'Tier 2: Madhyama (மத்திம நிலை - Tala & Geetham)', description: 'Mandrasthayi, Taarasthayi Varisai, Alankaram in 7 Talas, and Pillari Geethams (Shree Gananatha, Kundagoura).' },
      { name: 'Tier 3: Abhyasa (அப்யாச நிலை - Varnams & Ragas)', description: 'Jathi Swarams, Swarajathis (Bilahari, Anandabhairavi), Adi Tala Varnams (Mohanam, Kalyani, Hamsadhwani).' },
      { name: 'Tier 4: Vidwat (வித்வத் - Kritis & Manodharmam)', description: 'Trinity kritis (Tyagaraja, Muthuswami Dikshitar, Shyama Shastri), Raga Alapana basics, and concert presentation.' },
    ],
    features: [
      'Personalized vocal pitch (kattai) calibration and shruti training',
      'Hand-held tala training for rhythmic precision across Adi, Rupaka, and Chapu talas',
      'High-quality notation sheets provided for every lesson',
      'Interactive listening workshops featuring classical masters'
    ]
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    nativeName: 'Mathematical Foundations & Logic',
    category: 'stem',
    kicker: 'STEM PATHWAY',
    tagline: 'Deep conceptual understanding, mental agility, geometric spatial sense, and problem solving',
    description: 'Moving beyond rote memorization to instill genuine mathematical intuition. From foundational number sense and Vedic mental math to pre-algebra, spatial geometry, and Olympiad logical deduction.',
    totalSessions: 'Adaptive grade-aligned pathways',
    levelCount: '4 developmental stages',
    deliveryMode: 'Live guided interactive online problem-solving sessions',
    ageGroup: 'Grades 1 to 10 (Ages 6 to 16)',
    accentColor: '#0284c7',
    bannerImage: '/src/assets/images/wisdaschool_stem_inquiry_1793991993088.jpg',
    levels: [
      { name: 'Stage 1: Number Sense & Mental Math', description: 'Visual arithmetic, place value models, rapid mental calculation techniques, patterns, and word problems.' },
      { name: 'Stage 2: Spatial Geometry & Fractions', description: 'Fraction and decimal visualization, angles, 2D/3D shapes, area/perimeter, and measurement applications.' },
      { name: 'Stage 3: Pre-Algebra & Logical Reasoning', description: 'Variables, linear equations, ratios, percentages, coordinates, data handling, and deductive proofs.' },
      { name: 'Stage 4: Advanced Problem Solving & Olympiad', description: 'Quadratic models, geometric theorems, probability, competitive math contest strategies, and analytical proofs.' },
    ],
    features: [
      'Visual interactive manipulatives and digital whiteboards',
      'Step-by-step problem breakdown developing independent thinkers',
      'Curriculum aligned with CBSE, ICSE, Cambridge (IGCSE), and US Common Core',
      'Regular diagnostic feedback and personalized homework support'
    ]
  },
  {
    id: 'science',
    name: 'Science',
    nativeName: 'Experiential Science & Discovery',
    category: 'stem',
    kicker: 'STEM PATHWAY',
    tagline: 'Hands-on scientific inquiry, real-world phenomena, physics, chemistry, and life sciences',
    description: 'Cultivating curious minds through the scientific method. Students explore real-world phenomena through home-friendly experiments, conceptual physics, chemical reactions, environmental biology, and interactive simulations.',
    totalSessions: 'Adaptive grade-aligned pathways',
    levelCount: '4 discovery stages',
    deliveryMode: 'Live online interactive lab simulations and guided demonstrations',
    ageGroup: 'Grades 2 to 10 (Ages 7 to 16)',
    accentColor: '#0891b2',
    bannerImage: '/src/assets/images/wisdaschool_stem_inquiry_1793991993088.jpg',
    levels: [
      { name: 'Stage 1: Discover (Curiosity & Living Systems)', description: 'Plant biology, animal adaptations, human body wonders, five senses, weather cycles, and habitat ecosystems.' },
      { name: 'Stage 2: Explore (Matter, Energy & Forces)', description: 'States of matter, simple machines, gravity, friction, light reflection, sound vibrations, and magnetism.' },
      { name: 'Stage 3: Investigate (Chemical Reactions & Cellular Life)', description: 'Atomic structure, periodic table essentials, acids & bases, cell biology, photosynthesis, and energy transfer.' },
      { name: 'Stage 4: Innovate (Scientific Inquiry & Applied Science)', description: 'Newtonian mechanics, electricity & circuits, genetics, environmental sustainability, and research projects.' },
    ],
    features: [
      'Safe, kitchen-friendly hands-on experiments for every unit',
      'Virtual 3D simulations of microscopic, planetary, and chemical processes',
      'Scientific method notebook keeping and hypothesis testing',
      'Inspiring science fair mentoring and real-world connection'
    ]
  }
];
