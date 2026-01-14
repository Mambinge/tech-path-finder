export interface Mentor {
  id: string;
  name: string;
  role: string;
  company?: string;
  degree?: string;
  university?: string;
  yearsExperience?: number;
  photo?: string;
  bio: string;
  journey?: string;
  biggestMistake?: string;
  helpsWith: string[];
  linkedin?: string;
  whatsapp?: string;
  available: boolean;
}

export const mentors: Mentor[] = [
  {
    id: "1",
    name: "Robert Selemani",
    role: "Data & Cloud Engineer",
    bio: "Passionate about leveraging data and cloud technologies to solve real-world problems. Ready to guide students interested in data engineering and cloud computing careers.",
    helpsWith: ["Data Engineering", "Cloud Computing (AWS/Azure)", "Big Data", "Career transitions to tech"],
    linkedin: "https://linkedin.com/in/robert-selemani",
    available: true,
  },
  {
    id: "2",
    name: "Sherilyn Maphosa",
    role: "Data Analyst",
    bio: "Helping organizations make data-driven decisions. I believe anyone with curiosity and dedication can break into data analytics.",
    helpsWith: ["Data Analytics", "SQL & Python for Data", "Data Visualization", "Women in Tech"],
    linkedin: "https://www.linkedin.com/in/sherilynofdata/",
    available: true,
  },
  {
    id: "3",
    name: "Tanaka Mambinge",
    role: "Software Developer",
    bio: "Building software solutions and passionate about helping the next generation of Zimbabwean developers find their path in tech.",
    helpsWith: ["Software Development", "Web Development", "Building a Portfolio", "Remote Work Opportunities"],
    linkedin: "https://www.linkedin.com/in/tanaka-mambinge-12176523b/",
    available: true,
  },
  {
    id: "4",
    name: "Collins Jimu",
    role: "Software Developer",
    bio: "Experienced software developer committed to mentoring young developers and sharing knowledge about the tech industry in Zimbabwe.",
    helpsWith: ["Software Engineering", "Career Advice", "Technical Interviews", "Building Projects"],
    linkedin: "https://www.linkedin.com/in/collins-jimu-799b221b5/",
    available: true,
  },
  // {
  //   id: "5",
  //   name: "Panashe Mapika",
  //   role: "Software Engineer",
  //   company: "Tech Industry",
  //   yearsExperience: 6,
  //   bio: "Innovative Software Engineer with 6 years of experience, passionate about building products that solve real-world problems across various industries.",
  //   helpsWith: ["Full-Stack Development", "Product Development", "Software Architecture", "Tech Career Growth"],
  //   linkedin: "https://linkedin.com/in/panashe-mapika",
  //   available: true,
  // },
  // {
  //   id: "6",
  //   name: "Ronald Nyasha Shoniwa",
  //   role: "Data Analytics Consultant",
  //   company: "PMsquare",
  //   yearsExperience: 10,
  //   bio: "Analytical Engineer with a decade of experience helping organizations transform through data. Certified in AWS, Azure, and Snowflake.",
  //   helpsWith: ["Data Engineering", "Data Visualization", "Cloud Platforms", "Analytics Career Path"],
  //   linkedin: "https://linkedin.com/in/ronald-nyasha-shoniwa-13539636",
  //   available: true,
  // },
  // {
  //   id: "7",
  //   name: "Tongesai Machinya",
  //   role: "Senior Software Engineer",
  //   yearsExperience: 9,
  //   bio: "Fullstack Software Engineer with 9+ years of experience in Java and C#. Oracle Certified Professional and AWS Certified DevOps Engineer.",
  //   helpsWith: ["Java Development", "Cloud & DevOps", "Enterprise Software", "International Tech Careers"],
  //   linkedin: "https://linkedin.com/in/tongesai-machinya",
  //   available: true,
  // },
  // {
  //   id: "8",
  //   name: "Tanyaradzwa T. Mushonga",
  //   role: "Full Stack Developer",
  //   yearsExperience: 2,
  //   bio: "Software Engineer creating innovative digital experiences using cutting-edge technologies. Passionate about building scalable applications that make a difference.",
  //   helpsWith: ["Full-Stack Development", "Modern Web Technologies", "Building Your First Projects", "Tech Portfolio"],
  //   linkedin: "https://linkedin.com/in/tanyaradzwa-mushonga",
  //   available: true,
  // },
];

export const mentorshipFormUrl = "https://forms.gle/qYUKn2mtu4uDUk1HA";
export const mentorFormUrl = "https://forms.gle/aH5LPFVQVMdogWqSA"; 
export const generalWhatsappNumber = "263773417514"; 
export const generalWhatsappMessage = "Hi TechPath, I'm an A-Level graduate and I'd like guidance on choosing a tech career.";
