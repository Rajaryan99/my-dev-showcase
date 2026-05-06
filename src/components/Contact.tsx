import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container">
        <div className="text-center mb-12">
          <p className="font-semibold text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Get In Touch
          </p>
          <h2 className="text-6xl sm:text-7xl md:text-8xl">
            Let's <span className="text-accent">talk.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-4">
            <a href="mailto:raj@example.com" className="sticker bg-sticker-yellow rounded-2xl p-5 flex items-center gap-4 block">
              <Mail />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-70">Email</div>
                <div className="font-semibold">singhrajaryan66@gmail.com</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/rajaryan77/" className="sticker bg-sticker-pink rounded-2xl p-5 flex items-center gap-4 block">
              <Linkedin />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-70">LinkedIn</div>
                <div className="font-semibold">/in/rajaryan77</div>
              </div>
            </a>
            <a href="#" className="sticker bg-sticker-blue rounded-2xl p-5 flex items-center gap-4 block">
              <Github />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-70">GitHub</div>
                <div className="font-semibold">@rajaryan</div>
              </div>
            </a>
            <a href="#" className="sticker bg-sticker-green rounded-2xl p-5 flex items-center gap-4 block">
              <Twitter />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-70">Twitter</div>
                <div className="font-semibold">@rajbuilds</div>
              </div>
            </a>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 sticker bg-background rounded-3xl p-8 space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Your name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border-2 border-foreground bg-card rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border-2 border-foreground bg-card rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="jane@studio.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Project details</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border-2 border-foreground bg-card rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" className="sticker bg-foreground text-background rounded-full px-8 py-3 font-semibold w-full sm:w-auto">
              Send message →
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-24 border-t-2 border-foreground pt-8 pb-6">
        <div className="container flex flex-wrap justify-between items-center gap-4 text-sm">
          <p className="font-semibold">© 2025 Raj Aryan. Crafted with care.</p>
          <p className="text-muted-foreground">Made with React + Tailwind ✦</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
