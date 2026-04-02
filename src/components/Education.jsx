import { GraduationCap, Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
const timeline = [
    {
        icon: GraduationCap,
        category: "Education",
        title: "MCA — KCG College of Engineering",
        subtitle: "CGPA: 8.9",
        detail: "Currently pursuing Master of Computer Applications",
    },
    {
        icon: Briefcase,
        category: "Experience",
        title: "Self-Taught Developer",
        subtitle: "GUVI Full Stack Certification",
        detail: "Completed Full Stack Development certification. Currently preparing DSA and applying for internships.",
    },
];
const Education = () => (<section id="education" className="section-padding relative">
    <div className="container mx-auto px-4 md:px-8">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Education & <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12"/>
      </AnimatedSection>

      <div className="max-w-3xl mx-auto space-y-8">
        {timeline.map((item, i) => (<AnimatedSection key={i} delay={i * 0.15}>
            <motion.div whileHover={{ scale: 1.02, y: -2 }} className="glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <item.icon size={22}/>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {item.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm font-medium text-primary mt-1">{item.subtitle}</p>
              <p className="text-muted-foreground mt-2 text-sm">{item.detail}</p>
            </motion.div>
          </AnimatedSection>))}
      </div>
    </div>
  </section>);
export default Education;
