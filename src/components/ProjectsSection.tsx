import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";

const projects = [
  {
    title: "Water Tank Management System",
    desc: "Web-based application to monitor, manage, and track water tank operations in residential buildings, commercial complexes, and industrial sites with real-time tracking.",
    features: ["Real-Time Tracking", "Dashboard Analytics", "Tanker Management", "Role-Based Access", "Vendor Management", "Reports & Export"],
    tech: ["React.js", "Node.js", "Express.js", "MS SQL Server", "PostgreSQL"],
    link: "https://tms.comdata.in/",
  },
  {
    title: "Admin Management System – Academic & Coaching",
    desc: "Full-stack web application to manage academic institutions including student management, teacher management, attendance tracking, fee management, exams, and reporting.",
    features: ["Student & Teacher Mgmt", "Fee Tracking", "Attendance", "Exam Results", "Dashboard Analytics", "Role-Based Access"],
    tech: ["React.js", "Node.js", "Express.js", "MS SQL Server", "PostgreSQL"],
    link: "https://soneadmin.comdata.in/",
  },
  {
    title: "Admin Management System",
    desc: "Web-based dashboard to manage users, roles, and system records with secure authentication and role-based access control.",
    features: ["Secure Login", "Role-Based Access", "CRUD Operations", "Dynamic Data Tables", "Real-Time Updates"],
    tech: ["React.js", "Node.js", "PostgreSQL", "Express.js"],
    link: "https://coneadmin.comdata.in/",
  },
  {
    title: "Rent Uncle – Property Management",
    desc: "Platform for NRIs and property owners outside India. Manages properties, tenants, owners, and brokers with multiple panels.",
    features: ["Admin Panel", "Owner Panel", "Tenant Panel", "Broker Panel", "Rent Tracking"],
    tech: ["React.js", "Angular", "Node.js", "PostgreSQL"],
  },
  {
    title: "CMMS",
    desc: "Computerized Maintenance Management System with 30+ application pages, reporting system, and full API integration.",
    features: ["30+ Pages", "SSRS Reporting", "API Integration", "Database Management"],
    tech: ["ASP.NET MVC", "SQL Server", "SSRS", "C#"],
  },
  {
    title: "Loan Origination System",
    desc: "Application monitoring, incident handling, database optimization, and performance tracking for loan processing.",
    features: ["Application Monitoring", "Incident Handling", "Performance Tracking", "Root Cause Analysis"],
    tech: ["ASP.NET", "SQL Server", "C#"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-mono text-primary text-sm mb-2">// projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Featured <span className="text-gradient">Work</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-gradient rounded-xl border border-border p-6 hover:glow-border transition-all duration-300 group cursor-pointer block"
              >
                <div className="flex items-start justify-between mb-3">
                  <Layers className="text-primary" size={24} />
                  {project.link && <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />}
                </div>

                <h4 className="font-bold text-lg text-foreground mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.features.map((f) => (
                    <span key={f} className="text-[10px] text-primary border border-primary/20 rounded-full px-2 py-0.5">
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;