import Spline from '@splinetool/react-spline';

export default function Hero() {
  const handleScroll = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#070a12]/20 via-[#070a12]/40 to-[#070a12] pointer-events-none" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex flex-col justify-center">
        <p className="text-cyan-400/90 tracking-widest uppercase text-xs md:text-sm">Designer • Developer</p>
        <h1 className="mt-3 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Your Name</span>.
        </h1>
        <p className="mt-4 text-white/80 max-w-xl text-base md:text-lg">
          A creative designer & developer crafting premium digital experiences with a futuristic touch.
        </p>
        <div className="mt-8">
          <button
            onClick={handleScroll}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold px-5 py-3 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_28px_rgba(34,211,238,0.55)]"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
}
