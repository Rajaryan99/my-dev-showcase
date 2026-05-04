import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "Nimbus Analytics",
    desc: "Real-time SaaS dashboard for product teams with custom event pipelines.",
    tags: ["Next.js", "React.js",  "PostgreSQL", "tRPC"],
    color: "bg-sticker-blue",
  },
  {
    n: "02",
    title: "Pocket Banking App",
    desc: "Mobile-first neobank prototype with biometric auth and instant transfers.",
    tags: ["React Native", "Node", "Stripe"],
    color: "bg-sticker-pink",
  },
  {
    n: "03",
    title: "Verdant E-commerce",
    desc: "Headless storefront for a sustainable brand. 99 Lighthouse score.",
    tags: ["Remix", "Shopify", "Tailwind"],
    color: "bg-sticker-green",
  },
  {
    n: "04",
    title: "Lumen AI Chat",
    desc: "Streaming chat assistant with custom retrieval over private docs.",
    tags: ["OpenAI", "Edge Functions", "Vector DB"],
    color: "bg-accent",
  },
  {
    n: "05",
    title: "Studio Portfolio CMS",
    desc: "Self-serve CMS for design studios with live preview & roles.",
    tags: ["TypeScript", "Prisma", "AWS"],
    color: "bg-sticker-yellow",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="font-semibold text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Selected Work
            </p>
            <h2 className="text-6xl sm:text-7xl md:text-8xl">
              Pr<span className="text-accent">o</span>jects
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A small slice of things I've designed, built, and shipped recently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.n}
              className={`sticker rounded-3xl p-6 ${p.color} flex flex-col justify-between min-h-[280px] ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-5xl">{p.n}</span>
                <a href="https://github.com/Rajaryan99" className="sticker rounded-full bg-background w-11 h-11 grid place-items-center hover:bg-foreground hover:text-background transition-colors">
                  <ArrowUpRight size={18} />
                </a>
              </div>
              <div>
                <h3 className="text-3xl mb-2">{p.title}</h3>
                <p className="text-sm mb-4 opacity-80">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-bold bg-background border-2 border-foreground rounded-full px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
