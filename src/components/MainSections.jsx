import { useEffect, useRef } from 'react';
import { Github, Linkedin, CheckCircle2, ExternalLink } from 'lucide-react';

function useRevealAnimation() {
  const containerRef = useRef(null);
  useEffect(() => {
    const els = containerRef.current?.querySelectorAll('[data-reveal]') ?? [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove('opacity-0', 'translate-y-6');
            e.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return containerRef;
}

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 py-24 md:py-32">
    <div className="max-w-6xl mx-auto px-4">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-white">
          <span className="text-cyan-400">//</span> {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);

const skills = [
  { name: 'React', icon: CheckCircle2 },
  { name: 'Figma', icon: CheckCircle2 },
  { name: 'Node.js', icon: CheckCircle2 },
  { name: 'Tailwind', icon: CheckCircle2 },
  { name: 'Framer Motion', icon: CheckCircle2 },
];

const projects = [
  {
    id: 1,
    title: 'Nebula UI System',
    desc: 'A modular design system with motion-first components.',
    thumb:
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1400&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533119408463-b0f4879a2563?q=80&w=1400&auto=format&fit=crop',
    ],
    url: 'https://example.com',
  },
  {
    id: 2,
    title: 'Quantum Portfolio',
    desc: 'A high-end portfolio with 3D interactions and Spline.',
    thumb:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1400&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop',
    ],
    url: 'https://example.com',
  },
  {
    id: 3,
    title: 'Astra Commerce',
    desc: 'Headless e-commerce prototype with stunning product stories.',
    thumb:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1400&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop',
    ],
    url: 'https://example.com',
  },
];

function Modal({ open, onClose, project }) {
  if (!open || !project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-[92vw] max-w-3xl rounded-2xl border border-white/10 bg-[#0b1020] shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-white/10 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-white/70 text-sm mt-1">{project.desc}</p>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold px-4 py-2 transition-colors"
          >
            Visit <ExternalLink size={16} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
          {project.gallery.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Project visual"
              className="h-56 w-full object-cover rounded-xl"
              loading="lazy"
            />
          ))}
        </div>
        <div className="p-4 flex justify-end">
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white px-4 py-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
export default function MainSections() {
  const containerRef = useRevealAnimation();
  const [openId, setOpenId] = useState(null);
  const active = projects.find((p) => p.id === openId);

  return (
    <div ref={containerRef}>
      {/* About */}
      <Section id="about" title="About Me">
        <div
          data-reveal
          className="opacity-0 translate-y-6 transition-all duration-700"
        >
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <p className="text-white/80 leading-relaxed">
              I'm a multidisciplinary creator focused on elevating brands and
              products through design and code. I love crafting clean interfaces,
              immersive interactions, and performant systems that feel delightful
              and futuristic.
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((s) => (
                <li
                  key={s.name}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                >
                  <s.icon className="text-cyan-400" size={18} />
                  <span className="text-sm">{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Work */}
      <Section id="work" title="Selected Work">
        <div
          data-reveal
          className="opacity-0 translate-y-6 transition-all duration-700"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => setOpenId(p.id)}
                className="group text-left rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors shadow-lg"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={p.thumb}
                    alt={p.title}
                    className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white">{p.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{p.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Get In Touch">
        <div
          data-reveal
          className="opacity-0 translate-y-6 transition-all duration-700"
        >
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <p className="text-white/80">
                Have a project in mind or just want to say hi? Let's build
                something remarkable together.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 transition-colors"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 transition-colors"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                const name = f.get('name');
                const email = f.get('email');
                const message = f.get('message');
                alert(`Thanks ${name}! I will reach you at ${email}. Message: ${message}`);
                e.currentTarget.reset();
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-white/70 mb-1">Name</label>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400/60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400/60"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400/60"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold px-5 py-3 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_28px_rgba(34,211,238,0.55)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-white/50">
        © {new Date().getFullYear()} Your Name — All Rights Reserved.
      </footer>

      <Modal open={!!openId} onClose={() => setOpenId(null)} project={active} />
    </div>
  );
}
