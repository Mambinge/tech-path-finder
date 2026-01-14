import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, MessageCircle, GraduationCap, Briefcase, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Mentor, mentorshipFormUrl } from "@/data/mentors";

interface MentorProfileModalProps {
  mentor: Mentor | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MentorProfileModal = ({ mentor, isOpen, onClose }: MentorProfileModalProps) => {
  if (!mentor) return null;

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

  const handleRequestMentorship = () => {
    window.open(mentorshipFormUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-2xl max-h-[85vh] bg-card rounded-2xl shadow-elegant z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-hero p-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-3xl font-bold border-4 border-white/30">
                  {mentor.photo ? (
                    <img src={mentor.photo} alt={mentor.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    mentor.name.charAt(0)
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{mentor.name}</h2>
                  <p className="text-white/90 font-medium">{mentor.role}</p>
                  {mentor.company && (
                    <p className="text-white/70 text-sm">{mentor.company}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>{mentor.degree}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span>{mentor.university}</span>
                </div>
                {mentor.yearsExperience && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{mentor.yearsExperience} years</span>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* About Me */}
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <span className="text-xl">👋</span> About Me
                </h3>
                <p className="text-muted-foreground">{mentor.bio}</p>
              </div>

              {/* My Journey */}
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <span className="text-xl">🚀</span> My Journey
                </h3>
                <p className="text-muted-foreground">{mentor.journey}</p>
              </div>

              {/* Biggest Mistake */}
              {mentor.biggestMistake && (
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2 text-orange-600">
                    <AlertTriangle className="w-5 h-5" />
                    My Biggest Mistake
                  </h3>
                  <p className="text-muted-foreground">{mentor.biggestMistake}</p>
                </div>
              )}

              {/* What I Can Help With */}
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  What I Can Help With
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {mentor.helpsWith.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="border-t border-border p-4 bg-muted/30">
              <div className="flex flex-wrap gap-3">
                {mentor.linkedin && (
                  <Button
                    variant="outline"
                    onClick={handleLinkedIn}
                    className="flex-1"
                  >
                    <Linkedin className="w-4 h-4" />
                    View LinkedIn
                  </Button>
                )}
                {mentor.whatsapp && (
                  <Button
                    variant="outline"
                    onClick={handleWhatsApp}
                    className="flex-1 text-green-600 border-green-600/30 hover:bg-green-50"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </Button>
                )}
                <Button
                  onClick={handleRequestMentorship}
                  className="w-full bg-gradient-hero text-white"
                >
                  📝 Request Formal Mentorship
                </Button>
              </div>
              <p className="text-xs text-center text-muted-foreground mt-3">
                Please be respectful. These mentors volunteer their time.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
