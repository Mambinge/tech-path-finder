import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CareerPaths from "@/components/CareerPaths";
import Universities from "@/components/Universities";
import Quiz from "@/components/Quiz";
import Communities from "@/components/Communities";
import { ContactForm } from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CareerPaths />
      <Universities />
      <Quiz />
      <Communities />
      <ContactForm />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
