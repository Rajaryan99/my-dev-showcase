import portrait from "@/assets/raj-portrait.png";
import me from "@/assets/me.png"
import { Sparkles, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="container relative">
        {/* Floating stickers */}
        <div className="absolute top-10 left-2 sm:left-10 sticker bg-sticker-yellow rounded-2xl px-3 py-1.5 text-xs font-bold rotate-[-8deg] animate-float">
          ✦ Full Stack Dev
        </div>
        <div className="absolute top-32 right-2 sm:right-10 sticker bg-sticker-pink rounded-2xl px-3 py-1.5 text-xs font-bold rotate-[6deg] animate-float" style={{ animationDelay: "1s" }}>
          React · Node · TS
        </div>

        <div className="text-center">
          <p className="font-semibold text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Raj Aryan · '25
          </p>
          <h1 className="text-[18vw] sm:text-[14vw] md:text-[11rem] leading-[0.85] font-display">
            P<span className="inline-block text-accent">o</span>rt
            <span className="inline-block text-stroke">f</span>oli
            <span className="inline-block animate-wiggle origin-bottom">o</span>
          </h1>

          <div className="relative mx-auto mt-8 w-fit">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 tape rounded-sm" />
            <img
              src={portrait}
              alt="Illustrated portrait of Raj Aryan"
              width={320}
              height={390}
              className="w-56 sm:w-72 md:w-80 mx-auto drop-shadow-xl"
            />
            <Sparkles className="absolute -left-6 top-12 text-accent animate-wiggle" />
            <Star className="absolute -right-4 top-20 text-sticker-yellow fill-sticker-yellow" />
          </div>

          <p className="max-w-xl mx-auto mt-8 text-base sm:text-lg text-muted-foreground">
            Hi, I'm <span className="font-semibold text-foreground">Raj</span> — a full stack developer who builds fast, delightful web apps with clean code and crafted details.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <a href="#projects" className="sticker bg-foreground text-background rounded-full px-6 py-3 font-semibold">
              See my work
            </a>
            <a href="#contact" className="sticker bg-sticker-yellow rounded-full px-6 py-3 font-semibold">
              Let's talk →
            </a>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 border-y-2 border-foreground bg-background overflow-hidden py-4">
        <div className="flex gap-12 whitespace-nowrap animate-marquee w-max font-display text-3xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 items-center pr-12">
              <span>React</span><span className="text-accent">✦</span>
              <span>TypeScript</span><span className="text-accent">✦</span>
              <span>Node.js</span><span className="text-accent">✦</span>
              <span>Next.js</span><span className="text-accent">✦</span>
              <span>PostgreSQL</span><span className="text-accent">✦</span>
              <span>Tailwind</span><span className="text-accent">✦</span>
              <span>AWS</span><span className="text-accent">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
