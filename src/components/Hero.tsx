import { motion } from "framer-motion";
import { ArrowRight, Sparkles, GraduationCap, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-16 flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-data/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6"
          >
            <span className="text-xl">🇿🇼</span>
            <span className="text-sm font-medium text-secondary-foreground">
              For A-Level Graduates in Zimbabwe
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Find Your{" "}
            <span className="text-gradient">Tech Career</span>{" "}
            Path
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Finished A-Levels? Not sure which tech degree to take?
            <br />
            <span className="text-foreground font-medium">
              Let's help you discover your perfect tech career 🚀
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="#careers"
              className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all shadow-glow"
            >
              <Sparkles className="w-5 h-5" />
              Explore Tech Careers
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#quiz"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary/80 transition-all border border-border"
            >
              🎯 Help Me Choose
            </a>
            <a
              href="#universities"
              className="inline-flex items-center justify-center gap-2 bg-card text-card-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary transition-all border border-border"
            >
              <GraduationCap className="w-5 h-5" />
              Universities
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-xl mx-auto"
          >
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Career Paths</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-accent">10+</div>
              <div className="text-sm text-muted-foreground">Universities</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-data">20+</div>
              <div className="text-sm text-muted-foreground">Tech Roles</div>
            </div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <div className="absolute bottom-10 left-10 animate-float hidden lg:block">
          <div className="bg-card p-4 rounded-2xl shadow-medium border border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-software/20 rounded-lg flex items-center justify-center text-xl">
                💻
              </div>
              <div>
                <div className="font-semibold text-sm">Software Dev</div>
                <div className="text-xs text-muted-foreground">Most Popular</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-32 right-10 animate-float hidden lg:block" style={{ animationDelay: "1s" }}>
          <div className="bg-card p-4 rounded-2xl shadow-medium border border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-data/20 rounded-lg flex items-center justify-center text-xl">
                🤖
              </div>
              <div>
                <div className="font-semibold text-sm">AI & Data</div>
                <div className="text-xs text-muted-foreground">Growing Fast</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
