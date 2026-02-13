import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "BSc in Computer Science",
    school: "SIES College, Mumbai University",
    period: "2018 – 2022",
    grade: "SGPA: 8.69",
  },
  {
    degree: "HSC (12th)",
    school: "Shubash Chandra Boss Paliya College",
    period: "2018",
    grade: "69%",
  },
  {
    degree: "SSC (10th)",
    school: "Shribaba Barkhandi High School",
    period: "2016",
    grade: "68%",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-mono text-primary text-sm mb-2">// education</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Academic <span className="text-gradient">Background</span>
          </h3>

          <div className="space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-gradient rounded-xl border border-border p-6 flex items-start gap-4 hover:glow-border transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-bold text-foreground">{edu.degree}</h4>
                    <span className="text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{edu.school}</p>
                  <p className="text-sm text-primary font-mono mt-1">{edu.grade}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
