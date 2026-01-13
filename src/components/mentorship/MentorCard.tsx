import { motion } from "framer-motion";
import { Linkedin, MessageCircle, User, GraduationCap, Briefcase, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Mentor } from "@/data/mentors";

interface MentorCardProps {
  mentor: Mentor;
  onRequestMentorship: (mentor: Mentor) => void;
  onViewProfile: (mentor: Mentor) => void;
}

export const MentorCard = ({ mentor, onRequestMentorship, onViewProfile }: MentorCardProps) => {
  const handleWhatsApp = () => {
    if (mentor.whatsapp) {
      const message = encodeURIComponent(`Hi ${mentor.name.split(" ")[0]}, I found you on TechPath Zimbabwe. I'm an A-Level graduate interested in ${mentor.role}. Could I ask you a few questions?`);
      window.open(`https://wa.me/${mentor.whatsapp}?text=${message}`, "_blank");
    }
  };

  const handleLinkedIn = () => {
    if (mentor.linkedin) {
      window.open(mentor.linkedin, "_blank");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-elegant transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center text-white text-2xl font-bold">
          {mentor.photo ? (
            <img src={mentor.photo} alt={mentor.name} className="w-full h-full rounded-full object-cover" />
          ) : (
            mentor.name.charAt(0)
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-foreground">{mentor.name}</h3>
          <p className="text-primary font-medium">{mentor.role}</p>
          {mentor.company && (
            <p className="text-sm text-muted-foreground">{mentor.company}</p>
          )}
        </div>
        {mentor.available && (
          <span className="px-2 py-1 bg-green-500/10 text-green-600 text-xs font-medium rounded-full">
            Available
          </span>
        )}
      </div>

      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <GraduationCap className="w-4 h-4" />
          <span>{mentor.degree} – {mentor.university}</span>
        </div>
        {mentor.yearsExperience && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{mentor.yearsExperience} years experience</span>
          </div>
        )}
      </div>

      {/* Bio */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
        {mentor.bio}
      </p>

      {/* Helps With Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {mentor.helpsWith.slice(0, 3).map((topic) => (
          <span
            key={topic}
            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
          >
            {topic}
          </span>
        ))}
        {mentor.helpsWith.length > 3 && (
          <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
            +{mentor.helpsWith.length - 3} more
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        {mentor.linkedin && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleLinkedIn}
            className="flex-1"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Button>
        )}
        {mentor.whatsapp && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleWhatsApp}
            className="flex-1 text-green-600 border-green-600/30 hover:bg-green-50"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
        )}
        <Button
          size="sm"
          onClick={() => onViewProfile(mentor)}
          className="w-full mt-2 bg-gradient-hero text-white"
        >
          <User className="w-4 h-4" />
          View Full Profile
        </Button>
      </div>
    </motion.div>
  );
};
