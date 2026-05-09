import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { FaCopy } from "react-icons/fa6";


const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const  onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSending) return;

    const formData = new FormData(e.currentTarget);
    

    setIsSending(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/singhrajaryan66@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Could not send your message. Please email me directly.");
    } finally {
      setIsSending(false);
    }
  };

  const emailRef = useRef<HTMLDivElement>(null)

  const copyEmail = async (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const email =  emailRef.current?.textContent?.trim();
    if(!email) return


    try {

      await navigator.clipboard.writeText(email)
      toast.success('Copied!')
      
    } catch (error) {
      toast.error("Could not copy email.")
      
    }
  }

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
            <a href="mailto:singhrajaryan66@gmail.com" className="sticker bg-sticker-yellow rounded-2xl p-5 flex  items-center gap-4 block" >
              <Mail />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-70">Email</div>
                <div className="font-semibold" id="email" ref={emailRef}  >singhrajaryan66@gmail.com</div>
                
              </div>
              <FaCopy className="mt-3 hover:text-white" onClick={copyEmail} />
            </a>
            <a href="https://www.linkedin.com/in/rajaryan77/" target="_blank" className="sticker bg-sticker-pink rounded-2xl p-5 flex items-center gap-4 block">
              <Linkedin />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-70">LinkedIn</div>
                <div className="font-semibold">/in/rajaryan77</div>
              </div>
            </a>
            <a href="https://github.com/Rajaryan99"  target="_blank" className="sticker bg-sticker-blue rounded-2xl p-5 flex items-center gap-4 block">
              <Github />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-70">GitHub</div>
                <div className="font-semibold">@Rajaryan99</div>
              </div>
              
            </a>
            <a href="https://x.com/beingrax"  target="_blank" className="sticker bg-sticker-green rounded-2xl p-5 flex items-center gap-4 block">
              <Twitter />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-70">Twitter</div>
                <div className="font-semibold">@beingrax</div>
              </div>
            </a>
            
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 sticker bg-background rounded-3xl p-8 space-y-4">
            <input type="hidden" name="_subject" value="New portfolio message" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_replyto" value={form.email} />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <div>
              <label className="block text-sm font-bold mb-2">Your name</label>
              <input
                required
                name="name"
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
                name="email"
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
                name="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border-2 border-foreground bg-card rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit" 
              disabled={isSending}
              className="sticker bg-foreground text-background rounded-full px-8 py-3 font-semibold w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? "Sending..." : "Send message →"}
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-24 border-t-2 border-foreground pt-8 pb-6">
        <div className="container flex flex-wrap justify-between items-center gap-4 text-sm">
          <p className="font-semibold">© 2025 Raj Aryan.</p>
          <p className="text-muted-foreground">Made with React + Tailwind ✦</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
