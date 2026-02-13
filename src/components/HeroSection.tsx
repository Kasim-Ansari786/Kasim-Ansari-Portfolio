import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-mono text-primary text-sm mb-4 tracking-wider">
              // Hello World, I am
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight"
          >
            Kasim <span className="text-gradient">Ansari</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-light"
          >
            Senior Software Developer · Full-Stack Developer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} className="text-primary" /> Mumbai, India
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail size={14} className="text-primary" /> kasim.ansari5210@gmail.com
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone size={14} className="text-primary" /> +91 8097335152
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex justify-center gap-4"
          >
            <a
              href="https://github.com/Kasim-Ansari786"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm text-foreground hover:border-primary/50 hover:text-primary transition-all"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kasim-ansari-26b4941b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm text-foreground hover:border-primary/50 hover:text-primary transition-all"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://wa.me/918097335152"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all"
            >
              <Phone size={18} />
              WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
