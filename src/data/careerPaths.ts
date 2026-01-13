export interface CareerPath {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  forYouIf: string[];
  roles: string[];
  degrees: string[];
  universities: string[];
  careers: string[];
  communities: string[];
}

export const careerPaths: CareerPath[] = [
  {
    id: "software",
    title: "Software & App Development",
    icon: "💻",
    color: "software",
    description: "Build the apps and systems that power our digital world",
    forYouIf: [
      "You like problem solving",
      "You enjoy building things",
      "You like computers & logic"
    ],
    roles: [
      "Software Developer",
      "Web Developer", 
      "Mobile App Developer",
      "Backend Engineer"
    ],
    degrees: [
      "BSc Computer Science",
      "BSc Software Engineering",
      "Information Technology (IT)"
    ],
    universities: [
      "University of Zimbabwe (UZ)",
      "NUST",
      "HIT",
      "Midlands State University (MSU)",
      "Chinhoyi University of Technology (CUT)"
    ],
    careers: [
      "Junior Developer",
      "Full Stack Developer",
      "Freelance Developer",
      "Startup Founder"
    ],
    communities: [
      "Google Developer Groups (GDG Harare)",
      "Zim Developers",
      "GitHub Student Pack"
    ]
  },
  {
    id: "data",
    title: "Data, AI & Analytics",
    icon: "🤖",
    color: "data",
    description: "Turn data into insights and build intelligent systems",
    forYouIf: [
      "You like maths & patterns",
      "You're curious about data & AI",
      "You're interested in future tech"
    ],
    roles: [
      "Data Analyst",
      "Data Scientist",
      "Machine Learning Engineer",
      "AI Researcher"
    ],
    degrees: [
      "Data Science",
      "Computer Science",
      "Applied Mathematics + Programming",
      "Statistics + Tech certifications",
      "Informatics"
    ],
    universities: [
      "University of Zimbabwe",
      "NUST",
      "MSU"
    ],
    careers: [
      "Data Analyst",
      "AI Engineer",
      "Research Assistant",
      "Business Intelligence Analyst"
    ],
    communities: [
      "Zim AI Community",
      "Data Science Zimbabwe",
      "Kaggle",
      "AI Saturdays"
    ]
  },
  {
    id: "security",
    title: "Cybersecurity & Networks",
    icon: "🔐",
    color: "security",
    description: "Protect systems and fight cyber threats",
    forYouIf: [
      "You like security & systems",
      "You're curious about ethical hacking",
      "You're interested in networks"
    ],
    roles: [
      "Cybersecurity Analyst",
      "Network Engineer",
      "Ethical Hacker",
      "SOC Analyst"
    ],
    degrees: [
      "Information Security",
      "Computer Science",
      "Information Technology"
    ],
    universities: [
      "HIT",
      "NUST",
      "UZ",
      "MSU"
    ],
    careers: [
      "Security Analyst",
      "Network Administrator",
      "IT Security Officer"
    ],
    communities: [
      "ISACA Zimbabwe",
      "Cybersecurity Zimbabwe",
      "TryHackMe / Hack The Box"
    ]
  },
  {
    id: "design",
    title: "Design, Media & Creative Tech",
    icon: "🎨",
    color: "design",
    description: "Create beautiful digital experiences and products",
    forYouIf: [
      "You're creative",
      "You like design & visuals",
      "You're interested in branding & UX"
    ],
    roles: [
      "UI/UX Designer",
      "Graphic Designer",
      "Product Designer",
      "Frontend Developer"
    ],
    degrees: [
      "Multimedia Technology",
      "Creative Media",
      "IT + Design",
      "Self-taught + Portfolio"
    ],
    universities: [
      "HIT",
      "MSU",
      "Private colleges"
    ],
    careers: [
      "UI/UX Designer",
      "Product Designer",
      "Digital Designer"
    ],
    communities: [
      "UX Harare",
      "Design Buddies",
      "Figma Community"
    ]
  },
  {
    id: "business",
    title: "Business, Tech & Management",
    icon: "📊",
    color: "business",
    description: "Lead tech teams and drive digital transformation",
    forYouIf: [
      "You like leadership",
      "You're interested in business + tech",
      "You want management roles"
    ],
    roles: [
      "Business Analyst",
      "Product Manager",
      "IT Project Manager",
      "Tech Consultant"
    ],
    degrees: [
      "Business Information Systems",
      "Information Systems",
      "IT + Business"
    ],
    universities: [
      "UZ",
      "MSU",
      "NUST"
    ],
    careers: [
      "Product Manager",
      "Business Analyst",
      "Tech Consultant"
    ],
    communities: [
      "Product School",
      "Tech Women Zimbabwe",
      "Startup Zim"
    ]
  }
];

export const universities = [
  {
    name: "University of Zimbabwe (UZ)",
    location: "Harare",
    programs: ["Computer Science", "Software Engineering", "Computer Engineering", "Cyber Security and Forensic Auditing", "Data Science and Informatics",
      "Hardware  Engineering", "Telecommunications Engineering",
       "Network Engineering", "Artifical Intelligence and Machine Learning", "Cloud Computing and Internet of Things"],
    website: "https://www.uz.ac.zw"
  },
  {
    name: "National University of Science & Technology (NUST)",
    location: "Bulawayo",
    programs: ["Computer Science",  "Informatics"],
    website: "https://www.nust.ac.zw"
  },
  {
    name: "Harare Institute of Technology (HIT)",
    location: "Harare",
    programs: ["Software Engineering", "Information Technology", "Multimedia"],
    website: "https://www.hit.ac.zw"
  },
  {
    name: "Midlands State University (MSU)",
    location: "Gweru",
    programs: ["Computer Science", "Computer Systems Engineering", "Cybersecurity", "Software Engineering"],
    website: "https://www.msu.ac.zw"
  },
  {
    name: "Chinhoyi University of Technology (CUT)",
    location: "Chinhoyi",
    programs: ["Computer Science", "Information Technology"],
    website: "https://www.cut.ac.zw"
  }
];
