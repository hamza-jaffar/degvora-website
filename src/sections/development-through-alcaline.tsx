import { developmentThroughAlcaline } from "@/constant/development-through-alcaline";
import type { DevelopmentThroughAlcaline } from "@/types";
import { useState } from "react";

const DevelopmentThroughAlcaline = () => {
  const [evenProcess] = useState<DevelopmentThroughAlcaline[]>(
    developmentThroughAlcaline.filter((step) => step.process_number % 2 === 0),
  );
  const [oddProcess] = useState<DevelopmentThroughAlcaline[]>(
    developmentThroughAlcaline.filter((step) => step.process_number % 2 !== 0),
  );

  return (
    <section className="w-full max-w-7xl mx-auto px-4 mt-16 mb-8">
      {/* Heading */}
      <div className="text-center flex flex-col items-center gap-5">
        <span className="w-24 h-2 rounded-full bg-linear-to-r from-(--secondary-light) to-(--primary-light)" />

        <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
          How development <br />
          <span className="font-bold text-(--primary)">
            through Alcaline works
          </span>
        </h1>
      </div>

      {/* Content */}
      <div className="mt-6 hidden md:flex flex-row lg:flex-col ">
        <div className="relative px-4 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-y-0 lg:gap-x-4">
          {oddProcess.map((step) => (
            <div className="flex h-full items-center lg:flex-col" key={step.id}>
              <div className="bg-white border border-(--primary-light)/20 w-xs h-full rounded-xl p-6 max-w-sm shadow-sm hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <span className="bg-linear-to-b from-(--secondary) to-(--primary) bg-clip-text text-transparent font-bold">
                    #{step.id}{" "}
                  </span>
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="w-12 h-[2px] lg:h-12 lg:w-[2px] bg-(--secondary-light)" />
            </div>
          ))}
        </div>
        <div className="flex items-center flex-col lg:flex-row gap-3">
          <div className="w-[2px] lg:w-full h-full lg:h-[2px] bg-(--secondary-light)" />
          <img src="/assets/trophy-perspective-matter.png" alt="" />
        </div>
        <div className="relative px-4 grid mt-20 lg:mt-0 grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-y-0 lg:gap-x-4">
          {evenProcess.map((step) => (
            <div key={step.id} className="flex h-full items-center lg:flex-col">
              <div className="w-12 h-[2px] lg:h-12 lg:w-[2px] bg-(--secondary-light)" />
              <div className="bg-white border border-(--primary-light)/20 w-xs h-full rounded-xl p-6 max-w-sm shadow-sm hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <span className="bg-linear-to-b from-(--secondary) to-(--primary) bg-clip-text text-transparent font-bold">
                    #{step.id}{" "}
                  </span>
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 md:hidden">
        {developmentThroughAlcaline.map((step) => (
          <div key={step.id} className="flex h-full items-center flex-col">
            <div className="bg-white border border-(--primary-light)/20 w-full h-full rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                <span className="bg-linear-to-b from-(--secondary) to-(--primary) bg-clip-text text-transparent font-bold">
                  #{step.id}{" "}
                </span>
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="h-12 w-[2px] bg-(--secondary-light)" />
          </div>
        ))}
        <div className="flex justify-center">
          <img src="/assets/trophy-perspective-matter.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default DevelopmentThroughAlcaline;
