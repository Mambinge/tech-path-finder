import { motion } from "framer-motion";
import { careerPaths } from "@/data/careerPaths";
import CareerCard from "./CareerCard";

const CareerPaths = () => {
  return (
    <section id="careers" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Explore Your Options
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tech Career Paths
          </h2>
          <p className="text-lg text-muted-foreground">
            Click on any path to explore degrees, universities, and career opportunities in Zimbabwe
          </p>
        </motion.div>

        {/* Encouraging message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-hero text-primary-foreground rounded-2xl p-6 md:p-8 mb-12 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl font-medium">
            "You don't need to know everything now. You just need to start somewhere."
          </p>
        </motion.div>

        {/* Career Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerPaths.map((career, index) => (
            <CareerCard key={career.id} career={career} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerPaths;
