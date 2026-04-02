import { GraduationCap, Award, Target } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
const cards = [
    { icon: GraduationCap, title: "Academic Excellence", desc: "CGPA 8.9 — 2 semesters completed" },
    { icon: Award, title: "Certification", desc: "GUVI Full Stack Development" },
    { icon: Target, title: "Career Goal", desc: "Aspiring Software Engineer, Seeking Internship" },
];
const About = () => (<section id="about" className="section-padding relative">
    <div className="container mx-auto px-4 md:px-8">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12"/>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <AnimatedSection delay={0.1}>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I am currently pursuing MCA at KCG College of Engineering. My passion
              for technology started when I became a Computer Science topper in my
              12th standard.
            </p>
            <p>
              After completing my Full Stack Development certification from GUVI, I
              have been actively preparing myself to transition into the tech industry.
            </p>
            <p>
              Currently, I am focused on improving my problem-solving skills through
              Data Structures and Algorithms and actively applying for internships.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-4">
          {cards.map((c, i) => (<AnimatedSection key={c.title} delay={0.15 + i * 0.1}>
              <motion.div whileHover={{ scale: 1.02, y: -2 }} className="glass rounded-xl p-5 flex items-start gap-4 hover:border-primary/50 transition-all duration-300">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <c.icon size={24}/>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </motion.div>
            </AnimatedSection>))}
        </div>
      </div>
    </div>
  </section>);
export default About;
