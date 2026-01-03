// App.jsx
import React from "react";

function App() {
  return (
    <div className="font-sans text-gray-900 scroll-smooth">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center py-5 px-6">
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-600 tracking-wider">
            Degvora
          </h1>
          <div className="space-x-8 text-gray-800 font-medium text-lg">
            <a href="#about" className="hover:text-indigo-600 transition">
              About
            </a>
            <a href="#projects" className="hover:text-indigo-600 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-indigo-600 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

        <h1 className="relative text-5xl md:text-7xl font-extrabold text-white mb-5 animate-fadeIn">
          Degvora
        </h1>
        <p className="relative text-lg md:text-2xl mb-10 max-w-2xl text-white/90 animate-fadeIn delay-200">
          Building premium online software solutions and APIs for modern web
          applications.
        </p>
        <a
          href="#projects"
          className="relative bg-white text-indigo-600 font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-100 transition animate-fadeIn delay-400"
        >
          See Projects
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            About Degvora
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Degvora is a home-based online software company founded by Hamza. I
            specialize in creating modern web applications using React, Next.js,
            Laravel, and Tailwind CSS. Currently, I'm working on projects like{" "}
            <a
              href="https://mockapi.degvora.com/"
              className="text-indigo-600 hover:underline font-semibold"
            >
              MockAPI
            </a>
            , helping developers rapidly build and test APIs.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Project Card */}
            <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 transform hover:scale-105 hover:shadow-3xl transition duration-500">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                MockAPI v1
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                A premium API mocking platform for rapid development and
                testing.
              </p>
              <a
                href="https://mockapi.degvora.com/"
                target="_blank"
                className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-700 transition"
              >
                Visit Project
              </a>
            </div>
            {/* Add more project cards here */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Contact Me
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            I'm a solo developer working remotely. Reach out for collaborations,
            inquiries, or project ideas.
          </p>
          <a
            href="mailto:info@degvora.com"
            className="bg-indigo-600 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl hover:bg-indigo-700 transition text-lg md:text-xl"
          >
            Email Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-10 shadow-inner mt-12">
        <div className="container mx-auto text-center text-gray-600 text-lg">
          © {new Date().getFullYear()} Degvora. All rights reserved.
        </div>
      </footer>

      {/* Animations */}
      <style jsx>{`
        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 8s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default App;
