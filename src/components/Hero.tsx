import { Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Full-width background image */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Sri Naveenraj R"
        className="absolute right-0 top-0 h-full w-[70%] object-cover object-top"
      />
      {/* Solid dark left side + gradient fade into image */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,30%,8%)] from-30% via-[hsl(220,30%,8%,0.8)] via-45% to-transparent" />
    </div>

    {/* Content */}
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <div className="max-w-2xl space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl"
        >
          Hi everyone 👋
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
        >
          I'm <span className="text-gradient">Sri Naveenraj R</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-primary font-medium h-8"
        >
          <ReactTyped
            strings={[
              "Full Stack Developer",
              "Aspiring Software Engineer",
              "Problem Solver",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground max-w-md text-lg"
        >
          I build scalable web applications and modern user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex gap-4 pt-2"
        >
          <a
            href="https://github.com/srinaveenrajr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-all text-muted-foreground"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sri-naveenraj-r/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-all text-muted-foreground"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <a
      href="#about"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
    >
      <ArrowDown size={24} />
    </a>
  </section>
);

export default Hero;
