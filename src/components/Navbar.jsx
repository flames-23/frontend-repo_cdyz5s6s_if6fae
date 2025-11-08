import { useEffect, useState } from 'react';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="px-3 py-2 text-sm md:text-base text-white/80 hover:text-white transition-colors"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors backdrop-blur ${
        scrolled ? 'bg-[#070a12]/90 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="font-semibold tracking-tight text-white">
          <span className="text-cyan-400">&lt;/&gt;</span> Your Name
        </a>
        <div className="flex items-center gap-1 md:gap-2">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
