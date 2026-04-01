import { Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.png";

const Hero = () => (
  <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
    {/* Gradient blobs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

    <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
      {/* Left */}
      <div className="space-y-6 text-center md:text-left">
        <p className="text-4xl md:text-5xl">Hi 👋</p>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
          I'm <span className="text-gradient">Sri Naveenraj R</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium">
          Aspiring Software Engineer
        </p>
        <p className="text-muted-foreground max-w-md mx-auto md:mx-0">
          Full-stack developer passionate about building scalable web applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
        <div className="flex gap-4 justify-center md:justify-start pt-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all text-muted-foreground"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all text-muted-foreground"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110" />
          <img
            src={profileImg}
            alt="Sri Naveen Raj"
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
            width={384}
            height={384}
          />
        </div>
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
