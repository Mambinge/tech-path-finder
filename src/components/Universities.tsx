import { motion } from "framer-motion";
import { MapPin, ExternalLink, GraduationCap } from "lucide-react";
import { universities } from "@/data/careerPaths";

const Universities = () => {
  return (
    <section id="universities" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
             Study in Zimbabwe
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Top Tech Universities
          </h2>
          <p className="text-lg text-muted-foreground">
            These universities offer quality tech programs to kickstart your career
          </p>
        </motion.div>

        {/* University Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((uni, index) => (
            <motion.div
              key={uni.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-medium transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <a
                  href={uni.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>
              </div>

              <h3 className="font-display font-bold text-lg mb-2">{uni.name}</h3>
              
              <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                <MapPin className="w-4 h-4" />
                {uni.location}
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Programs:</p>
                <div className="flex flex-wrap gap-2">
                  {uni.programs.map((program) => (
                    <span
                      key={program}
                      className="text-xs px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Can't decide? Take our quick quiz to find the best path for you!
          </p>
          <a
            href="#quiz"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Take the Career Quiz
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Universities;
