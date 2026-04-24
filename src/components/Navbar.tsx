import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(94%,900px)]">
      <nav className="sticker bg-background rounded-full px-5 py-3 flex items-center justify-between">
        <a href="#home" className="font-display text-xl">Raj<span className="text-accent">.</span></a>
        <ul className="hidden md:flex items-center gap-7 text-sm font-semibold">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-accent transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-block sticker bg-foreground text-background rounded-full px-4 py-1.5 text-sm font-semibold">
          Hire me
        </a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="md:hidden mt-3 sticker bg-background rounded-2xl p-4 flex flex-col gap-3 font-semibold">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-1">{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
