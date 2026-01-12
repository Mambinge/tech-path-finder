import { motion } from "framer-motion";
import { ChevronRight, Users, GraduationCap, Briefcase, Building } from "lucide-react";
import { CareerPath } from "@/data/careerPaths";
import { useState } from "react";

interface CareerCardProps {
  career: CareerPath;
  index: number;
}

const CareerCard = ({ career, index }: CareerCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    software: { bg: "bg-software/10", border: "border-software/30", text: "text-software" },
    data: { bg: "bg-data/10", border: "border-data/30", text: "text-data" },
    security: { bg: "bg-security/10", border: "border-security/30", text: "text-security" },
    design: { bg: "bg-design/10", border: "border-design/30", text: "text-design" },
    business: { bg: "bg-business/10", border: "border-business/30", text: "text-business" },
  };

  const colors = colorClasses[career.color] || colorClasses.software;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`bg-card rounded-2xl border ${colors.border} shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden`}
    >
      {/* Card Header */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-6 cursor-pointer"
      >
        <div className="flex items-start justify-between mb-4">
          <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center text-3xl`}>
            {career.icon}
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            className={`w-8 h-8 rounded-full ${colors.bg} flex items-center justify-center`}
          >
            <ChevronRight className={`w-5 h-5 ${colors.text}`} />
          </motion.div>
        </div>

        <h3 className="font-display font-bold text-xl mb-2">{career.title}</h3>
        <p className="text-muted-foreground">{career.description}</p>

        {/* Quick tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {career.roles.slice(0, 3).map((role) => (
            <span
              key={role}
              className={`text-xs px-3 py-1 rounded-full ${colors.bg} ${colors.text} font-medium`}
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      {/* Expanded Content */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 space-y-6 border-t border-border pt-6">
          {/* Who is this for */}
          <div>
            <h4 className="font-semibold flex items-center gap-2 mb-3">
              <Users className={`w-4 h-4 ${colors.text}`} />
              This is for you if...
            </h4>
            <ul className="space-y-2">
              {career.forYouIf.map((item) => (
                <li key={item} className="flex items-center gap-2 text-muted-foreground">
                  <span className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace('/10', '')}`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Degrees */}
          <div>
            <h4 className="font-semibold flex items-center gap-2 mb-3">
              <GraduationCap className={`w-4 h-4 ${colors.text}`} />
              Degrees to Consider
            </h4>
            <div className="flex flex-wrap gap-2">
              {career.degrees.map((degree) => (
                <span
                  key={degree}
                  className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground"
                >
                  {degree}
                </span>
              ))}
            </div>
          </div>

          {/* Universities */}
          <div>
            <h4 className="font-semibold flex items-center gap-2 mb-3">
              <Building className={`w-4 h-4 ${colors.text}`} />
              Universities in Zimbabwe
            </h4>
            <div className="flex flex-wrap gap-2">
              {career.universities.map((uni) => (
                <span
                  key={uni}
                  className="text-sm px-3 py-1.5 rounded-lg border border-border text-foreground"
                >
                  {uni}
                </span>
              ))}
            </div>
          </div>

          {/* Careers */}
          <div>
            <h4 className="font-semibold flex items-center gap-2 mb-3">
              <Briefcase className={`w-4 h-4 ${colors.text}`} />
              After Graduation
            </h4>
            <div className="flex flex-wrap gap-2">
              {career.careers.map((c) => (
                <span
                  key={c}
                  className={`text-sm px-3 py-1.5 rounded-lg ${colors.bg} ${colors.text}`}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Communities */}
          <div className="bg-secondary/50 rounded-xl p-4">
            <h4 className="font-semibold mb-3">🌐 Communities to Join</h4>
            <div className="flex flex-wrap gap-2">
              {career.communities.map((community) => (
                <span
                  key={community}
                  className="text-sm px-3 py-1.5 rounded-lg bg-card text-foreground border border-border"
                >
                  {community}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CareerCard;
