import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.open(`mailto:kasim.ansari5210@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Kasim! I'm ${formData.name || "someone"} reaching out from your portfolio.\n\n${formData.message || "I'd like to connect with you."}`
    );
    window.open(`https://wa.me/918097335152?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-mono text-primary text-sm mb-2">// contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Get In <span className="text-gradient">Touch</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm open for full-time and remote opportunities. Feel free to reach out via email, WhatsApp, or the contact form.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:kasim.ansari5210@gmail.com"
                  className="flex items-center gap-4 card-gradient rounded-xl border border-border p-4 hover:glow-border transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm text-foreground">kasim.ansari5210@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/918097335152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 card-gradient rounded-xl border border-border p-4 hover:glow-border transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">WhatsApp</p>
                    <p className="text-sm text-foreground">+91 8097335152</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 card-gradient rounded-xl border border-border p-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm text-foreground">Sion, Mumbai – 400017, India</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/Kasim-Ansari786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kasim-ansari-26b4941b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-1.5 block">Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-1.5 block">Message</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all"
                >
                  <Send size={16} />
                  Send Email
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-6 py-3 text-sm text-primary hover:bg-primary/20 transition-all"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
