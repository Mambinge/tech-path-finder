import { motion } from "framer-motion";
import { Users, ExternalLink, MessageCircle, Code, Palette, Shield, BarChart } from "lucide-react";

const communities = [
  {
    name: "Google Developer Groups (GDG) Harare",
    description: "Connect with developers, attend workshops, and learn from experts",
    icon: <Code className="w-5 h-5" />,
    color: "bg-software/10 text-software",
    category: "Development",
  },
  {
    name: "Zim Developers",
    description: "The largest community of Zimbabwean developers online",
    icon: <MessageCircle className="w-5 h-5" />,
    color: "bg-primary/10 text-primary",
    category: "General Tech",
  },
  {
    name: "Data Science Zimbabwe",
    description: "For data enthusiasts, analysts, and AI practitioners",
    icon: <BarChart className="w-5 h-5" />,
    color: "bg-data/10 text-data",
    category: "Data & AI",
  },
  {
    name: "UX Harare",
    description: "Designers and creatives building digital products",
    icon: <Palette className="w-5 h-5" />,
    color: "bg-design/10 text-design",
    category: "Design",
  },
  {
    name: "Cybersecurity Zimbabwe",
    description: "Security professionals and ethical hackers",
    icon: <Shield className="w-5 h-5" />,
    color: "bg-security/10 text-security",
    category: "Security",
  },
  {
    name: "Tech Women Zimbabwe",
    description: "Empowering women in technology across the country",
    icon: <Users className="w-5 h-5" />,
    color: "bg-business/10 text-business",
    category: "Community",
  },
];

const resources = [
  { name: "GitHub Student Pack", description: "Free dev tools for students", url: "#" },
  { name: "Kaggle", description: "Learn data science with competitions", url: "#" },
  { name: "TryHackMe", description: "Learn cybersecurity hands-on", url: "#" },
  { name: "Figma Community", description: "Free design resources", url: "#" },
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
            🌐 Join the Community
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
              🧰 Free Resources to Get Started
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
