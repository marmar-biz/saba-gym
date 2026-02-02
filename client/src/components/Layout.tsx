import { Link, useLocation } from "wouter";
import { Dumbbell, Home, Menu, X, Instagram, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { href: "/", label: "خانه", icon: Home },
    { href: "/services", label: "خدمات", icon: Dumbbell },
    { href: "/contact", label: "تماس با ما", icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans" dir="rtl">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-all shadow-sm">
              <img 
                src="/logo.jpg" 
                alt="Saba Gym Studio" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <span className="font-display text-2xl text-accent pt-1">Saba Gym Studio</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary relative py-1",
                  location === item.href ? "text-primary font-bold" : "text-foreground/70"
                )}
              >
                {item.label}
                {location === item.href && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-0 right-0 w-full h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}
            <a 
              href="https://instagram.com/sabagymstudio" 
              target="_blank" 
              rel="noreferrer"
              className="text-foreground/70 hover:text-[#E1306C] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground/80"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-20 px-4"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={cn(
                    "p-4 rounded-xl flex items-center gap-4 text-xl font-medium transition-all",
                    location === item.href 
                      ? "bg-primary/10 text-primary" 
                      : "bg-white/50 text-foreground/80"
                  )}
                >
                  <item.icon className="w-6 h-6" />
                  {item.label}
                </Link>
              ))}
              <div className="mt-8 pt-8 border-t border-border flex justify-center gap-6">
                <a href="https://instagram.com/sabagymstudio" className="p-3 bg-white rounded-full shadow-sm text-[#E1306C]">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-primary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl text-accent mb-4">Saba Gym Studio</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8 font-light">
            جایی برای کشف بهترین نسخه خودت. تمرین هوشمندانه، تغذیه سالم، زندگی شادتر.
          </p>
          <div className="flex justify-center gap-2 text-sm text-muted-foreground">
            © {new Date().getFullYear()} تمامی حقوق محفوظ است
          </div>
        </div>
      </footer>
    </div>
  );
}
