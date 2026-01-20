const testimonials = [
  {
    quote:
      "Degvora transformed our vision into a high-performance reality. Their technical depth in API architecture is unmatched.",
    author: "James Wilson",
    position: "CTO @ TechFlow Solutions",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
  },
  {
    quote:
      "The attention to detail and premium aesthetics they brought to our web app significantly boosted our user engagement.",
    author: "Elena Rodriguez",
    position: "Founder @ NexaVantage",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-dark-lighter relative overflow-hidden">
      {/* Decorative quotes */}
      <div className="absolute top-10 left-10 text-[200px] text-white/5 font-serif leading-none select-none">
        “
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="card glass p-10 border-l-4 border-l-primary"
            >
              <p className="text-xl md:text-2xl text-slate-200 italic mb-8 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-14 h-14 rounded-full object-cover grayscale"
                />
                <div>
                  <h4 className="text-lg font-bold">{t.author}</h4>
                  <p className="text-slate-500 text-sm">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
