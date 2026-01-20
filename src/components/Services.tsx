const Services = () => {
  const services = [
    {
      title: "Full-Stack Ecosystems",
      description:
        "Building end-to-end applications that are not just scalable, but resilient and future-proof.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Architectural APIS",
      description:
        "Enterprise-grade APIs designed for maximum throughput and seamless third-party integration.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      color: "from-purple-600 to-indigo-500",
    },
    {
      title: "Conversion UI/UX",
      description:
        "Strategic interface design focused on reducing friction and maximizing user conversion rates.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
      color: "from-pink-600 to-rose-500",
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Serverless and microservices architecture optimized for global availability and high-scale.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      color: "from-emerald-600 to-teal-500",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">
            The Toolkit
          </h2>
          <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Technical Proficiency. <br />
            <span className="text-gradient">Strategic Execution.</span>
          </h3>
          <p className="text-slate-400 text-lg md:text-xl font-medium">
            I don't just provide services; I partner with your business to solve
            problems through engineering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card glass-dark group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all duration-700"></div>

              <div
                className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.color} p-4 mb-8 shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-6 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]`}
              >
                <div className="text-white">{service.icon}</div>
              </div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight">
                {service.title}
              </h4>
              <p className="text-slate-400 leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
