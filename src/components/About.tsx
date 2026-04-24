import { Code2, Layers, Rocket, Coffee } from "lucide-react";

const stats = [
  { icon: Code2, label: "Years Coding", value: "5+" },
  { icon: Rocket, label: "Projects Shipped", value: "30+" },
  { icon: Layers, label: "Tech Stacks", value: "12" },
  { icon: Coffee, label: "Cups of Chai", value: "∞" },
];

const stack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  Backend: ["Node.js", "Express", "tRPC", "GraphQL", "PostgreSQL"],
  Tools: ["AWS", "Docker", "Git", "Figma", "Vercel"],
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-card border-y-2 border-foreground relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-semibold text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
              About Me
            </p>
            <h2 className="text-6xl sm:text-7xl md:text-8xl mb-8">
              Hi, I'm<br />
              <span className="text-accent">Raj.</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground max-w-lg">
              <p>
                I'm a full stack developer based in India, building delightful products at the intersection of design and engineering.
              </p>
              <p>
                I love turning fuzzy ideas into shipped software — fast prototypes, clean architecture, and pixel-perfect interfaces. Currently exploring AI-powered tooling and edge runtimes.
              </p>
              <p>
                Outside of code, you'll find me sketching, reading sci-fi, or hunting for the perfect cup of filter coffee.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((s) => (
                <div key={s.label} className="sticker bg-background rounded-2xl p-5">
                  <s.icon className="text-accent mb-2" />
                  <div className="font-display text-3xl">{s.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {Object.entries(stack).map(([cat, items], i) => (
              <div
                key={cat}
                className="sticker bg-background rounded-3xl p-6"
                style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
              >
                <h3 className="text-2xl mb-4">{cat}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((it) => (
                    <span key={it} className="border-2 border-foreground bg-card rounded-full px-4 py-1.5 font-semibold text-sm">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="sticker bg-accent text-accent-foreground rounded-3xl p-6 rotate-1">
              <h3 className="text-2xl mb-2">Currently</h3>
              <p className="opacity-90">Open to freelance projects and full-time roles. Let's build something good.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
