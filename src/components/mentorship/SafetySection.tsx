import { motion } from "framer-motion";
import { Shield, AlertCircle, Heart, Ban } from "lucide-react";

export const SafetySection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-soft"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-full bg-primary/10">
          <Shield className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold">Safety & Respect Guidelines</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex items-start gap-3 p-4 bg-red-500/5 rounded-xl border border-red-500/10">
          <Ban className="w-5 h-5 text-red-500 mt-0.5" />
          <div>
            <h4 className="font-semibold text-sm mb-1">No Payments</h4>
            <p className="text-sm text-muted-foreground">
              Mentorship is free. Never pay anyone claiming to be a TechPath mentor.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-orange-500/5 rounded-xl border border-orange-500/10">
          <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5" />
          <div>
            <h4 className="font-semibold text-sm mb-1">Safe Meetings</h4>
            <p className="text-sm text-muted-foreground">
              No private in-person meetings without consent. Start with virtual chats.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-blue-500/5 rounded-xl border border-blue-500/10">
          <Heart className="w-5 h-5 text-blue-500 mt-0.5" />
          <div>
            <h4 className="font-semibold text-sm mb-1">Be Respectful</h4>
            <p className="text-sm text-muted-foreground">
              Mentors volunteer their time. Be polite, patient, and grateful.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-purple-500/5 rounded-xl border border-purple-500/10">
          <Shield className="w-5 h-5 text-purple-500 mt-0.5" />
          <div>
            <h4 className="font-semibold text-sm mb-1">Report Issues</h4>
            <p className="text-sm text-muted-foreground">
              Abuse leads to removal. Report any concerns to TechPath admins.
            </p>
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground text-center mt-6">
        TechPath Zimbabwe facilitates connections but is not responsible for external conversations.
        Always prioritize your safety.
      </p>
    </motion.section>
  );
};
