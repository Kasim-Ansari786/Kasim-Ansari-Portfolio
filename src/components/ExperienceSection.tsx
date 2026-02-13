import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Developer",
    company: "Com-Data Pvt Ltd",
    location: "Mumbai",
    period: "09/2025 – Present",
    points: [
      "Developed Admin Management System with React.js frontend",
      "Built RESTful APIs with secure authentication & role-based access",
      "Optimized PostgreSQL queries for performance",
      "Created reusable frontend components",
    ],
  },
  {
    title: "Senior Software Developer",
    company: "Houzing Partners Pvt. Ltd",
    location: "Mumbai",
    period: "2025",
    points: [
      "Worked on Rent Uncle – Property Management Platform",
      "Developed Admin Panel & Customer Panel",
      "Backend with Node.js & PostgreSQL",
      "Integrated APIs and secure login system",
    ],
  },
  {
    title: "Junior Software Developer",
    company: "E4 Software Services Pvt Ltd",
    location: "Mumbai",
    period: "2023 – 2025",
    points: [
      "Worked on Loan Origination System (LOS)",
      "Debugged production issues & performance monitoring",
      "Database optimization using SQL",
      "API integration and SSRS reporting",
    ],
  },
  {
    title: "Software Developer",
    company: "Excelasofts Software Solutions",
    location: "Mumbai",
    period: "2022 – 2023",
    points: [
      "Developed 30+ application pages for CMMS",
      "Implemented reporting features with SSRS",
      "Built modules using ASP.NET MVC & SQL Server",
    ],
  },
  {
    title: "Junior Developer",
    company: "Innolix Software Pvt Ltd",
    location: "Mumbai",
    period: "2021 – 2022",
    points: [
      "Assisted in backend development with ASP.NET & C#",
      "Collaborated in team-based API development",
      "Worked with SQL Server databases",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-mono text-primary text-sm mb-2">// experience</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Work <span className="text-gradient">History</span>
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-[19px]" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-1 w-4 h-4 rounded-full border-2 border-primary bg-background" />

                  <div className="card-gradient rounded-xl border border-border p-6 hover:glow-border transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-bold text-foreground">{exp.title}</h4>
                        <p className="text-primary text-sm flex items-center gap-2">
                          <Briefcase size={14} />
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.points.map((point, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5 shrink-0">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
