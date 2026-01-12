import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇿🇼</span>
            <span className="font-display font-bold text-xl">
              ZimTech<span className="text-primary">Paths</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 text-security fill-current" /> for A-Level graduates in Zimbabwe
          </div>

          <div className="flex items-center gap-6">
            <a href="#careers" className="text-sm text-muted-foreground hover:text-background transition-colors">
              Careers
            </a>
            <a href="#universities" className="text-sm text-muted-foreground hover:text-background transition-colors">
              Universities
            </a>
            <a href="#communities" className="text-sm text-muted-foreground hover:text-background transition-colors">
              Communities
            </a>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ZimTechPaths. Helping Zimbabwean students find their tech career path.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
