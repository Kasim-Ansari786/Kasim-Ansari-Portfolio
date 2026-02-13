import { motion } from "framer-motion";
import { Code2, Database, Globe, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, label: "4.5+ Years", desc: "Professional Experience" },
  { icon: Globe, label: "Full-Stack", desc: ".NET, React, Node.js" },
  { icon: Database, label: "Database Expert", desc: "SQL Server, PostgreSQL" },
  { icon: Zap, label: "API Specialist", desc: "RESTful Architecture" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-mono text-primary text-sm mb-2">// about me</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Who I <span className="text-gradient">Am</span>
          </h3>

          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            I am a passionate and result-driven Senior Software Developer with 4.5+ years of professional experience in full-stack development. I specialize in building scalable web applications using <span className="text-primary">.NET</span>, <span className="text-primary">C#</span>, <span className="text-primary">React.js</span>, <span className="text-primary">Angular</span>, <span className="text-primary">SQL Server</span>, <span className="text-primary">PostgreSQL</span>, and <span className="text-primary">REST APIs</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-12">
            I have strong expertise in backend architecture, API development, database optimization, and frontend UI development. I enjoy solving real-world business problems through clean, efficient, and maintainable code.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-gradient rounded-xl border border-border p-5 text-center hover:glow-border transition-all duration-300"
              >
                <item.icon className="mx-auto mb-3 text-primary" size={28} />
                <p className="font-semibold text-foreground text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
