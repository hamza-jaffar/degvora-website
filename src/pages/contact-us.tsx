import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import { Mail, PhoneIcon } from "lucide-react";

const ContactUsPage = () => {
  return (
    <section className="flex flex-col min-h-screen items-center w-full">
      <NavBar />

      <div className="mt-16 p-6 sm:p-12 max-w-7xl w-full flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Left: Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Contact Us
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl">
            We are committed to helping you bring your project to life. Reach
            out to us, and we’ll get back to you as soon as possible.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            {/* Phone */}
            <div className="flex items-center gap-4 p-4">
              <PhoneIcon className="w-6 h-6 text-[#57007B]" />
              <a
                href="tel:+923466624947"
                className="text-gray-900 text-lg sm:text-xl font-medium"
              >
                +92 346 662 4947
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-4">
              <Mail className="w-6 h-6 text-[#57007B]" />
              <a
                href="mailto:contact@degvora.com"
                className="text-gray-900 text-lg sm:text-xl font-medium"
              >
                contact@degvora.com
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="w-full md:w-1/2 flex flex-col gap-6 px-6 sm:px-12">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-300 w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-300 w-full"
          />
          <input
            type="text"
            placeholder="Enter Subject"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-300 w-full"
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-300 resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-linear-to-r cursor-pointer from-[#6675F7] to-[#57007B] text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-transform w-full sm:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </section>
  );
};

export default ContactUsPage;
