import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CareerPaths from "@/components/CareerPaths";
import Universities from "@/components/Universities";
import Quiz from "@/components/Quiz";
import Communities from "@/components/Communities";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CareerPaths />
      <Universities />
      <Quiz />
      <Communities />
      <Footer />
    </div>
  );
};

export default Index;
