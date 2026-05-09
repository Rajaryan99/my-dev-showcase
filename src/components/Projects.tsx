import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { a } from "vitest/dist/chunks/suite.d.FvehnV49.js";

const projects = [
  {
    n: "01",
    title: "QueryGPT – AI-powered chat Web App,",
    desc: "Developed an AI-powered search and query assistant using modern JavaScript and API integration, enabling users to generate intelligent responses dynamically",
    tags: ["React.js", "Node.js",  "MongoDB", "OpenAI API", "Context API", "Bcrypt"],
    demo: "https://query-gpt-openai.vercel.app/",
    github: "https://github.com/Rajaryan99/QueryGPT_OpenAI_Full-Stack_Project",
    color: "bg-sticker-blue",
  },
  {
    n: "02",
    title: " SeeYou Video-conferencing-App-webRTC",
    desc: "Built a real-time video conferencing application using WebRTC for peer-to-peer communication, and used socket for bi-directional connection for Chat/Messages.",
    tags: ["React.js", "Node.js", "WebRTC", "Socket.io", "REST API's", "JWT Auth"],
    demo: "https://seeyou-video-conferencing-web-uuqx.onrender.com/",
    github: "https://github.com/Rajaryan99/SeeYou-Video-Conferencing-web-application-WebRTC",
    color: "bg-sticker-pink",
  },
  {
    n: "03",
    title: "Version-control-System",
    desc: "Developed a full-stack GitHub Clone using MongoDB, Express.js, React.js, and Node.js, implementing secure JWT-based authentication and repository CRUD functionality.",
    tags: ["React.js", "", "Tailwind", "Node.js", "express", "AWS", "REST API's",],
    demo: "https://main.d37y4f57y4w6ph.amplifyapp.com/auth",
    github: "https://github.com/Rajaryan99/version-control-system",
    color: "bg-sticker-green",
  },
  {
    n: "04",
    title: "Zerodha Clone",
    desc: "It's a frontend clone of Zerodha a trading platform, with minimal UI/UX Experience and smooth nevigation between differenct sections.",
    tags: ["React.js", "Material UI", "TailwindCSS", "React-Router", "Render"],
    demo: "https://zerodha-clone-frontend-0bma.onrender.com/",
    github: "https://github.com/Rajaryan99/Zerodha-Clone",
    color: "bg-accent",
  },
  {
    n: "05",
    title: "WounderLust - Airbnb clone ",
    desc: "A full-stack project that allows user to explore, add, edit, update, review, and manage rental listing with Auth, CURD operation and image upload-.",
    tags: ["HTML", "CSS", "Javascript", "Bootstrap", "TailwindCSS", "Database", "Cloudinary", "Render"],
    demo: "https://wounderlust-airbnb-website.onrender.com/",
    github: "https://github.com/Rajaryan99/wounderLust-airbnb-website-fullStack-Project",
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
                <div className="flex justify-center items-center">
                <a href={p.github} target="_blank" className="sticker rounded-full bg-background w-9 h-9 grid place-items-center hover:bg-foreground hover:text-background transition-colors">
                  <FaGithub size={30} />
                </a>
                <a 
              href={p.demo}
              target="_blank"
                  className=" sticker text-sm font-bold text-accent  border p-2 rounded-sm ml-5  bg-white text-black hover:bg-foreground hover:text-background transition-colors"

              >
                Live Demo
              </a>
              </div>
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
