import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import devconnectImg from "@/assets/project-devconnect.jpg";
import shopsphereImg from "@/assets/project-shopsphere.jpg";
import fittrackImg from "@/assets/project-fittrack.jpg";

const projects = [
  {
    img: devconnectImg,
    title: "DevConnect",
    desc: "A community platform for developers to share projects and collaborate with peers.",
    live: "#",
    github: "#",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    img: shopsphereImg,
    title: "ShopSphere",
    desc: "An e-commerce application with product filtering, cart management, and payment integration.",
    live: "#",
    github: "#",
    tags: ["React", "Express", "MongoDB"],
  },
  {
    img: fittrackImg,
    title: "FitTrack",
    desc: "A fitness tracking app to monitor workouts, calories, and daily health goals.",
    live: "#",
    github: "#",
    tags: ["React", "Redux", "REST API"],
  },
];

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        My <span className="text-gradient">Projects</span>
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={640}
                height={512}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
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
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
