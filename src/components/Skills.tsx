import { Code, Server, Cpu } from "lucide-react";

const categories = [
  {
    icon: Code,
    title: "Frontend",
    skills: ["React", "Redux Toolkit", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"],
  },
  {
    icon: Cpu,
    title: "Programming & Other",
    skills: ["JavaScript", "Java", "DSA (Learning)", "Database Management", "Problem Solving"],
  },
];

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Skills & <span className="text-gradient">Expertise</span>
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <cat.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
