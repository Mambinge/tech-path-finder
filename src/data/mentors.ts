export interface Mentor {
  id: string;
  name: string;
  role: string;
  company?: string;
  degree: string;
  university: string;
  yearsExperience?: number;
  photo?: string;
  bio: string;
  journey: string;
  biggestMistake?: string;
  helpsWith: string[];
  linkedin?: string;
  whatsapp?: string;
  available: boolean;
}

export const mentors: Mentor[] = [
  {
    id: "1",
    name: "Tawanda M.",
    role: "Software Developer",
    company: "Remote (International)",
    degree: "BSc Computer Science",
    university: "Midlands State University",
    yearsExperience: 4,
    bio: "Started coding in my first year at MSU with zero experience. Now working remotely for a US-based startup. I want to help students avoid the mistakes I made early on.",
    journey: "I chose Computer Science because I loved video games and wanted to make my own. The first year was HARD - I almost switched to something 'easier'. But I stuck with it, joined coding clubs, and started freelancing in 3rd year. That freelancing experience got me my first remote job.",
    biggestMistake: "Not building a portfolio early. I spent too much time on theory and not enough on practical projects that I could show employers.",
    helpsWith: ["Choosing between CS and IT", "Remote work opportunities", "Building a portfolio", "Freelancing while studying"],
    linkedin: "https://linkedin.com/in/example",
    whatsapp: "263771234567",
    available: true,
  },
  {
    id: "2",
    name: "Rumbidzai K.",
    role: "Data Analyst",
    company: "Econet",
    degree: "BSc Applied Mathematics",
    university: "University of Zimbabwe",
    yearsExperience: 3,
    bio: "Maths major who discovered data science. Now I analyze customer data at one of Zimbabwe's biggest companies. Happy to share how maths opened tech doors for me.",
    journey: "I didn't even know 'Data Science' existed when I enrolled for Maths at UZ! I discovered it in my 2nd year through YouTube. I taught myself Python and SQL alongside my degree. My maths background actually gave me an advantage.",
    biggestMistake: "Thinking I needed a CS degree to work in tech. I didn't! Skills matter more than the degree name.",
    helpsWith: ["Data science path from a maths background", "Learning Python", "Getting into big companies", "Women in tech"],
    linkedin: "https://linkedin.com/in/example",
    available: true,
  },
  {
    id: "3",
    name: "Tinashe C.",
    role: "Cybersecurity Analyst",
    company: "Banking Sector",
    degree: "BSc Information Security",
    university: "Harare Institute of Technology",
    yearsExperience: 5,
    bio: "Started my career in IT support, now I protect financial systems from hackers. If you're interested in cybersecurity, I can tell you what the job is really like.",
    journey: "I was always curious about how hackers work (ethically, of course!). HIT's Information Security program was perfect. I got certified in CompTIA Security+ while studying, which helped me stand out when job hunting.",
    helpsWith: ["Cybersecurity career path", "Security certifications", "What the job is really like", "HIT experience"],
    linkedin: "https://linkedin.com/in/example",
    whatsapp: "263772345678",
    available: true,
  },
  {
    id: "4",
    name: "Nyasha D.",
    role: "UI/UX Designer",
    company: "Freelance",
    degree: "BSc Multimedia Technology",
    university: "Harare Institute of Technology",
    yearsExperience: 2,
    bio: "Creative who found a home in tech. I design apps and websites for clients across Africa. You don't need to be a coder to work in tech!",
    journey: "I was an art student who loved technology. Multimedia at HIT let me combine both. I learned Figma, Adobe XD, and design thinking. Now I work with startups to make their apps beautiful and easy to use.",
    biggestMistake: "Undervaluing my work at first. I did too much free work. Learn to charge for your skills!",
    helpsWith: ["Creative careers in tech", "UI/UX design path", "Freelancing as a designer", "Building a design portfolio"],
    linkedin: "https://linkedin.com/in/example",
    available: true,
  },
  {
    id: "5",
    name: "Kudzai P.",
    role: "Product Manager",
    company: "Tech Startup",
    degree: "BSc Business Information Systems",
    university: "NUST",
    yearsExperience: 6,
    bio: "I bridge the gap between business and technology. If you like both tech and business, this might be your path too.",
    journey: "I couldn't decide between business and IT, so I chose both! Business Information Systems at NUST was perfect. I started as a business analyst, then moved into product management. Now I decide what features get built and why.",
    helpsWith: ["Business + tech careers", "Product management", "NUST experience", "Tech startup culture"],
    linkedin: "https://linkedin.com/in/example",
    available: true,
  },
  {
    id: "6",
    name: "Farai N.",
    role: "Mobile App Developer",
    company: "FinTech Company",
    degree: "BSc Software Engineering",
    university: "Chinhoyi University of Technology",
    yearsExperience: 3,
    bio: "I build the apps on your phone! Specialized in Android development. Came from a small town with big dreams - if I made it, you can too.",
    journey: "Growing up in Chinhoyi, I thought tech jobs were only in Harare. CUT changed that. I focused on mobile development because everyone has a phone. Now I work on payment apps used by thousands of Zimbabweans.",
    biggestMistake: "Not networking enough. I was shy. But connections open doors that skills alone can't.",
    helpsWith: ["Mobile app development", "CUT experience", "Coming from a small town", "FinTech opportunities"],
    linkedin: "https://linkedin.com/in/example",
    whatsapp: "263773456789",
    available: true,
  },
];

export const mentorshipFormUrl = "https://forms.gle/your-google-form-id"; // Replace with actual Google Form URL
export const generalWhatsappNumber = "263771234567"; // Replace with actual WhatsApp number
export const generalWhatsappMessage = "Hi TechPath, I'm an A-Level graduate and I'd like guidance on choosing a tech career.";
