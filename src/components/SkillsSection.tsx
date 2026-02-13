import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend Development",
    skills: ["C#", "ASP.NET", "ASP.NET MVC", ".NET Core", "Entity Framework", "REST APIs",
             "Node.js", "Express.js", "Java (Basic)", "Spring Boot (Basic)", 
             "MS SQL Server","SQL Queries", "PostgreSQL","SQL Server Reporting Services SSRS"],
  },

  {
    title: "Frontend Development",
    skills: ["React.js", "Angular", "HTML5", "CSS3", "JavaScript", "TypeScript", "jQuery", "Ajax", 
             "Razor Pages", "jQuery","Next.js","React Native","ASP.NET","C#", "MVC", "ASP.NET Core","ASP.NET Web API","ASP.NET - Web Services"],
  },

  {
    title: "Database",
    skills: ["SQL Server", "PostgreSQL", "Oracle (Basic)", "MongoDB (Basic)", "Oracle Database","MariaDB"],
  },

  {
    title: "Tools & Technologies",
    skills: ["Git", "Postman", "Jira", "ServiceNow", "SSRS", "Azure", "VS Code", "Visual Studio", "AWS", "Azure", "GCP"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-mono text-primary text-sm mb-2">// skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Tech <span className="text-gradient">Stack</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-gradient rounded-xl border border-border p-6 hover:glow-border transition-all duration-300"
              >
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-primary font-mono text-xs">▸</span>
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-secondary/50 px-3 py-1.5 text-xs text-secondary-foreground font-mono hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
