const projects = [
  {
    title: "MockAPI Ecosystem",
    category: "SaaS / Developer Tools",
    description:
      "Interactive API mocking platform helping thousands of developers worldwide build and test applications faster.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    link: "https://mockapi.degvora.com/",
  },
  {
    title: "E-Commerce Nexus",
    category: "Web Application",
    description:
      "A premium headless commerce platform built with Next.js and Laravel, focusing on speed and intuitive UX.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    link: "#",
  },
  {
    title: "FinanceFlow Dashboard",
    category: "Enterprise UI",
    description:
      "Real-time financial analytics dashboard with complex data visualization and secure API integration.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-dark-lighter">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              Our Work
            </h2>
            <h3 className="text-4xl md:text-5xl font-black mb-6">
              Recent Collaborations & Projects
            </h3>
            <p className="text-slate-400 text-lg">
              Explore how we've helped businesses transform their digital
              presence with cutting-edge technology.
            </p>
          </div>
          <a href="#contact" className="btn-secondary whitespace-nowrap">
            View All Projects
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl aspect-16/10 mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <span className="btn-primary scale-90">View Case Study</span>
                </div> */}
              </div>
              <div className="flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-wider mb-2">
                <span className="w-8 h-px bg-accent"></span>
                {project.category}
              </div>
              <h4 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
