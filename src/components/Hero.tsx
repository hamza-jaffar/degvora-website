const Hero = () => {
  return (
    <section className="relative min-h-screen pb-16 flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute top-0 -left-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] animate-blob"></div>
      <div className="absolute bottom-0 -right-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/3 rounded-full blur-[200px]"></div>

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-dark mb-10 border border-white/10 animate-fade-in-up shadow-xl">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-sm font-semibold text-slate-300 tracking-wide uppercase">
            Engineering Digital Excellence
          </span>
        </div>

        <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter animate-fade-in-up animation-delay-200 leading-[0.9]">
          Modern Software <br />
          <span className="text-gradient">Mastered.</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-14 leading-relaxed animate-fade-in-up animation-delay-400 font-medium">
          Premium software solutions, engineered for high-growth businesses. We
          bridge complex logic with stunning aesthetics.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in-up animation-delay-600">
          <a href="#portfolio" className="btn-primary group">
            <span className="relative z-10 flex items-center">
              Our Methodology
              <svg
                className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </a>
          <a href="#services" className="btn-secondary">
            Core Services
          </a>
        </div>

        <div className="mt-32 pt-16 mb-16 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 hover:opacity-100 transition-opacity duration-700 animate-fade-in-up animation-delay-800">
          {["React.js", "Next.js", "Laravel", "Native APIs"].map((tech) => (
            <div
              key={tech}
              className="flex items-center justify-center font-black text-2xl text-slate-200 tracking-widest uppercase italic"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
        <svg
          className="w-8 h-8 text-slate-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
