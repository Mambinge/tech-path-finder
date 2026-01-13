import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, FileText, Linkedin, Users, ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MentorCard } from "@/components/mentorship/MentorCard";
import { MentorProfileModal } from "@/components/mentorship/MentorProfileModal";
import { SafetySection } from "@/components/mentorship/SafetySection";
import { mentors, Mentor, mentorshipFormUrl, generalWhatsappNumber, generalWhatsappMessage } from "@/data/mentors";
import Chatbot from "@/components/Chatbot";

const Mentorship = () => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedField, setSelectedField] = useState<string | null>(null);

  const fields = ["All", "Software", "Data", "Cybersecurity", "Design", "Business"];

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.helpsWith.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesField =
      !selectedField ||
      selectedField === "All" ||
      mentor.role.toLowerCase().includes(selectedField.toLowerCase()) ||
      mentor.helpsWith.some((h) => h.toLowerCase().includes(selectedField.toLowerCase()));

    return matchesSearch && matchesField;
  });

  const handleViewProfile = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  const handleRequestMentorship = () => {
    window.open(mentorshipFormUrl, "_blank");
  };

  const handleGeneralWhatsApp = () => {
    const message = encodeURIComponent(generalWhatsappMessage);
    window.open(`https://wa.me/${generalWhatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl">🇿🇼</span>
              <span className="font-display font-bold text-xl text-foreground">
                ZimTech<span className="text-primary">Paths</span>
              </span>
            </Link>
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              👩‍💻👨‍💻 Real People, Real Advice
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Ask a <span className="text-gradient">Tech Senior</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Talk to students and professionals already in tech.
              Ask real questions. Get honest answers.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={handleGeneralWhatsApp}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
              <Button
                onClick={handleRequestMentorship}
                size="lg"
                variant="outline"
              >
                <FileText className="w-5 h-5" />
                Request a Mentor
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => document.getElementById("mentors")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Linkedin className="w-5 h-5" />
                View LinkedIn Profiles
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 px-4 border-b border-border">
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">{mentors.length}+</p>
              <p className="text-sm text-muted-foreground">Mentors</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground">Universities</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">Free</p>
              <p className="text-sm text-muted-foreground">Always</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section id="mentors" className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-display font-bold">Meet Our Mentors</h2>
            </div>

            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search by name, role, or university..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {fields.map((field) => (
                  <Button
                    key={field}
                    variant={selectedField === field || (!selectedField && field === "All") ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedField(field === "All" ? null : field)}
                  >
                    {field}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mentor Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor) => (
              <MentorCard
                key={mentor.id}
                mentor={mentor}
                onRequestMentorship={handleRequestMentorship}
                onViewProfile={handleViewProfile}
              />
            ))}
          </div>

          {filteredMentors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No mentors found matching your search.</p>
              <Button
                variant="link"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedField(null);
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Become a Mentor CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Are You a Tech Professional? 🌟</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Share your journey with the next generation. Join our mentor community and help
              A-Level graduates find their path in tech.
            </p>
            <Button
              size="lg"
              onClick={() => window.open(mentorshipFormUrl, "_blank")}
              className="bg-gradient-hero text-white"
            >
              Become a Mentor
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <SafetySection />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container max-w-6xl mx-auto text-center">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <span className="text-2xl">🇿🇼</span>
            <span className="font-display font-bold text-xl text-foreground">
              ZimTech<span className="text-primary">Paths</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ for A-Level graduates in Zimbabwe
          </p>
        </div>
      </footer>

      {/* Mentor Profile Modal */}
      <MentorProfileModal
        mentor={selectedMentor}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Mentorship;
