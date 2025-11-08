import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainSections from './components/MainSections';

export default function App() {
  // Ensure smooth scroll behavior on older browsers
  useEffect(() => {
    if ('scrollBehavior' in document.documentElement.style) return;
    const onClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="min-h-screen bg-[#070a12] text-white selection:bg-cyan-500/40 selection:text-white">
      <Navbar />
      <main className="relative">
        <Hero />
        <MainSections />
      </main>
    </div>
  );
}
