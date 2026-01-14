import { motion } from "framer-motion";
import { Users, ExternalLink, MessageCircle, Code, Palette, Shield, BarChart } from "lucide-react";

const communities = [
  {
    name: "Google Developer Groups (GDG) Harare",
    description: "Connect with developers, attend workshops, and learn from experts",
    icon: <Code className="w-5 h-5" />,
    color: "bg-software/10 text-software",
    category: "Development",
    link: "https://gdg.community.dev/gdg-harare/",
    linkLabel: "Visit website",
  },
  {
    name: "Zim Developers",
    description: "The largest community of Zimbabwean developers online",
    icon: <MessageCircle className="w-5 h-5" />,
    color: "bg-primary/10 text-primary",
    category: "General Tech",
    link: "https://www.facebook.com/groups/zimdevs", // Replace with official website/LinkedIn/WhatsApp link if available
    linkLabel: "Join community",
  },
  {
    name: "Data Science Zimbabwe",
    description: "For data enthusiasts, analysts, and AI practitioners",
    icon: <BarChart className="w-5 h-5" />,
    color: "bg-data/10 text-data",
    category: "Data & AI",
    link: "https://www.linkedin.com/company/data-science-zimbabwe/", // Replace if you prefer a WhatsApp/website link
    linkLabel: "Connect on LinkedIn",
  },
  {
    name: "Data Wired",
    description: "Empowering individuals and organizations to thrive in the rapidly evolving data landscape",
    icon: <BarChart className="w-5 h-5" />,
    color: "bg-data/10 text-data",
    category: "Community",
    link: "https://www.linkedin.com/company/data-wired-zimbabwe/", // Replace with your preferred community link
    linkLabel: "Visit LinkedIn page",
  },
  {
    name: "UX Harare",
    description: "Designers and creatives building digital products",
    icon: <Palette className="w-5 h-5" />,
    color: "bg-design/10 text-design",
    category: "Design",
    link: "https://www.meetup.com/ux-harare/", // Or WhatsApp/LinkedIn link
    linkLabel: "View community",
  },
  {
    name: "Cybersecurity Zimbabwe",
    description: "Security professionals and ethical hackers",
    icon: <Shield className="w-5 h-5" />,
    color: "bg-security/10 text-security",
    category: "Security",
    link: "https://www.linkedin.com/company/cybersecurity-zimbabwe/", // Update with official group/WhatsApp link if needed
    linkLabel: "Connect on LinkedIn",
  },
  {
    name: "Tech Women Zimbabwe",
    description: "Empowering women in technology across the country",
    icon: <Users className="w-5 h-5" />,
    color: "bg-business/10 text-business",
    category: "Community",
    link: "https://www.techwomen.org/participants/countries/zimbabwe", // Replace with official Tech Women Zim link/WhatsApp group
    linkLabel: "Learn more",
  },
];

const resources = [
  {
    name: "GitHub Student Developer Pack",
    description: "Free premium developer tools for students",
    url: "https://education.github.com/pack",
  },
  {
    name: "Kaggle",
    description: "Learn data science with courses, datasets, and competitions",
    url: "https://www.kaggle.com/",
  },
  {
    name: "TryHackMe",
    description: "Hands-on cybersecurity learning platform",
    url: "https://tryhackme.com/",
  },
  {
    name: "Figma Community",
    description: "Free UI kits, design systems, and templates",
    url: "https://www.figma.com/community",
  },
];


const Communities = () => {
  return (
    <section id="communities" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-data/10 text-data rounded-full text-sm font-medium mb-4">
            Join the Community
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Connect & Grow
          </h2>
          <p className="text-lg text-muted-foreground">
            Start networking before you even graduate. These communities welcome beginners!
          </p>
        </motion.div>

        {/* Communities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {communities.map((community, index) => (
            <motion.div
              key={community.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-medium transition-all group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${community.color} flex items-center justify-center`}>
                  {community.icon}
                </div>
                <div className="flex-1">
                  <span className="text-xs text-muted-foreground">{community.category}</span>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {community.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{community.description}</p>
                  {community.link && (
                    <a
                      href={community.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      {community.linkLabel ?? "Visit community"}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-hero rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
               Free Resources to Get Started
            </h3>
            <p className="text-primary-foreground/80">
              No excuses! Start learning with these free platforms
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resources.map((resource) => (
              <a
                key={resource.name}
                href={resource.url}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 hover:bg-primary-foreground/20 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-primary-foreground">{resource.name}</h4>
                  <ExternalLink className="w-4 h-4 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" />
                </div>
                <p className="text-sm text-primary-foreground/80">{resource.description}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Communities;
