const Team = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-linear-to-r from-primary via-secondary to-accent rounded-[40px] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative aspect-square rounded-[32px] overflow-hidden glass-dark p-3 border border-white/10">
              <img
                src="/me.JPG"
                alt="Hamza Jaffar"
                className="w-full h-full object-cover rounded-[24px] grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />
              <div className="absolute inset-x-8 bottom-8 glass p-6 rounded-2xl border border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h4 className="text-xl font-bold text-primary">Hamza Jaffar</h4>
                <p className="text-accent text-sm font-bold uppercase">
                  Founder & Lead Architect
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              Behind the Innovation
            </h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Expertise Built on <br />
              <span className="text-gradient">Precision & Vision.</span>
            </h3>

            <div className="space-y-8">
              <p className="text-slate-400 text-lg leading-relaxed">
                As a dedicated Full-Stack Architect, I specialize in engineering
                high-performance digital ecosystems. Degvora is the culmination
                of my passion for clean code, intuitive design, and scalable
                architecture.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass p-6 rounded-2xl border-l-4 border-l-primary">
                  <h5 className="font-bold text-white mb-2 text-lg">
                    Architecture Lead
                  </h5>
                  <p className="text-slate-400 text-sm italic">
                    Designing systems that scale with your ambition.
                  </p>
                </div>
                <div className="glass p-6 rounded-2xl border-l-4 border-l-accent">
                  <h5 className="font-bold text-white mb-2 text-lg">
                    Full-Stuck Engineer
                  </h5>
                  <p className="text-slate-400 text-sm italic">
                    Seamlessly bridging the gap between front & back.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <blockquote className="border-l-2 border-slate-700 pl-6 italic text-slate-400">
                  "I don't just build websites; I engineer digital legacies that
                  drive real business impact."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
