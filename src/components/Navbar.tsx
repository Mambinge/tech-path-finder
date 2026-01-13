import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { label: "Career Paths", href: "#careers", homeOnly: true },
    { label: "Universities", href: "#universities", homeOnly: true },
    { label: "Communities", href: "#communities", homeOnly: true },
    { label: "Take Quiz", href: "#quiz", homeOnly: true },
    { label: "Contact", href: "#contact", homeOnly: true },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("#") && !isHomePage) {
      window.location.href = "/" + href;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🇿🇼</span>
            <span className="font-display font-bold text-xl text-foreground">
              ZimTech<span className="text-primary">Paths</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {isHomePage && navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/mentorship"
              className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              <Users className="w-4 h-4" />
              Ask a Senior
            </Link>
            {isHomePage && (
              <a
                href="#quiz"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Find My Path
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {isHomePage && navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground py-2 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <Link
                to="/mentorship"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-primary py-2 font-semibold"
              >
                <Users className="w-4 h-4" />
                Ask a Tech Senior
              </Link>
              {isHomePage && (
                <a
                  href="#quiz"
                  onClick={() => setIsOpen(false)}
                  className="bg-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold text-center"
                >
                  Find My Path
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
