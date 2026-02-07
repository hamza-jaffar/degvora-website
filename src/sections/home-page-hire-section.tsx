import { Link } from "react-router-dom";

const HomePageHireSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 mt-16 mb-8">
      <div className="max-w-6xl mx-auto rounded-3xl bg-gray-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-0">
        {/* Text */}
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center md:text-left md:w-1/2">
          Hire the best developers and designers around!
        </h1>

        {/* Button + Images */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="flex flex-col items-center gap-4">
            <img
              src="/assets/arrows.png"
              alt="arrows"
              className="w-16 sm:w-20 md:w-24"
            />
            <Link to="/contact-us">
              <button className="text-sm hover:scale-105 transition-transform sm:text-base md:text-lg font-semibold bg-linear-to-r from-[#F16063] to-[#FFC656] px-6 py-3 rounded-lg cursor-pointer text-white">
                Hire Top Developers
              </button>
            </Link>
            <img
              src="/assets/arrows.png"
              alt="arrows"
              className="rotate-180 w-16 sm:w-20 md:w-24"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageHireSection;
