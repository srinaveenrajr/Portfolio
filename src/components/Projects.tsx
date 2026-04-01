import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const projects = [
  {
    title: "TN Powerlog",
    desc: "A smart calculator application for efficient power and energy calculations with modern UI.",
    live: "#",
    github: "https://github.com/srinaveenrajr",
    tags: ["React", "JavaScript", "CSS"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "AssessPro",
    desc: "An online assessment platform for conducting and managing exams with real-time evaluation.",
    live: "#",
    github: "https://github.com/srinaveenrajr",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Devbook",
    desc: "A social media platform built for developers to connect, share projects, and collaborate.",
    live: "#",
    github: "https://github.com/srinaveenrajr",
    tags: ["React", "Express", "MongoDB"],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

const Projects = () => (
  <section id="projects" className="section-padding relative">
    <div className="container mx-auto px-4 md:px-8">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.15}>
            <motion.div
              whileHover={{ scale: 1.03, y: -6 }}
              className="glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 group h-full flex flex-col"
            >
              {/* Gradient header instead of image */}
              <div className={`h-40 bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                <span className="text-3xl font-bold text-foreground/80">{p.title[0]}</span>
              </div>
              <div className="p-5 space-y-3 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button size="sm" asChild>
                    <a href={p.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} className="mr-1" /> Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      <Github size={14} className="mr-1" /> GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
