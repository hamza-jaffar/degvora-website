import { ourDesignAndDevelopmentProcess } from "@/constant/our-design-and-development-process";

const OurDesignAndDevelopmentProcess = () => {
  return (
    <section id="process" className="w-full max-w-7xl mx-auto py-12 px-4">
      {/* Heading */}
      <div className="text-center flex flex-col items-center gap-5">
        <span className="w-24 h-2 rounded-full bg-linear-to-r from-(--secondary-light) to-(--primary-light)" />

        <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
          Our Design and <br />
          <span className="font-bold text-(--primary)">
            Development Process
          </span>
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        {ourDesignAndDevelopmentProcess.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-lg border border-(--secondary)/20 p-6 transition-all duration-300 hover:shadow-xl cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl"
                style={{
                  background: `linear-gradient(to right, ${item.gradient_from}, ${item.gradient_to})`,
                }}
              >
                <img
                  src={item.icon_url}
                  alt={item.title}
                  className="w-7 h-7 object-contain"
                />
              </div>

              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                {item.title}
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurDesignAndDevelopmentProcess;
