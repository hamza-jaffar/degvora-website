import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      const navBg = document.querySelector(".nav-bg");
      if (window.scrollY > 50) {
        navBg?.classList.replace("opacity-0", "opacity-100");
        nav?.classList.add("shadow-xl");
      } else {
        navBg?.classList.replace("opacity-100", "opacity-0");
        nav?.classList.remove("shadow-xl");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Smooth entrance animation for all sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll("section").forEach((section) => {
      section.classList.add("opacity-0");
      observer.observe(section);
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-slate-200 bg-dark selection:bg-primary/30 selection:text-white">
      <Helmet>
        <title>Degvora | Premium Software House & API Experts</title>
        <meta
          name="description"
          content="Degvora is a premium software house specializing in modern web applications, high-performance APIs, and digital innovation using React, Next.js, and Laravel."
        />
        <meta
          name="keywords"
          content="Degvora, Software House, Web Development, API Development, React, Next.js, Laravel, Premium Design, Tech Innovation"
        />
        <meta name="author" content="Hamza Jaffar" />
        <link rel="canonical" href="https://degvora.com/" />
        <meta
          property="og:title"
          content="Degvora | Premium Software House & API Experts"
        />
        <meta
          property="og:description"
          content="Building the future of digital innovation with premium software solutions and APIs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://degvora.com/" />
      </Helmet>

      <Navbar />

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Team />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      <style>{`
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
}

export default App;
